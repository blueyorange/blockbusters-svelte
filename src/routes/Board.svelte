<script lang="ts">
	import type Question from './Question';
	export let questions: Question[];
	import Tile from './Tile.svelte';
	import { createGameBoardModel, type TileModel } from './GameBoardModel';
	import { TileState } from './GameBoardModel';
	let dialog: HTMLDialogElement;
	let details: HTMLDetailsElement;
	const COLS = 5;
	const ROWS = 4;
	let selectedTile: TileModel | null = null;
	let tiles = createGameBoardModel(COLS, ROWS, questions);

	type SelectTileEvent = CustomEvent<{ tile: TileModel }>;

	function handleSelectTile(event: SelectTileEvent) {
		selectedTile = event.detail.tile;
		dialog.showModal();
	}

	function handleClose() {
		if (dialog.returnValue && selectedTile) {
			tiles = tiles.map((tile) => {
				if (tile === selectedTile) {
					return { ...tile, state: dialog.returnValue as TileState, letter: '' };
				} else {
					return tile;
				}
			});
		}
		dialog.returnValue = '';
		details.open = false;
	}
</script>

<div class="grid">
	{#each tiles as tile (tile.col + '-' + tile.row)}
		<Tile {tile} on:selectTile={handleSelectTile}></Tile>
	{/each}
</div>

<dialog bind:this={dialog} on:close={handleClose}>
	<form method="dialog">
		{selectedTile ? selectedTile.question : ''}
		<details bind:this={details}>
			<summary> Reveal Answer... </summary>
			{selectedTile ? selectedTile.answer : ''}
		</details>
		The winner is...
		<button formmethod="dialog" value={TileState.Blue}>Blue</button>
		<button formmethod="dialog" value={TileState.White}>White</button>
	</form>
</dialog>

<style>
	.grid {
		--size: 50px;
		--hex-height: calc(sqrt(3) * var(--size));
		--hex-font-size: var(--hex-height);
		margin: auto;
		display: grid;
		grid-template-columns: repeat(22, calc(var(--size) / 2));
		grid-template-rows: repeat(13, calc(var(--hex-height) / 2));
		grid-gap: 1px;
	}
</style>
