require('dotenv').config()
const fetch = require('node-fetch')
const { PrismaClient, PriceSource } = require('../generated/prisma')

const prisma = new PrismaClient()

async function getBulkDefaultDownloadUrl() {
	const res = await fetch('https://api.scryfall.com/bulk-data', { headers: { 'User-Agent': 'MTGDeckGem/1.0 (ingest-script)' } })
	if (!res.ok) throw new Error(`Bulk index failed: ${res.status}`)
	const data = await res.json()
	const def = (data.data || []).find((e) => e.type === 'default_cards')
	if (!def) throw new Error('default_cards bulk not found')
	return def.download_uri
}

function parseLimitArg() {
	const idx = process.argv.indexOf('--limit')
	if (idx >= 0 && process.argv[idx + 1]) {
		const n = parseInt(process.argv[idx + 1], 10)
		if (!Number.isNaN(n)) return n
	}
	return null
}

async function upsertFromCardJson(card) {
	if (card.object !== 'card') return
	const oracleId = card.oracle_id || card.id
	const scryfallId = card.id
	const name = card.name
	const typeLine = card.type_line || null
	const oracleText = card.oracle_text || null
	const manaCost = card.mana_cost || null
	const cmc = typeof card.cmc === 'number' ? card.cmc : null
	const colorIdentity = Array.isArray(card.color_identity) ? card.color_identity : []
	const keywords = Array.isArray(card.keywords) ? card.keywords : []
	const producedMana = Array.isArray(card.produced_mana) ? card.produced_mana : []

	const cardRow = await prisma.card.upsert({
		where: { oracleId },
		update: { name, typeLine, oracleText, manaCost, cmc, colorIdentity, keywords, producedMana },
		create: { oracleId, scryfallId, name, typeLine, oracleText, manaCost, cmc, colorIdentity, keywords, producedMana }
	})

	const setCode = card.set
	const collectorNumber = card.collector_number
	if (setCode && collectorNumber) {
		await prisma.cardPrint.upsert({
			where: { setCode_collectorNumber: { setCode, collectorNumber } },
			update: { scryfallUri: card.scryfall_uri || null, imageUris: card.image_uris || null, rarity: card.rarity || null },
			create: { cardId: cardRow.id, setCode, collectorNumber, scryfallUri: card.scryfall_uri || null, imageUris: card.image_uris || null, rarity: card.rarity || null }
		})
		if (card.prices && card.prices.usd) {
			const print = await prisma.cardPrint.findUnique({ where: { setCode_collectorNumber: { setCode, collectorNumber } } })
			if (print) {
				await prisma.price.create({ data: { cardPrintId: print.id, source: PriceSource.scryfall_bulk, currency: 'USD', amount: card.prices.usd } })
			}
		}
	}
}

async function main() {
	const limit = parseLimitArg()
	const url = await getBulkDefaultDownloadUrl()
	const res = await fetch(url, { headers: { 'User-Agent': 'MTGDeckGem/1.0 (ingest-script)' } })
	if (!res.ok) throw new Error(`Bulk download failed: ${res.status}`)
	const all = await res.json()
	let count = 0
	for (const card of all) {
		await upsertFromCardJson(card)
		count++
		if (limit && count >= limit) break
		if (count % 500 === 0) console.log(`Upserted ${count} cards...`)
	}
	console.log(`Ingest complete. Upserted ~${count} cards${limit ? ' (limited)' : ''}.`)
}

main()
	.then(() => prisma.$disconnect())
	.catch(async (err) => { console.error(err); await prisma.$disconnect(); process.exit(1) })
