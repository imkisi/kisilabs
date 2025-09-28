<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();

	/**
	 * Controls the visibility of the backdrop.
	 * @type {boolean}
	 */
	export let show = false;

	let backdropElement: HTMLDivElement;
	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	function handleAnimationEnd() {
		dispatch('vanish');
	}
</script>

{#if mounted && show}
	<div class="backdrop" aria-hidden="true" on:animationend={handleAnimationEnd} bind:this={backdropElement}></div>
{/if}

<style>
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(255, 255, 255, 0.2);
		z-index: 1000; /* Ensure it's on top of other content */
		animation: blur-out 0.5s ease-in-out;
	}

	@keyframes blur-out {
		from {
			backdrop-filter: blur(10px);
		}
		to {
			backdrop-filter: blur(0px);
		}
	}
</style>