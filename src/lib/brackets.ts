export type BracketId = 1 | 2 | 3 | 4

export interface BracketConstraints {
	maxGameChangers?: number
	allowTwoCardInfinites?: boolean
	allowMassLandDenial?: boolean
	allowExtraTurnChains?: boolean
	maxTutors?: number | 'sparse'
}

export const BRACKETS: Record<BracketId, BracketConstraints> = {
	1: {
		maxGameChangers: 0,
		allowTwoCardInfinites: false,
		allowMassLandDenial: false,
		allowExtraTurnChains: false,
		maxTutors: 'sparse'
	},
	2: {
		maxGameChangers: 1,
		allowTwoCardInfinites: false,
		allowMassLandDenial: false,
		allowExtraTurnChains: false,
		maxTutors: 3
	},
	3: {
		maxGameChangers: 3,
		allowTwoCardInfinites: false,
		allowMassLandDenial: false,
		allowExtraTurnChains: false,
		maxTutors: 5
	},
	4: {
		// Optimized; no additional restrictions beyond banlist
	}
}

export const CEDH_EXCLUSION_LIST: string[] = [
	'Flash',
	"Lion's Eye Diamond",
	'Hermit Druid',
	'Ad Nauseam',
	'Peer into the Abyss',
	'Tainted Pact',
	'Thassa\'s Oracle',
	'Dockside Extortionist',
	'Underworld Breach',
	'Oracle Consult',
]

export interface BracketReportItem {
	constraint: string
	status: 'ok' | 'violation'
	detail?: string
}

export interface BracketReport {
	bracket: BracketId
	items: BracketReportItem[]
}

export function evaluateDeckAgainstBracket(deck: { cards: Array<{ quantity: number; card: { name: string; typeLine?: string; oracleText?: string } }> }, bracket: BracketId): BracketReport {
	const rules = BRACKETS[bracket]
	const items: BracketReportItem[] = []

	// Naive heuristics for tutors, extra turns, land denial, game changers
	const textOf = (dc: any) => `${dc.card.name} ${dc.card.typeLine || ''} ${dc.card.oracleText || ''}`.toLowerCase()
	const countWhere = (pred: (s: string) => boolean) => deck.cards.reduce((acc, dc) => acc + (pred(textOf(dc)) ? dc.quantity : 0), 0)

	const tutors = countWhere((s) => s.includes('search your library') && !s.includes('basic land'))
	const extraTurns = countWhere((s) => s.includes('take an extra turn'))
	const landDenial = countWhere((s) => s.includes('destroy all lands') || s.includes('each player sacrifices a land'))
	const gameChangers = countWhere((s) => s.includes('you win the game') || s.includes('can\'t lose the game') || s.includes('infinite') )

	if (rules.maxTutors !== undefined) {
		if (rules.maxTutors === 'sparse') {
			items.push({ constraint: 'Tutors sparse', status: tutors > 2 ? 'violation' : 'ok', detail: `found ${tutors}` })
		} else {
			items.push({ constraint: `Max tutors ${rules.maxTutors}`, status: tutors > rules.maxTutors ? 'violation' : 'ok', detail: `found ${tutors}` })
		}
	}
	if (rules.allowTwoCardInfinites === false) {
		items.push({ constraint: 'No two-card infinites', status: gameChangers > 0 ? 'violation' : 'ok', detail: `heuristic game changers ${gameChangers}` })
	}
	if (rules.allowMassLandDenial === false) {
		items.push({ constraint: 'No mass land denial', status: landDenial > 0 ? 'violation' : 'ok', detail: `found ${landDenial}` })
	}
	if (rules.allowExtraTurnChains === false) {
		items.push({ constraint: 'No extra turn chains', status: extraTurns > 2 ? 'violation' : 'ok', detail: `found ${extraTurns}` })
	}
	if (typeof rules.maxGameChangers === 'number') {
		items.push({ constraint: `Max game changers ${rules.maxGameChangers}`, status: gameChangers > rules.maxGameChangers ? 'violation' : 'ok', detail: `found ${gameChangers}` })
	}

	return { bracket, items }
}

export function filterExclusions(names: string[]): string[] {
	const set = new Set(CEDH_EXCLUSION_LIST.map((s) => s.toLowerCase()))
	return names.filter((n) => !set.has(n.toLowerCase()))
}
