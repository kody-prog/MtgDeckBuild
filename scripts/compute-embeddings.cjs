require('dotenv').config()
const fetch = require('node-fetch')
const { PrismaClient } = require('../generated/prisma')
const { Client } = require('pg')

const prisma = new PrismaClient()
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const MODEL = 'text-embedding-3-small'

async function embed(text) {
	const res = await fetch('https://api.openai.com/v1/embeddings', {
		method: 'POST',
		headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
		body: JSON.stringify({ model: MODEL, input: text })
	})
	if (!res.ok) throw new Error(`Embedding failed: ${res.status}`)
	const json = await res.json()
	return json.data?.[0]?.embedding
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
		const text = `${c.name}\n${c.typeLine || ''}\n${c.oracleText || ''}`
		const vec = await embed(text)
		if (Array.isArray(vec)) {
			await upsertEmbedding(pg, c.id, vec)
			n++
			if (n % 25 === 0) console.log(`Embedded ${n}/${cards.length}`)
		}
	}
	await pg.end()
	console.log(`Done. Embedded ${n} cards.`)
}

main().finally(async () => { await prisma.$disconnect() })
