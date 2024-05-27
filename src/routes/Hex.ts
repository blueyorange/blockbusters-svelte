export default class Hex {
	constructor(
		public col: number,
		public row: number
	) {
		if (!this.validCoords(row, col)) {
			throw new Error(
				'Invalid co-ordinates for Hex object with doubled co-ordinates: must be integers and satisfy the sum to even constraint.'
			);
		}
	}

	private validCoords(row: number, col: number): boolean {
		// co-ordinates should be integers
		const integerCoords = Number.isInteger(row) && Number.isInteger(col);
		// and satisfy the constraint rows + cols %2 === 0
		const sumToEven = (row + col) % 2 === 0;
		return integerCoords && sumToEven;
	}

	get key() {
		return this.col + ',' + this.row;
	}

	// Get all 6 neighbors using doubled coords
	// constraint
	neighbors(): Hex[] {
		const directions = [
			{ col: 0, row: -2 },
			{ col: 0, row: +2 },
			{ col: -1, row: -1 },
			{ col: -1, row: 1 },
			{ col: 1, row: -1 },
			{ col: 1, row: 1 }
		];
		if (this.row % 2 !== 0) {
			directions[1] = { col: 0, row: -1 };
			directions[4] = { col: 0, row: 1 };
		}
		return directions.map((dir) => new Hex(this.col + dir.col, this.row + dir.row));
	}
}
