import { Queue } from 'bullmq'
import IORedis from 'ioredis'

const redisUrl = process.env.REDIS_URL || ''
const isTLS = redisUrl.startsWith('rediss://')

const connection = new IORedis(redisUrl, {
	maxRetriesPerRequest: null,
	enableReadyCheck: false,
	...(isTLS ? { tls: { rejectUnauthorized: false } } : {})
})

export const embeddingsQueue = new Queue('embeddings', { connection })
