<!--

| . _.| _ |_  _
|(|_)||(_||_)_)

-->
<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import BackdropBlur from '$lib/components/BackdropBlur.svelte';

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
			Hey there! I'm Bagas Dwi Anggoro, but you can call me KiSI. I'm a computer science student and
			a creative explorer constantly driven to experiment. I love blending the logic of code
			with visual beauty, believing there are no limits between art and technology.
			<br /><br />
			Here, you'll find the results of my experiments with dynamic motion graphics, captivating visual
			effects, and vibrant illustrations, all brought to life through visual design and development.
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
		overflow: hidden;
		z-index: 0;
	}

	.container {
		width: 100%;
		max-width: 600px;
		height: max-content;
		padding: 180px 24px 80px 24px;
		overflow-x: scroll;
		display: flex;
		flex-direction: column;
		text-align: start;
		justify-content: start;
		gap: 24px;
		box-sizing: border-box;
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

	.experience,
	.affiliation {
		box-sizing: border-box;
		width: 99%;
		max-width: 600px;
		height: fit-content;
		border-radius: 12px;
		border: 0.5px solid #dddddd;
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
