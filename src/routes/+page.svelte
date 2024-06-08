<script lang="ts">
	import Board from './Board.svelte';
	import createGameBoardModel from './createGameBoardModel';
	import DisplayQuestion from './DisplayQuestion.svelte';
	import type Question from './Question';
	export let data;
	import { selectedLetter } from './stores';
	let questions: Question[] = data.body.questions;
	const letters: string[] = questions.map((q: Question) => q.letter);
	let hexes = createGameBoardModel(letters);
	// select random letter to begin
	const initialLetter = letters[Math.floor(Math.random() * letters.length)];
	selectedLetter.set(initialLetter);
	// set question based on letter
	let selectedQuestion = questions.find((q) => q.letter === $selectedLetter) as Question | null;
</script>

<svelte:head>
	<link rel="stylesheet" href="style.css" />
	<title>Blockbusters</title>
</svelte:head>

<main class="container">
	{#if selectedQuestion}
		<DisplayQuestion {selectedQuestion}></DisplayQuestion>
	{/if}
	<Board {hexes}></Board>
</main>

<style>
	.container {
		display: flex;
		flex-flow: row;
	}
</style>
