import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)
	const q = searchParams.get('q')?.trim()
	if (!q) return NextResponse.json({ data: [] })
	const cards = await prisma.card.findMany({ where: { name: { contains: q, mode: 'insensitive' } }, take: 25 })
	return NextResponse.json({ data: cards })
}
