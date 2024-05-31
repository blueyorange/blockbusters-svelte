<script lang="ts">
	import Board from './Board.svelte';
	export let data;
	import type Question from './Question';
	let questions: Question[] = data.body.questions;
</script>

<svelte:head>
	<link rel="stylesheet" href="style.css" />
	<title>Blockbusters</title>
</svelte:head>

<main class="container">
	<Board {questions}></Board>
</main>

<style>
	.container {
		margin: auto;
		width: 50%;
	}
</style>
