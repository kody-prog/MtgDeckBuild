import 'dotenv/config'
import { Worker, JobsOptions } from 'bullmq'
import IORedis from 'ioredis'
import fetch from 'node-fetch'
import { Client as PgClient } from 'pg'
import { PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient()
const redisUrl = process.env.REDIS_URL || ''
const isTLS = redisUrl.startsWith('rediss://')
const connection = new IORedis(redisUrl, { maxRetriesPerRequest: null, enableReadyCheck: false, ...(isTLS ? { tls: { rejectUnauthorized: false } } : {}) })
const MODEL = 'text-embedding-3-small'

async function embed(text: string) {
	const res = await fetch('https://api.openai.com/v1/embeddings', {
		method: 'POST',
		headers: { 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
		body: JSON.stringify({ model: MODEL, input: text })
	})
	if (!res.ok) throw new Error(`Embedding failed: ${res.status}`)
	const json = await res.json()
	return json.data?.[0]?.embedding as number[]
}

async function handle(job: any) {
	const cardId: string = job.data.cardId
	const card = await prisma.card.findUnique({ where: { id: cardId } })
	if (!card) return
	const text = `${card.name}\n${card.typeLine || ''}\n${card.oracleText || ''}`.slice(0, 8000)
	const vec = await embed(text)
	const pg = new PgClient({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } })
	await pg.connect()
	await pg.query('INSERT INTO card_embeddings (card_id, embedding, model) VALUES ($1, $2, $3) ON CONFLICT (card_id) DO UPDATE SET embedding = EXCLUDED.embedding, model = EXCLUDED.model, updated_at = now()', [card.id, `[${vec.join(',')}]`, MODEL])
	await pg.end()
}

export const worker = new Worker('embeddings', handle, { connection, concurrency: 2, limiter: { max: 60, duration: 60000 } })

export const defaultJobOptions: JobsOptions = { attempts: 6, backoff: { type: 'exponential', delay: 2000 }, removeOnComplete: true, removeOnFail: 100 }
