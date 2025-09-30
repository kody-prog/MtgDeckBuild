import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
	const body = await req.json().catch(() => ({} as any))
	const deckId = body.deckId as string | undefined
	const prompt = (body.prompt as string | undefined)?.trim() || ''
	if (!deckId) return NextResponse.json({ error: 'deckId required' }, { status: 400 })
	const deck = await prisma.deck.findUnique({
		where: { id: deckId },
		include: { cards: { include: { card: true } } }
	})
	if (!deck) return NextResponse.json({ error: 'Deck not found' }, { status: 404 })

	// Stubbed logic: return simple suggestions based on counts and types.
	const lands = deck.cards.filter((dc) => (dc.card.typeLine || '').includes('Land')).reduce((a, dc) => a + dc.quantity, 0)
	const total = deck.cards.reduce((a, dc) => a + dc.quantity, 0)
	const targetLands = 38
	const suggestions: Array<{ action: 'add' | 'cut'; cardName: string; reason: string }> = []
	if (lands < targetLands) {
		suggestions.push({ action: 'add', cardName: 'Basic Land', reason: `Increase lands toward ${targetLands}. Current: ${lands}/${total}.` })
	}
	if (lands > 45) {
		suggestions.push({ action: 'cut', cardName: 'Excess Land', reason: 'Reduce land count to improve spell density.' })
	}

	// Echo prompt to show it is accepted; in real integration, route to your LLM.
	return NextResponse.json({ deckId, prompt, suggestions })
}
