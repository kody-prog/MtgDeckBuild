"use client"

import { useState } from 'react'

export default function OptimizeClient({ deckId }: { deckId: string }) {
	const [prompt, setPrompt] = useState("")
	const [loading, setLoading] = useState(false)
	const [result, setResult] = useState<any>(null)
	const [error, setError] = useState<string | null>(null)

	async function onOptimize() {
		setLoading(true)
		setError(null)
		setResult(null)
		try {
			const res = await fetch('/api/optimize', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ deckId, prompt }) })
			if (!res.ok) throw new Error(`HTTP ${res.status}`)
			setResult(await res.json())
		} catch (e: any) {
			setError(e?.message || 'Optimization failed')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="space-y-2">
			<h3 className="font-medium">Optimize with AI</h3>
			<textarea className="w-full border rounded p-2" rows={4} placeholder="Tell the AI what you want to optimize (e.g., cut high-CMC ramp, improve synergy with Commander)..." value={prompt} onChange={(e) => setPrompt(e.target.value)} />
			<button className="px-3 py-2 rounded bg-black text-white disabled:opacity-50" disabled={loading} onClick={onOptimize}>{loading ? 'Optimizing...' : 'Run Optimization'}</button>
			{error && <div className="text-red-600">{error}</div>}
			{result && (
				<div className="rounded border p-3">
					<h4 className="font-medium mb-2">Suggestions</h4>
					<ul className="list-disc ml-6">
						{result.suggestions?.map((s: any, idx: number) => (
							<li key={idx}><strong>{s.action.toUpperCase()}</strong>: {s.cardName} — {s.reason}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
