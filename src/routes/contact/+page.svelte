<!--
                
| . _.| _ |_  _ 
|(|_)||(_||_)_) 
                
-->
<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import BackdropBlur from "$lib/components/BackdropBlur.svelte";

    let showBackdrop = true;

    function onVanish() {
        showBackdrop = false;
    }
</script>

<BackdropBlur show={showBackdrop} on:vanish={onVanish} />

<Navbar />

<div class="background">
    <div class="container">
        <h1 class="title">Contact</h1>
        <p class="bio">
            Comming soon
        </p>
        <a href="mailto:hello@kisilabs.space" class="email">hello@kisilabs.space</a>
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
        color: #202A40;
        min-height: 100vh;
    }

    .background {
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #EFEFEF;
        background-image: radial-gradient(#D4D4D4 1px, transparent 1px);
        background-size: 20px 20px;
        display: flex;
        justify-content: center;
        align-items: start;
        overflow-y: scroll;
        overflow-x: hidden;
        z-index: 0;
    }

    .container {
        width: 100%;
        max-width: 600px;
        height: max-content;
        padding: 120px 24px 80px 24px;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        text-align: start;
        justify-content: start;
        gap: 32px;
        box-sizing: border-box;
    }

    h1, p {
        margin: 0;
        line-height: 1.5;
    }

    .title {
        font-size: 18px;
        color: #3913e8;
    }

    .bio {
        font-size: 15px;
        color: #636363;
        margin-top: -12px;
    }

    .email {
        font-size: 18px;
        color: #3913e8;
        text-decoration: none;
    }

    .email:hover {
        text-decoration: underline;
    }
</style>