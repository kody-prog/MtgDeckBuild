import { NextResponse } from 'next/server'
import { embeddingsQueue } from '@/lib/queue'
import { PrismaClient } from '@/../generated/prisma'

const prisma = new PrismaClient()

export async function POST() {
	const cards = await prisma.$queryRawUnsafe<{ id: string }[]>(`
		SELECT c.id
		FROM "Card" c
		LEFT JOIN card_embeddings e ON e.card_id = c.id
		WHERE e.card_id IS NULL
		LIMIT 500
	`)
	for (const c of cards) {
		await embeddingsQueue.add('embed', { cardId: c.id })
	}
	return NextResponse.json({ enqueued: cards.length })
}
