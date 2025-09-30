"use client"

import { useState } from 'react'

type DeckCard = { cardId: string; name: string }

type Props = {
	deckCards: DeckCard[]
}

export default function SimilarClient({ deckCards }: Props) {
	const [selected, setSelected] = useState<string>(deckCards[0]?.cardId || '')
	const [k, setK] = useState<number>(10)
	const [loading, setLoading] = useState(false)
	const [rows, setRows] = useState<Array<{ card_id: string; similarity: number }>>([])
	const [error, setError] = useState<string | null>(null)

	async function onFetch() {
		if (!selected) return
		setLoading(true)
		setError(null)
		setRows([])
		try {
			const res = await fetch(`/api/similar?cardId=${encodeURIComponent(selected)}&k=${k}`)
			if (!res.ok) throw new Error(`HTTP ${res.status}`)
			const json = await res.json()
			setRows(json.data || [])
		} catch (e: any) {
			setError(e?.message || 'Failed to load similar cards')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="space-y-2">
			<h3 className="font-medium">Similar Cards (embeddings)</h3>
			<div className="flex gap-2 items-center flex-wrap">
				<select className="border rounded p-2" value={selected} onChange={(e) => setSelected(e.target.value)}>
					{deckCards.map(dc => (
						<option key={dc.cardId} value={dc.cardId}>{dc.name}</option>
					))}
				</select>
				<input className="border rounded p-2 w-20" type="number" min={1} max={50} value={k} onChange={(e) => setK(Number(e.target.value))} />
				<button className="px-3 py-2 rounded bg-black text-white disabled:opacity-50" disabled={loading} onClick={onFetch}>{loading ? 'Loading...' : 'Find Similar'}</button>
			</div>
			{error && <div className="text-red-600">{error}</div>}
			{rows.length > 0 && (
				<table className="w-full text-sm border mt-2">
					<thead>
						<tr className="bg-gray-50">
							<th className="text-left p-2 border">Card ID</th>
							<th className="text-left p-2 border">Similarity</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((r, i) => (
							<tr key={i}>
								<td className="p-2 border font-mono">{r.card_id}</td>
								<td className="p-2 border">{r.similarity.toFixed(3)}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
			{rows.length === 0 && !loading && <div className="text-gray-500 text-sm">No results yet. Compute embeddings then try again.</div>}
		</div>
	)
}
