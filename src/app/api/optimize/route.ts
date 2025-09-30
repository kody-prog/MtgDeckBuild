import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { BRACKETS, evaluateDeckAgainstBracket, filterExclusions, type BracketId } from '@/lib/brackets'

async function callOpenAI(prompt: string) {
	const apiKey = process.env.OPENAI_API_KEY
	if (!apiKey) return null
	const res = await fetch('https://api.openai.com/v1/chat/completions', {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${apiKey}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			model: 'gpt-4o-mini',
			messages: [
				{ role: 'system', content: 'You are an MTG Commander advisor focused strictly on Brackets 1-4 (non-cEDH). Never suggest cards on the cEDH exclusion list. Prefer synergy, redundancy, and consistent mana. Provide concise, actionable adds/cuts with reasons.' },
				{ role: 'user', content: prompt }
			]
		})
	})
	if (!res.ok) return null
	const data = await res.json()
	return data.choices?.[0]?.message?.content ?? null
}

export async function POST(req: Request) {
	const body = await req.json().catch(() => ({} as any))
	const deckId = body.deckId as string | undefined
	const prompt = (body.prompt as string | undefined)?.trim() || ''
	const bracket: BracketId = Number(body.bracket ?? 3) as BracketId
	if (!deckId) return NextResponse.json({ error: 'deckId required' }, { status: 400 })
	const deck = await prisma.deck.findUnique({
		where: { id: deckId },
		include: { cards: { include: { card: true } } }
	})
	if (!deck) return NextResponse.json({ error: 'Deck not found' }, { status: 404 })

	const report = evaluateDeckAgainstBracket(deck as any, bracket)
	const deckCardNames = deck.cards.flatMap((dc) => Array(dc.quantity).fill(dc.card.name))
	const filteredNames = filterExclusions(deckCardNames)

	const constraintText = JSON.stringify({ bracket, constraints: BRACKETS[bracket], report })
	const deckText = filteredNames.join(', ')
	const userPrompt = `Deck (comma-separated): ${deckText}\nConstraints: ${constraintText}\nUser intent: ${prompt}\nTask: Propose up to 10 cuts and 10 additions that improve synergy and mana consistency while respecting bracket constraints. For each, include a one-sentence reason. Output JSON with { cuts: [{cardName, reason}], adds: [{cardName, reason}] }.`

	const ai = await callOpenAI(userPrompt)
	if (ai) {
		try {
			const jsonStart = ai.indexOf('{')
			const jsonEnd = ai.lastIndexOf('}') + 1
			const parsed = JSON.parse(ai.slice(jsonStart, jsonEnd))
			return NextResponse.json({ deckId, bracket, constraints: BRACKETS[bracket], report, suggestions: parsed })
		} catch {
			// fallthrough to stub
		}
	}

	// Stub fallback
	const lands = deck.cards.filter((dc) => (dc.card.typeLine || '').includes('Land')).reduce((a, dc) => a + dc.quantity, 0)
	const total = deck.cards.reduce((a, dc) => a + dc.quantity, 0)
	const suggestions = {
		cuts: lands > 45 ? [{ cardName: 'Excess Land', reason: 'Reduce lands to improve spell density.' }] : [],
		adds: lands < 38 ? [{ cardName: 'Basic Land', reason: 'Increase lands toward 38 for consistency.' }] : []
	}
	return NextResponse.json({ deckId, bracket, constraints: BRACKETS[bracket], report, suggestions })
}
