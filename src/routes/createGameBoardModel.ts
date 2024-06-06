import GameHex from './GameHex';

const board = [
	['b', 'w', 'w', 'w', 'w', 'w', 'b'],
	['b', 'A', 'B', 'C', 'D', 'E', 'b'],
	['b', 'F', 'G', 'H', 'I', 'J', 'b'],
	['b', 'K', 'L', 'M', 'N', 'O', 'b'],
	['b', 'P', 'Q', 'R', 'S', 'T', 'b'],
	[null, 'w', 'w', 'w', 'w', 'w', null]
];

export default function createGameBoardModel(letters: string[]): GameHex[] {
	if (letters.length < 20) throw new RangeError('Not enough letters to fill board.');
	// the reduce function flattens the resulting array
	const hexes = board.reduce((outputArr, currRow, rowIndex) => {
		return outputArr.concat(
			currRow
				// the map function turns each letter into a hex object
				.map((value, colIndex) => {
					// columns start from 1 to to get correct shape given doubled coords
					const col = colIndex + 1;
					// odd columns have odd row values
					// even columns have even row values
					const row = 2 * rowIndex + (col % 2);
					const hex = new GameHex(col, row);
					switch (value) {
						case null:
							return null;
						case 'b':
							hex.taken = 'blue';
							break;
						case 'w':
							hex.taken = 'white';
							break;
						default:
							hex.taken = '';
							hex.letter = (letters.length ? letters.pop() : '') as string;
					}
					return hex;
				})
				.filter((value): value is GameHex => value !== null)
		);
	}, [] as GameHex[]);
	return hexes;
}
