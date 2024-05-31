import type Question from './Question';

export enum TileState {
	White = 'white',
	Blue = 'blue',
	Ready = 'ready',
	Selected = 'selected'
}

export interface TileModel {
	col: number;
	row: number;
	state: TileState;
	question: string;
	answer: string;
	letter: string;
}

export function createGameBoardModel(
	cols: number,
	rows: number,
	questions: Question[]
): TileModel[] {
	if (questions.length !== rows * cols) {
		throw new RangeError('Number of questions does not match size of grid.');
	}
	const tiles = questions.map((questionData: Question, index): TileModel => {
		// use modulo arithmetic to get column number
		// offset columns by 2 to fit border tiles and so odd columns are offset down
		const col = (index % cols) + 2;
		// coords stored as doubled row
		// odd columns get one added to row to offset vertically
		const row = 2 * Math.floor(index / cols) + (col % 2) + 2;
		const state = TileState.Ready;
		const { question, answer, letter } = questionData;
		return {
			question,
			answer,
			letter,
			col,
			row,
			state
		};
	});
	// Blue border tiles (column on both sides)
	// rows go up in twos
	for (let row = 1; row <= 2 * rows + 1; row += 2) {
		tiles.push({ question: '', answer: '', letter: '', col: 1, row: row, state: TileState.Blue });
		tiles.push({
			question: '',
			answer: '',
			letter: '',
			col: cols + 2,
			row: row,
			state: TileState.Blue
		});
	}
	// white border tiles
	for (let col = 2; col <= cols + 1; col += 1) {
		tiles.push({
			question: '',
			answer: '',
			letter: '',
			col: col,
			row: col % 2,
			state: TileState.White
		});
		tiles.push({
			question: '',
			answer: '',
			letter: '',
			col: col,
			row: (col % 2) + rows * 2 + 2,
			state: TileState.White
		});
	}
	return tiles;
}
