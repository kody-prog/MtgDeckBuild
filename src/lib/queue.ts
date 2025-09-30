import { Queue } from 'bullmq'
import IORedis from 'ioredis'

const connection = new IORedis(process.env.REDIS_URL || '', {
	maxRetriesPerRequest: null,
	enableReadyCheck: false,
})

export const embeddingsQueue = new Queue('embeddings', { connection })
