// place files you want to import through the `$lib` alias in this folder.

/**
 * Splits an array into chunks of the specified size.
 *
 * @param array - The array to be chunked.
 * @param size - The size of each chunk.
 * @returns An array of arrays, where each sub-array is a chunk of the specified size.
 */
export function chunkArray<T>(array: T[], size: number): T[][] {
	if (size <= 0) {
		throw new Error('Size must be a positive integer');
	}

	const result: T[][] = [];
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}
	return result;
}
