require('dotenv').config()
const fetch = require('node-fetch')
const { PrismaClient } = require('../generated/prisma')
const { Client } = require('pg')

const prisma = new PrismaClient()
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const MODEL = 'text-embedding-3-small'

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

async function embed(text) {
	let attempt = 0
	while (attempt < 6) {
		attempt++
		const res = await fetch('https://api.openai.com/v1/embeddings', {
			method: 'POST',
			headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
			body: JSON.stringify({ model: MODEL, input: text })
		})
		if (res.ok) {
			const json = await res.json()
			return json.data?.[0]?.embedding
		}
		if (res.status === 429 || (res.status >= 500 && res.status < 600)) {
			const backoffMs = Math.min(30000, 500 * 2 ** (attempt - 1))
			await sleep(backoffMs)
			continue
		}
		throw new Error(`Embedding failed: ${res.status}`)
	}
	throw new Error('Embedding failed after retries')
}

async function upsertEmbedding(pg, cardId, embedding) {
	await pg.query('INSERT INTO card_embeddings (card_id, embedding, model) VALUES ($1, $2, $3) ON CONFLICT (card_id) DO UPDATE SET embedding = EXCLUDED.embedding, model = EXCLUDED.model, updated_at = now()', [cardId, `[${embedding.join(',')}]`, MODEL])
}

async function main() {
	if (!OPENAI_API_KEY) throw new Error('OPENAI_API_KEY missing')
	const limit = parseInt(process.argv[2] || '200', 10)
	const cards = await prisma.card.findMany({ take: limit, orderBy: { createdAt: 'desc' } })
	const pg = new Client({ connectionString: process.env.DATABASE_URL })
	await pg.connect()
	let n = 0
	for (const c of cards) {
		const text = `${c.name}\n${c.typeLine || ''}\n${c.oracleText || ''}`.slice(0, 8000)
		const vec = await embed(text)
		if (Array.isArray(vec)) {
			await upsertEmbedding(pg, c.id, vec)
			n++
			if (n % 25 === 0) console.log(`Embedded ${n}/${cards.length}`)
		}
		// Gentle pacing to reduce 429s
		await sleep(150)
	}
	await pg.end()
	console.log(`Done. Embedded ${n} cards.`)
}

main().finally(async () => { await prisma.$disconnect() })
