import 'dotenv/config'
import fetch from 'node-fetch'
import { PrismaClient, CardRole } from '../../generated/prisma'

const prisma = new PrismaClient()

async function fetchArchidektDeck(deckId: string) {
	const url = `https://archidekt.com/api/decks/${deckId}/`
	const res = await fetch(url, { headers: { 'User-Agent': 'MTGDeckGem/1.0 (import-script)' } })
	if (!res.ok) throw new Error(`Archidekt fetch failed: ${res.status}`)
	return res.json() as Promise<any>
}

async function fetchScryfallByName(name: string) {
	const url = `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(name)}`
	const res = await fetch(url, { headers: { 'User-Agent': 'MTGDeckGem/1.0 (import-script)' } })
	if (!res.ok) throw new Error(`Scryfall fetch failed: ${res.status}`)
	return res.json() as Promise<any>
}

function mapRoleFromType(typeLine?: string): CardRole {
	if (!typeLine) return CardRole.UNKNOWN
	if (typeLine.includes('Land')) return CardRole.LAND
	return CardRole.UNKNOWN
}

async function upsertCardFromScryfall(card: any) {
	const oracleId: string = card.oracle_id ?? card.id
	const scryfallId: string = card.id
	const name: string = card.name
	const typeLine: string | undefined = card.type_line
	const oracleText: string | undefined = card.oracle_text
	const manaCost: string | undefined = card.mana_cost
	const cmc: number | undefined = typeof card.cmc === 'number' ? card.cmc : undefined
	const colorIdentity: string[] = Array.isArray(card.color_identity) ? card.color_identity : []
	const keywords: string[] = Array.isArray(card.keywords) ? card.keywords : []
	const producedMana: string[] = Array.isArray(card.produced_mana) ? card.produced_mana : []

	const created = await prisma.card.upsert({
		where: { oracleId },
		update: { name, typeLine, oracleText, manaCost, cmc, colorIdentity, keywords, producedMana },
		create: { oracleId, scryfallId, name, typeLine, oracleText, manaCost, cmc, colorIdentity, keywords, producedMana }
	})

	const setCode = card.set
	const collectorNumber = card.collector_number
	await prisma.cardPrint.upsert({
		where: { setCode_collectorNumber: { setCode, collectorNumber } },
		update: { scryfallUri: card.scryfall_uri ?? null, imageUris: card.image_uris ?? null, rarity: card.rarity ?? null },
		create: { cardId: created.id, setCode, collectorNumber, scryfallUri: card.scryfall_uri ?? null, imageUris: card.image_uris ?? null, rarity: card.rarity ?? null }
	})

	return created
}

async function main() {
	const deckIdArg = process.argv[2]
	if (!deckIdArg) throw new Error('Usage: ts-node src/scripts/import-archidekt.ts <deckId>')
	const deckJson = await fetchArchidektDeck(deckIdArg)
	const deckName: string = deckJson.name ?? `Archidekt ${deckIdArg}`
	const commanderNames: string[] = deckJson.commanders?.map((c: any) => c.card?.oracleCard?.name ?? c.card?.name).filter(Boolean) ?? []
	const listEntries: Array<{ count: number; name: string }> = []
	for (const entry of deckJson.cards ?? []) {
		const name = entry.card?.oracleCard?.name ?? entry.card?.name
		const quantity = entry.quantity ?? 1
		if (name) listEntries.push({ count: quantity, name })
	}

	const createdDeck = await prisma.deck.create({ data: { name: deckName, commanderNames, colorIdentity: [] } })

	for (const item of listEntries) {
		try {
			const scry = await fetchScryfallByName(item.name)
			const card = await upsertCardFromScryfall(scry)
			await prisma.deckCard.upsert({
				where: { deckId_cardId: { deckId: createdDeck.id, cardId: card.id } },
				update: { quantity: item.count, category: mapRoleFromType(card.typeLine ?? undefined) },
				create: { deckId: createdDeck.id, cardId: card.id, quantity: item.count, category: mapRoleFromType(card.typeLine ?? undefined) }
			})
		} catch (err) {
			console.error(`Failed to import ${item.name}:`, err)
		}
	}

	console.log(`Imported deck ${createdDeck.name} with ${listEntries.length} entries.`)
}

main().finally(async () => {
	await prisma.$disconnect()
})
