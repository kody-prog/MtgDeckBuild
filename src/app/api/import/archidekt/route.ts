import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

async function fetchArchidektDeck(deckId: string) {
	const url = `https://archidekt.com/api/decks/${deckId}/`
	const res = await fetch(url, { headers: { 'User-Agent': 'MTGDeckGem/1.0 (api)' } })
	if (!res.ok) throw new Error(`Archidekt fetch failed: ${res.status}`)
	return res.json() as Promise<any>
}

async function fetchScryfallByName(name: string) {
	const url = `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(name)}`
	const res = await fetch(url, { headers: { 'User-Agent': 'MTGDeckGem/1.0 (api)' } })
	if (!res.ok) throw new Error(`Scryfall fetch failed: ${res.status}`)
	return res.json() as Promise<any>
}

export async function POST(req: Request) {
	const body = await req.json().catch(() => ({}))
	const deckId = body.deckId as string | undefined
	if (!deckId) return NextResponse.json({ error: 'deckId required' }, { status: 400 })

	const deckJson = await fetchArchidektDeck(deckId)
	const deckName: string = deckJson.name ?? `Archidekt ${deckId}`
	const commanderNames: string[] = deckJson.commanders?.map((c: any) => c.card?.oracleCard?.name ?? c.card?.name).filter(Boolean) ?? []
	const entries: Array<{ count: number; name: string }> = []
	for (const entry of deckJson.cards ?? []) {
		const name = entry.card?.oracleCard?.name ?? entry.card?.name
		const quantity = entry.quantity ?? 1
		if (name) entries.push({ count: quantity, name })
	}

	const deck = await prisma.deck.create({ data: { name: deckName, commanderNames, colorIdentity: [] } })

	for (const item of entries) {
		try {
			const scry = await fetchScryfallByName(item.name)
			const oracleId = scry.oracle_id || scry.id
			const card = await prisma.card.upsert({
				where: { oracleId },
				update: { name: scry.name, typeLine: scry.type_line || null, oracleText: scry.oracle_text || null, manaCost: scry.mana_cost || null, cmc: typeof scry.cmc === 'number' ? scry.cmc : null, colorIdentity: scry.color_identity || [], keywords: scry.keywords || [], producedMana: scry.produced_mana || [] },
				create: { oracleId, scryfallId: scry.id, name: scry.name, typeLine: scry.type_line || null, oracleText: scry.oracle_text || null, manaCost: scry.mana_cost || null, cmc: typeof scry.cmc === 'number' ? scry.cmc : null, colorIdentity: scry.color_identity || [], keywords: scry.keywords || [], producedMana: scry.produced_mana || [] }
			})
			await prisma.deckCard.upsert({
				where: { deckId_cardId: { deckId: deck.id, cardId: card.id } },
				update: { quantity: item.count },
				create: { deckId: deck.id, cardId: card.id, quantity: item.count }
			})
		} catch {}
	}

	return NextResponse.json({ id: deck.id })
}
