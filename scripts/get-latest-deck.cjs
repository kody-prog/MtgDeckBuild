require('dotenv').config()
const { PrismaClient } = require('../generated/prisma')

const prisma = new PrismaClient()

async function main() {
	const deck = await prisma.deck.findFirst({ orderBy: { createdAt: 'desc' } })
	console.log(deck ? deck.id : '')
}

main().finally(async () => {
	await prisma.$disconnect()
})
