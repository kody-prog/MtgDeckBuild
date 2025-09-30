require('dotenv').config()
const { Client } = require('pg')

async function main() {
	const client = new Client({ connectionString: process.env.DATABASE_URL })
	await client.connect()
	await client.query('CREATE EXTENSION IF NOT EXISTS vector;')
	await client.query(`
		CREATE TABLE IF NOT EXISTS card_embeddings (
			card_id TEXT PRIMARY KEY,
			embedding vector(1536) NOT NULL,
			model TEXT NOT NULL,
			updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
		);
	`)
	await client.query('CREATE INDEX IF NOT EXISTS idx_card_embeddings_embedding ON card_embeddings USING ivfflat (embedding vector_l2_ops) WITH (lists = 100);')
	await client.end()
	console.log('card_embeddings table ready')
}

main().catch((e) => { console.error(e); process.exit(1) })
