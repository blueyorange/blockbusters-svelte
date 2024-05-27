<script lang="ts">
	import Board from './Board.svelte';
	export let data;
	import type Question from './Question';
	let questions = data.body.questions;
	const letters = data.body.questions.map((question) => question.letter);
	function handleSelectLetter(event: CustomEvent<{ letter: string }>) {
		const letter = event.detail.letter;
		selectedQuestion = questions.filter((q) => q.letter === letter)[0];
	}
	let selectedQuestion = questions[0];
</script>

<svelte:head>
	<link rel="stylesheet" href="style.css" />
	<title>Blockbusters</title>
</svelte:head>

<main class="container">
	<Board {letters} on:selectLetter={handleSelectLetter}></Board>
	<div class="question-modal">
		{selectedQuestion.question}
	</div>
</main>

<style>
	.container {
		display: flex;
	}
	.question-modal {
		background-color: white;
	}
</style>
