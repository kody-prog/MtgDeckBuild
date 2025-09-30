import Link from 'next/link'
import OptimizeClient from './OptimizeClient'
import { evaluateDeckAgainstBracket } from '@/lib/brackets'

async function getDeck(id: string) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/decks/${id}`, { cache: 'no-store' })
	if (!res.ok) throw new Error('Failed to load deck')
	return res.json()
}

function summarize(deck: any) {
	const total = deck.cards.reduce((acc: number, dc: any) => acc + dc.quantity, 0)
	const lands = deck.cards.filter((dc: any) => (dc.card.typeLine || '').includes('Land')).reduce((a: number, dc: any) => a + dc.quantity, 0)
	const ramp = deck.cards.filter((dc: any) => /add [wubrgc]/i.test(dc.card.oracleText || '') || /Search your library for a land/i.test(dc.card.oracleText || '')).reduce((a: number, dc: any) => a + dc.quantity, 0)
	const draw = deck.cards.filter((dc: any) => /draw .* card/i.test(dc.card.oracleText || '')).reduce((a: number, dc: any) => a + dc.quantity, 0)
	const targeted = deck.cards.filter((dc: any) => /(destroy target|exile target|counter target)/i.test(dc.card.oracleText || '')).reduce((a: number, dc: any) => a + dc.quantity, 0)
	const mass = deck.cards.filter((dc: any) => /(destroy all|each creature)/i.test(dc.card.oracleText || '')).reduce((a: number, dc: any) => a + dc.quantity, 0)
	return { total, lands, ramp, draw, targeted, mass }
}

export default async function DeckPage({ params }: { params: { id: string } }) {
	const deck = await getDeck(params.id)
	const { total, lands, ramp, draw, targeted, mass } = summarize(deck)
	const report = evaluateDeckAgainstBracket(deck, 3)
	return (
		<div className="p-6 space-y-4">
			<h1 className="text-2xl font-semibold">{deck.name}</h1>
			<p className="text-sm text-gray-500">Commanders: {deck.commanderNames?.join(', ') || '—'}</p>
			<div className="rounded border p-4">
				<h2 className="font-medium mb-2">Counts</h2>
				<ul className="list-disc ml-6">
					<li>Total cards: {total}</li>
					<li>Lands: {lands}</li>
					<li>Ramp: {ramp}</li>
					<li>Draw: {draw}</li>
					<li>Targeted Disruption: {targeted}</li>
					<li>Mass Disruption: {mass}</li>
				</ul>
			</div>
			<div className="rounded border p-4">
				<h2 className="font-medium mb-2">Bracket Report (Bracket 3)</h2>
				<ul className="list-disc ml-6">
					{report.items.map((it, i) => (
						<li key={i} className={it.status === 'violation' ? 'text-red-600' : 'text-green-700'}>
							{it.constraint}: {it.status} {it.detail ? `(${it.detail})` : ''}
						</li>
					))}
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
