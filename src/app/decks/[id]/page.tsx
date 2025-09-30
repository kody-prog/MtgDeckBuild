import Link from 'next/link'
import OptimizeClient from './OptimizeClient'

async function getDeck(id: string) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/decks/${id}`, { cache: 'no-store' })
	if (!res.ok) throw new Error('Failed to load deck')
	return res.json()
}

function summarize(deck: any) {
	const total = deck.cards.reduce((acc: number, dc: any) => acc + dc.quantity, 0)
	const lands = deck.cards.filter((dc: any) => (dc.card.typeLine || '').includes('Land')).reduce((a: number, dc: any) => a + dc.quantity, 0)
	return { total, lands }
}

export default async function DeckPage({ params }: { params: { id: string } }) {
	const deck = await getDeck(params.id)
	const { total, lands } = summarize(deck)
	return (
		<div className="p-6 space-y-4">
			<h1 className="text-2xl font-semibold">{deck.name}</h1>
			<p className="text-sm text-gray-500">Commanders: {deck.commanderNames?.join(', ') || '—'}</p>
			<div className="rounded border p-4">
				<h2 className="font-medium mb-2">Counts</h2>
				<ul className="list-disc ml-6">
					<li>Total cards: {total}</li>
					<li>Lands: {lands}</li>
				</ul>
			</div>
			<div className="rounded border p-4 bg-yellow-50 text-yellow-800">
				<strong>Prices may be stale:</strong> Using Scryfall bulk price snapshots. Live TCGplayer integration optional.
			</div>
			<div className="rounded border p-4">
				<OptimizeClient deckId={deck.id} />
			</div>
			<Link className="text-blue-600 underline" href="/">Back</Link>
		</div>
	)
}
