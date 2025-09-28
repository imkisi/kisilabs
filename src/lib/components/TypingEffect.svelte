<script>
	import { onMount, createEventDispatcher } from 'svelte';

	const fullText = '>_kisilabs/workspace';
	let displayedText = '';
	let isVisible = true;
	const dispatch = createEventDispatcher();

	onMount(() => {
		let i = 0;
		const typingInterval = setInterval(() => {
			if (i < fullText.length) {
				displayedText += fullText.charAt(i);
				i++;
			} else {
				clearInterval(typingInterval);
				setTimeout(() => {
					isVisible = false;
					dispatch('effectEnd');
				}, 1000);
			}
		}, 150);

		return () => {
			clearInterval(typingInterval);
		};
	});
</script>

<div class="overlay" class:hidden={!isVisible}>
	<p>{displayedText}<span class="cursor">|</span></p>
</div>

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: flex-start;
		align-items: start;
		background-color: #591ef3;
		z-index: 100;
		transition: visibility 0s 1s, opacity 0.5s ease-out;
		opacity: 1;
		visibility: visible;
	}

	.overlay.hidden {
		opacity: 0;
		visibility: hidden;
	}

	p {
		font: 600 15px 'Fira Code', monospace;
		color: white;
        padding: 16px 46px;
	}

	.cursor {
		animation: blink .5s step-end infinite;
	}

	@keyframes blink {
		from, to { opacity: 1; }
		50% { opacity: 0; }
	}

    @media screen and (max-width: 600px) {
        p {
            padding: 22px 24px;
        }
    }

</style>