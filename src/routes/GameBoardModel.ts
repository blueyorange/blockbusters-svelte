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
	return questions.map((questionData: Question, index): TileModel => {
		// use modulo arithmetic to get column number
		const col = index % cols;
		// coords stored as doubled row
		// odd columns get one added to row to offset vertically
		const row = 2 * Math.floor(index / cols) + (col % 2);
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
}
