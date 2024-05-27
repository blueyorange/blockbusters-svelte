enum TileState {
	White = 'white',
	Blue = 'blue',
	Ready = 'ready'
}

export interface TileModel {
	col: number;
	row: number;
	state: TileState;
	selected: boolean;
	letter: string;
}

export function createGameBoardModel(cols: number, rows: number, letters: string[]): TileModel[] {
	if (letters.length !== rows * cols) {
		throw new RangeError('Number of questions does not match size of grid.');
	}
	return letters.map((letter, index): TileModel => {
		// use modulo arithmetic to get column number
		const col = index % cols;
		// coords stored as doubled row
		// odd columns get one added to row to offset vertically
		const row = 2 * Math.floor(index / cols) + (col % 2);
		const state = TileState.Ready;
		const selected = false;
		return {
			col,
			row,
			state,
			selected,
			letter
		};
	});
}
