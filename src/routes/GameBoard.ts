import HexGrid from './HexGrid';
import type Question from './Question';

enum TileState {
	White,
	Blue,
	Letter
}
interface TileModel {
	letter: string;
	state: TileState;
	selected: boolean;
}

class TileModel {
	constructor(
		public letter: string,
		public state: TileState,
		public selected: boolean
	) {
		this.letter = letter;
		this.state = state;
		this.selected = false;
	}
}

export default class GameBoard extends HexGrid {
	public rows: number;
	public cols: number;
	private tileMap: Map<string, TileModel>;
	constructor(cols: number, rows: number, questions: Question[]) {
		// initial question set must be equal to size of gameboard
		if (!(questions.length === rows * cols)) {
			throw new RangeError('Question array does not match size of gameboard.');
		}
		super();
		this.rows = rows;
		this.cols = cols;
		questions.forEach((question, index) => {
			// modulo columns to find column
			const col = index % cols;
			// use doubled do-ordinates with +1 to row for odd cols
			const row = 2 * Math.floor(index / rows) + (col % 2);
			console.log(col, row);
			this.addHex(col, row);
		});
	}
	select(col: number, row: number): void {
		// deselect all hexes
		this.getAllHexes().forEach((hex) => {
			if (hex.value) {
				hex.value.selected = false;
			}
		});
		const hexToSelect = this.getHex(col, row);
		if (hexToSelect && hexToSelect.value) {
			hexToSelect.value.selected = true;
		}
	}
}
