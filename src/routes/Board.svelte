<script lang="ts">
	import GameHex from './GameHex';
	export let hexes: GameHex[];
	import { selectedLetter } from './stores';
</script>

<div class="grid">
	{#each hexes as hex (hex.id)}
		<button
			on:click={() => selectedLetter.set(hex.letter)}
			data-letter={hex.letter}
			class={`hex ${hex.taken} ${!hex.taken && $selectedLetter === hex.letter ? 'selected' : ''}`}
			style="grid-column-start: {hex.col * 3 - 2}; grid-row-start: {hex.row + 1};"
			>{hex.letter}</button
		>
	{/each}
</div>

<style>
	@import url('https://fonts.cdnfonts.com/css/ds-digital');
	.grid {
		--size: 50px;
		--hex-height: calc(sqrt(3) * var(--size));
		font-size: var(--hex-height);
		margin: auto;
		display: grid;
		grid-template-columns: repeat(22, calc(var(--size) / 2));
		grid-template-rows: repeat(13, calc(var(--hex-height) / 2));
		grid-gap: 1px;
	}
	.hex {
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
	.hex.ready:hover {
		opacity: 0.5;
	}
	.hex.selected {
		animation-name: fadeInOut;
		animation-duration: 1s;
		animation-iteration-count: infinite;
		animation-direction: reverse;
	}
	.hex.white {
		background-color: white;
	}
	.hex.blue {
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
