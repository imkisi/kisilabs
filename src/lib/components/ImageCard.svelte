<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { zIndexCounter } from '$lib/stores/zIndexStore';

    onMount(() => {
        const preventDefault = (e: Event) => e.preventDefault();
        document.addEventListener('copy', preventDefault);
        document.addEventListener('selectstart', preventDefault);
        document.addEventListener('contextmenu', preventDefault);

        return () => {
            document.removeEventListener('copy', preventDefault);
            document.removeEventListener('selectstart', preventDefault);
            document.removeEventListener('contextmenu', preventDefault);
        };
    });

    type Project = {
        name: string;
        image: string;
        url: string;
    };

    export let project: Project;
    export let initialX: number;
    export let initialY: number;
    export let initialRotate: number;
    export let animated: boolean;

    let x: number = initialX;
    let y: number = initialY;
    let rotate: number = initialRotate;
    let dragging = false;
    let offsetX: number = 0;
    let offsetY: number = 0;
    let zIndex: number = 1;
    let scale: number = 1;
    
    function getEventCoords(e: MouseEvent | TouchEvent) {
        if (e instanceof MouseEvent) {
            return { clientX: e.clientX, clientY: e.clientY };
        }
        // For TouchEvent, use the first touch point
        return { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY };
    }
    
    function handleDragStart(e: MouseEvent | TouchEvent) {
        const { clientX, clientY } = getEventCoords(e);
        dragging = true;
        zIndexCounter.update((n) => n + 1);
        zIndex = $zIndexCounter;
        offsetX = clientX - x;
        offsetY = clientY - y;
        rotate = 0;
        scale = 1.05;
    }

    function handleDragMove(e: MouseEvent | TouchEvent) {
        if (dragging) {
            const { clientX, clientY } = getEventCoords(e);
            x = clientX - offsetX;
            y = clientY - offsetY;
            rotate = 0;
            scale = 1.05;
        }
    }

    function handleDragEnd() {
        dragging = false;
        rotate = initialRotate;
        scale = 1;
    }

    function handleMouseEnter() {
        if (dragging) return;
        rotate = 0;
        scale = 1.05;
    }

    function handleMouseLeave() {
        if (dragging) return;
        rotate = initialRotate;
        scale = 1;
    }

    function handleProjectClick(event: MouseEvent) {
        event.stopPropagation(); // Prevents the card from starting to drag
        window.open(project.url, '_blank');
    }

    function handleProjectKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            event.stopPropagation();
            window.open(project.url, '_blank');
        }
    }
</script>

<svelte:window
    on:mousemove={handleDragMove}
    on:mouseup={handleDragEnd}
    on:touchmove={handleDragMove}
    on:touchend={handleDragEnd}
/>

<div
    class="image-card"
    class:animated
    role="button"
    tabindex="0"
    style="
        --x: {x}px;
        --y: {y}px;
        --rotate: {rotate}deg;
        --scale: {scale};
        z-index: {zIndex};
    "
    on:mousedown={handleDragStart}
    on:touchstart={handleDragStart}
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    >
    <div 
        class="project-name" 
        on:click={handleProjectClick}
        on:keydown={handleProjectKeydown}
        role="link"
        tabindex="0">
        {project.name} 🡥
    </div>
    <div class="block"></div>
    <img src={project.image} alt={project.name} loading="lazy" />
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');

    :global(body) {
        font-family: 'Fira Code', monospace;
        color: #4628CC;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    .image-card {
        position: absolute;
        cursor: grab;
        width: 300px;
        height: auto;
        padding: 2px;
        background: none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        background-blend-mode: normal;
        backdrop-filter: blur(15px);
        border-radius: 8px;
        overflow: hidden;

        /* Start state for the animation (stacked in center, faded out) */
        left: 50%;
        top: 50%;
        transform: 0.2s translate(-50%, -50%) scale(0.8) rotate(0deg);
        opacity: 0;

        /* Add a transition for a smooth animation */
        transition:
        transform 1s cubic-bezier(0.2, 0.8, 0.2, 1),
        opacity 0.5s ease-in-out;
    }

    /* End state for the animation (spread out) */
    .image-card.animated {
        left: var(--x);
        top: var(--y);
        transform:
        translate(-50%, -50%)
        scale(var(--scale, 1))
        rotate(var(--rotate));
        opacity: 1;
    }

    .image-card:active {
        cursor: grabbing;
        box-shadow: 0 4px 8px rgba(49, 12, 234, 0.3);
    }

    .project-name {
        position: relative;
        top: 0;
        left: 0;
        padding: 0 0 4px 6px ;
        width: 100%;
        background: none;
        font-size: 14px;
        color: #591EF3;
        z-index: 10;
    }

    .project-name:hover {
        text-decoration: underline;
        word-spacing: 2px;
        color: #7356f2;
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }


    .block {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: none;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
        border-radius: 8px;
    }

    @media screen and (max-width: 800px) {
        .project-name {
            width: 90%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .image-card {
            width: 250px;
        }
    }

    @media screen and (max-width: 400px) {
        .image-card {
            width: 200px;
        }
    }
</style>