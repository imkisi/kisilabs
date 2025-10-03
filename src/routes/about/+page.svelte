<!--

| . _.| _ |_  _
|(|_)||(_||_)_)

-->
<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import BackdropBlur from '$lib/components/BackdropBlur.svelte';

	const bioContent = `Hey there! I'm Bagas Dwi Anggoro, but you can call me KiSI. I'm a computer science student and a creative explorer constantly driven to experiment. I love blending the logic of code with visual beauty, believing there are no limits between art and technology. <br /><br /> Here, you'll find the results of my experiments with dynamic motion graphics, captivating visual effects, and vibrant illustrations, all brought to life through visual design and development.`;

	let bioWords: string[] = [];

	onMount(() => {
		bioWords = bioContent.replace(/<br \/><br \/>/g, ' <br_br> ').split(' ');
	});

	let showBackdrop = true;

	function onVanish() {
		showBackdrop = false;
	}
</script>

<BackdropBlur show={showBackdrop} on:vanish={onVanish} />

<Navbar />
<div class="background">
	<div class="container">
		<h1 class="title">✽</h1>
		<p class="bio">
			{#each bioWords as word, i}
				{#if word === '<br_br>'}
					<br /><br />
				{:else if word}
					<span class="bio-word" style="--i: {i}">{@html word}</span>{' '}
				{/if}
			{/each}
		</p>
		<div class="experience">
			<pre>EXPERIENCE<br />│<br />├── Wiseline.id <span class="duration">2024 - Present</span><br
				/>│&nbsp;&nbsp;&nbsp;&nbsp;└── <span class="detail">Freelance creative designer</span><br
				/>│<br />└── Mahakarya Studio <span class="duration">July 2025</span><br
				/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <span class="detail">Illustrator</span></pre>
		</div>
		<div class="affiliation">
			<pre>AFFILIATION<br />│<br />├── NTC Dept.<br />│&nbsp;&nbsp;&nbsp;&nbsp;└── <span
					class="detail">Illustrator</span
				><br />│<br />└── Neoteric HQ <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <span class="detail"
					>Illustrator</span
				></pre>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=JetBrains+Mono:wght@200;400;700&display=swap');

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Fira Code', monospace;
		background-color: #fcfcfc;
		background-repeat: repeat;
		color: #202a40;
		min-height: 100vh;
	}

	.background {
		box-sizing: border-box;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: #efefef;
		background-image: radial-gradient(#d4d4d4 1px, transparent 1px);
		background-size: 20px 20px;
		display: flex;
		justify-content: center;
		align-items: start;
		overflow-x: hidden;
		overflow-y: scroll;
		z-index: 0;
	}

	.container {
		width: 100%;
		max-width: 600px;
		height: max-content;
		padding: 180px 24px 80px 24px;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		text-align: start;
		justify-content: start;
		gap: 24px;
		box-sizing: border-box;
		animation: fadeIn 0.5s ease-out;
	}

	@keyframes fadeIn {
		from {
			padding-top: 260px;
			opacity: 0;
		}
		to {
			padding-top: 180px;
			opacity: 1;
		}
	}

	h1,
	p {
		margin: 0;
		line-height: 1.5;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.title {
		width: fit-content;
		height: fit-content;
		font:
			700 48px 'Fira Code',
			monospace;
		line-height: 1;
		color: #3913e8;
		animation: rotate 2s linear infinite;
	}

	.bio {
		font:
			400 15px 'Fira Code',
			monospace;
		color: #202a40;
		text-align: justify;
	}

	.bio-word {
		display: inline-block;
		position: relative;
		color: transparent;
		animation: revealText 0.7s forwards;
		animation-delay: calc(var(--i) * 50ms);
	}

	.bio-word::before {
		content: '----';
		position: absolute;
		left: 0;
		color: #b0b0b0;
		animation: hidePlaceholder 0.7s forwards;
		animation-delay: calc(var(--i) * 50ms);
	}

	@keyframes revealText {
		to {
			color: #202a40;
		}
	}

	@keyframes hidePlaceholder {
		to {
			opacity: 0;
		}
	}
	.experience,
	.affiliation {
		box-sizing: border-box;
		width: 99%;
		max-width: 600px;
		height: fit-content;
		border-radius: 12px;
		border: 0.7px solid #dddddd;
		background: #efefef;
	}

	.experience pre,
	.affiliation pre {
		margin: 16px;
		font:
			600 16px 'Fira Code',
			monospace;
		color: #202a40;
	}

	.experience .duration {
		padding: 4px 8px;
		border-radius: 8px;
		font:
			400 10px 'Fira Code',
			monospace;
		color: #fafafa;
		background-color: #591ef3;
	}

	.experience .detail,
	.affiliation .detail {
		font:
			400 14px 'Fira Code',
			monospace;
	}
</style>
