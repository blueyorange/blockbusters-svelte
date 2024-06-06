<script lang="ts">
	import Board from './Board.svelte';
	import createGameBoardModel from './createGameBoardModel';
	import type Question from './Question';
	export let data;
	let questions: Question[] = data.body.questions;
	const letters: string[] = questions.map((q: Question) => q.letter);
	let hexes = createGameBoardModel(letters);
</script>

<svelte:head>
	<link rel="stylesheet" href="style.css" />
	<title>Blockbusters</title>
</svelte:head>

<main class="container">
	<Board {hexes}></Board>
</main>

<style>
	.container {
		display: flex;
		flex-flow: row;
	}
</style>
