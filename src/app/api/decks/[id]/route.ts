import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(_req: Request, { params }: { params: { id: string } }) {
	const deck = await prisma.deck.findUnique({
		where: { id: params.id },
		include: {
			cards: {
				include: { card: true }
			}
		}
	})
	if (!deck) return NextResponse.json({ error: 'Not found' }, { status: 404 })
	return NextResponse.json(deck)
}
