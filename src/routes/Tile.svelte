<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { TileModel } from './GameBoardModel';
	export let tile: TileModel;
	let { col, row, letter } = tile;
	const dispatch = createEventDispatcher();
	function handleClick() {
		dispatch('selectTile', { tile });
	}
</script>

<button
	on:click={handleClick}
	class={`tile ${tile.state}`}
	style="grid-column-start: {col * 3 - 2}; grid-row-start: {row + 1};">{tile.letter}</button
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
	.tile.ready:hover {
		opacity: 0.5;
	}
	.tile.selected {
		animation-name: fadeInOut;
		animation-duration: 1s;
		animation-iteration-count: infinite;
		animation-direction: reverse;
	}
	.tile.white {
		background-color: white;
	}
	.tile.blue {
		background-color: cyan;
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
