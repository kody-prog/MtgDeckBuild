"use client"

import { useState } from 'react'

export default function OptimizeClient({ deckId }: { deckId: string }) {
	const [prompt, setPrompt] = useState("")
	const [bracket, setBracket] = useState<1 | 2 | 3 | 4>(3)
	const [loading, setLoading] = useState(false)
	const [result, setResult] = useState<any>(null)
	const [error, setError] = useState<string | null>(null)

	async function onOptimize() {
		setLoading(true)
		setError(null)
		setResult(null)
		try {
			const res = await fetch('/api/optimize', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ deckId, prompt, bracket }) })
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
			<label className="block text-sm">Bracket</label>
			<select className="border rounded p-2" value={bracket} onChange={(e) => setBracket(Number(e.target.value) as 1 | 2 | 3 | 4)}>
				<option value={1}>Bracket 1 (Exhibition)</option>
				<option value={2}>Bracket 2</option>
				<option value={3}>Bracket 3 (Upgraded)</option>
				<option value={4}>Bracket 4 (Optimized)</option>
			</select>
			<textarea className="w-full border rounded p-2" rows={4} placeholder="Tell the AI what you want to optimize (e.g., cut high-CMC ramp, improve synergy with Commander)..." value={prompt} onChange={(e) => setPrompt(e.target.value)} />
			<button className="px-3 py-2 rounded bg-black text-white disabled:opacity-50" disabled={loading} onClick={onOptimize}>{loading ? 'Optimizing...' : 'Run Optimization'}</button>
			{error && <div className="text-red-600">{error}</div>}
			{result && (
				<div className="rounded border p-3">
					<h4 className="font-medium mb-2">Suggestions</h4>
					<pre className="whitespace-pre-wrap text-sm">{JSON.stringify(result.suggestions, null, 2)}</pre>
				</div>
			)}
		</div>
	)
}
