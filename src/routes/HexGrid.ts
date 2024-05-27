import Hex from './Hex';

export default class HexGrid {
	private hexes: Map<string, Hex> = new Map();

	// Convert coordinates to a string key for the map
	protected key(col: number, row: number): string {
		return `${col},${row}`;
	}

	// Add a hex to the grid
	addHex(col: number, row: number): void {
		// convert to doubled co-ordinate
		const hex = new Hex(col, row);
		this.hexes.set(this.key(col, row), hex);
	}

	// Get a hex from the grid
	getHex(col: number, row: number): Hex | undefined {
		return this.hexes.get(this.key(col, row));
	}

	// Check if a hex exists in the grid
	hasHex(col: number, row: number): boolean {
		return this.hexes.has(this.key(col, row));
	}

	// Remove a hex from the grid
	removeHex(col: number, row: number): void {
		this.hexes.delete(this.key(col, row));
	}

	// Get all hexes in the grid
	getAllHexes(): Hex[] {
		return Array.from(this.hexes.values());
	}

	// Get neighbors of a specific hex
	getNeighbors(col: number, row: number): Hex[] {
		const hex = this.getHex(col, row);
		if (!hex) return [];
		return hex.neighbors().filter((neighbor) => this.hasHex(neighbor.col, neighbor.row));
	}
}
