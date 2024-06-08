<script lang="ts">
	import type Question from './Question';
	export let selectedQuestion: Question;
</script>

<article class="card">
	<header class="header"><h2>Blockbusters</h2></header>
	<section class="body">
		{selectedQuestion.question}
	</section>
	<footer class="footer">
		<button class="winner-button blue"> Blue </button>
		<button class="winner-button"> White </button>
	</footer>
</article>

<style>
	.card {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		z-index: 2;
		left: 50%;
		width: min-content;
		height: 700px;
		background-color: cyan;
		height: min-content;
		margin: auto;
		border-radius: 1em;
	}
	.header {
		padding: 20px;
	}
	.header > h2 {
		margin: 0;
		font-size: 4em;
	}
	.body {
		padding: 20px;
		font-size: 2.5em;
		background-color: whitesmoke;
	}
	.footer {
		padding: 0.8em;
		background-color: lightgrey;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.winner-button {
		color: black;
		background-color: white;
		font-size: 1.5em;
		border-radius: 3px;
		padding: 1em;
	}
	.winner-button:hover {
		opacity: 0.8;
	}
	.winner-button.blue {
		background-color: cyan;
	}
</style>
