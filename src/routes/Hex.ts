export default class Hex {
	public id: string;
	constructor(
		public col: number,
		public row: number
	) {
		if (!this.validCoords(row, col)) {
			throw new Error(
				`Invalid co-ordinates ${col},${row} for Hex object with doubled co-ordinates: must be integers and satisfy the sum to even constraint.`
			);
		} else {
			this.id = `${this.col}-${this.row}`;
		}
	}

	private validCoords(row: number, col: number): boolean {
		// co-ordinates should be integers
		const integerCoords = Number.isInteger(row) && Number.isInteger(col);
		// and satisfy the constraint rows + cols %2 === 0
		const sumToEven = (row + col) % 2 === 0;
		return integerCoords && sumToEven;
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
		return directions.map((dir) => new Hex(this.col + dir.col, this.row + dir.row));
	}
}
