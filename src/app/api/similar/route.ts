import { NextResponse } from 'next/server'
import { Client } from 'pg'

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)
	const cardId = searchParams.get('cardId')
	const k = Number(searchParams.get('k') ?? 10)
	if (!cardId) return NextResponse.json({ error: 'cardId required' }, { status: 400 })
	const client = new Client({ connectionString: process.env.DATABASE_URL })
	await client.connect()
	const rs = await client.query(
		`WITH src AS (SELECT embedding FROM card_embeddings WHERE card_id = $1)
		 SELECT c.card_id, ca.name, 1 - (ce.embedding <=> s.embedding) AS similarity
		 FROM src s
		 JOIN card_embeddings ce ON true
		 JOIN card ca ON ca.id = ce.card_id
		 ORDER BY ce.embedding <-> s.embedding
		 LIMIT $2`,
		[cardId, k]
	)
	await client.end()
	return NextResponse.json({ data: rs.rows })
}
