<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { TileModel } from './GameBoardModel';
	export let tileModel: TileModel;
	let { col, row, letter } = tileModel;
	const dispatch = createEventDispatcher();
	function handleClick() {
		dispatch('selectTile', { col, row, letter });
	}
</script>

<button
	on:click={handleClick}
	class="tile"
	class:selected={tileModel.selected}
	style="grid-column-start: {col * 3 + 1}; grid-row-start: {row + 1};">{letter}</button
>

<style>
	@import url('https://fonts.cdnfonts.com/css/ds-digital');
	.tile {
		border: none;
		background-color: yellow;
		width: calc(2 * var(--size));
		height: var(--hex-height);
		clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
		text-align: center;
		line-height: var(--hex-height);
		font-size: var(--hex-font-size);
		font-family: 'ds-digital', Courier, monospace;
		transition: 0.3s;
	}
	.tile:hover {
		opacity: 0.5;
	}
	.tile.selected {
		animation-name: fadeInOut;
		animation-duration: 1s;
		animation-iteration-count: infinite;
		animation-direction: reverse;
	}
	@keyframes fadeInOut {
		0% {
			opacity: 0.5;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.5;
		}
	}
</style>
