<script lang="ts">
	export let letters: string[];
	import Tile from './Tile.svelte';
	import { createGameBoardModel } from './GameBoardModel';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	const COLS = 5;
	const ROWS = 4;
	let tiles = createGameBoardModel(COLS, ROWS, letters);
	function handleClick(event: CustomEvent<{ col: number; row: number; letter: string }>) {
		const { col, row, letter } = event.detail;
		dispatch('selectLetter', { letter });
		tiles = tiles.map((tile) => {
			if (row === tile.row && col === tile.col) {
				return { ...tile, selected: true };
			} else {
				return { ...tile, selected: false };
			}
		});
	}
</script>

<div class="grid">
	{#each tiles as tileModel (tileModel.col + '-' + tileModel.row)}
		<Tile {tileModel} on:selectTile={handleClick}></Tile>
	{/each}
</div>

<style>
	.grid {
		--size: 8vh;
		--hex-height: calc(sqrt(3) * var(--size));
		--hex-font-size: var(--hex-height);
		display: grid;
		grid-template-columns: repeat(22, calc(var(--size) / 2));
		grid-template-rows: repeat(13, calc(var(--hex-height) / 2));
		grid-gap: 1px;
	}
</style>
