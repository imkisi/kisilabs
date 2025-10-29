<!--
                
| . _.| _ |_  _ 
|(|_)||(_||_)_) 
                
-->
<script>
    import { onMount } from 'svelte';
    import Navbar from '../lib/components/Navbar.svelte';
    import ImageCard from '../lib/components/ImageCard.svelte';
    import TypingEffect from '../lib/components/TypingEffect.svelte';

    const projects = [
        { id: 1, name: 'Artbook_Kitasan', image: 'https://ik.imagekit.io/5s96ib16h/Artbook_Kitasan_1.avif?updatedAt=1761659804506', url: '#' },
        { id: 2, name: 'Original Character', image: 'https://ik.imagekit.io/5s96ib16h/OC_main-1.avif?updatedAt=1761659804725', url: '#' },
        { id: 3, name: 'Comms_Ravel', image: 'https://ik.imagekit.io/5s96ib16h/Comms-Ravel_clear.avif?updatedAt=1761659805265', url: '#' },
        { id: 4, name: 'Comms_Nero', image: 'https://ik.imagekit.io/5s96ib16h/Comms-NERO_clear.avif?updatedAt=1761659805462', url: '#' },
        { id: 4, name: 'test video', image: 'https://ik.imagekit.io/5s96ib16h/sample-video.mp4?updatedAt=1758077396397', url: '#' },
        { id: 4, name: 'test gif', image: 'https://media.tenor.com/DJJogP4rg6wAAAAM/madagascar-private.gif', url: '#' },
    ];

    /** @type {{x: number, y: number, rotate: number}[]} */
    let imagePositions = [];
    let animated = false;
    let showMainContent = false;
    let currentTime = '';

    function handleTypingEnd() {
        showMainContent = true;
        animated = true;
    }

    function calculatePositions() {
        const cardWidth = window.innerWidth < 800 ? 200 : 280; // Match card width from CSS
        const topOffset = 100;
        const bottomOffset = 50;
        const sideOffset = 50;

        imagePositions = projects.map(() => ({
            x: Math.random() * (window.innerWidth - cardWidth - sideOffset * 2) + sideOffset,
            y: Math.random() * (window.innerHeight - 400 - topOffset - bottomOffset) + topOffset,
            rotate: Math.random() * 14 - 7 // Random value between -7 and 7
        }));
    }

    onMount(() => {
        // Initial random positions
        calculatePositions();

        const updateClock = () => {
            currentTime = new Date().toLocaleTimeString('en-US', {
                timeZone: 'Asia/Jakarta', // GMT+7
                hour12: true
            });
        };

        updateClock();
        const timer = setInterval(updateClock, 1000);
    });
</script>

<TypingEffect on:effectEnd={handleTypingEnd} />

<svelte:window on:resize={calculatePositions} />

{#if showMainContent}<Navbar />{/if}

<div class="background">
    <div class="project-container">
        {#each projects as project, index}
            {#if imagePositions[index]}
                <ImageCard
                    project={project}
                    initialX={imagePositions[index].x}
                    initialY={imagePositions[index].y}
                    initialRotate={imagePositions[index].rotate}
                    {animated}
                />
            {/if}
        {/each}
    </div>
    <div class="bottom-nav">
        <div>
            <span>Mail</span>
            <p><a href="mailto:hello@kisilabs.space">hello@kisilabs.space</a></p>
        </div>
        <div class="time">
            <span>Local time</span>
            <p>Indonesia {currentTime}</p>
        </div>
    </div>
</div>

<style>
    :global(html, body) {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100svh;
        background-color: #EFEFEF;
        background-image: radial-gradient(#D4D4D4 1px, transparent 1px);
        background-size: 20px 20px;
        overflow: hidden;
        z-index: 0;
    }

    .project-container {
        position: relative;
        top: 240px;
        left: 100px;
        height: 100svh;
        width: 100vw;
        z-index: 1;
    }

    .bottom-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        background: none;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 15vw;
        padding: 16px 46px;
        box-sizing: border-box;
        font-family: 'Fira Code', monospace;
        z-index: 2;
    }

    .bottom-nav div span {
        font: 400 10px 'Fira Code', monospace;
        color: #591EF3;
    }
    .bottom-nav div p {
        font: 600 15px 'Fira Code', monospace;
        margin: 4px 0 0 0;
        color: #591EF3;
    }
    .bottom-nav div a {
        text-decoration: none;
    }
    .bottom-nav div a:hover {
        text-decoration: underline;
        color: #7356f2;
    }

    @media screen and (max-width: 700px) {
        .project-container {
            left: 100px;
            top: 180px;
        }

        .bottom-nav {
            padding: 16px 24px;
            justify-content: flex-start;
        }
        
        .time {
            display: none;
        }
    }
</style>