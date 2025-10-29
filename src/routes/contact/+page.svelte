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
        <div class="item">
            <p class="link">
            <span class="blink">:</span> Index Social Link<br>
            &emsp;<a style="cursor: pointer;" on:click={() => window.open('https://web.facebook.com/bagas.anggoro.942/', '_blank')}>[Facebook]</a><br>
            &emsp;<a style="cursor: pointer;" on:click={() => window.open('https://www.instagram.com/@gasswi_/', '_blank')}>[Instagram]</a><br>
            &emsp;<a style="cursor: pointer;" on:click={() => window.open('https://x.com/@kisilabs/', '_blank')}>[Twitter/x]</a><br>
            &emsp;&emsp;<a style="cursor: pointer;" on:click={() => window.open('https://vgen.co/kisilabs/', '_blank')}>VGen _ Illustration & Commission</a><br>
            &emsp;&emsp;<a style="cursor: pointer;" on:click={() => window.open('https://github.com/imkisi/', '_blank')}>GitHub _ Code</a><br>
            &emsp;&emsp;<a style="cursor: pointer;" on:click={() => window.open('https://www.behance.net/bagasanggoro1/', '_blank')}>Behance _ UI & Design</a><br>
            &emsp;&emsp;&emsp;&emsp;<a href="mailto:hello@kisilabs.space">hello@kisilabs.space</a>
            </p>
            <p class="title"><span class="blink">:</span> End</p>
        </div>
        <div class="footer">
            <p>© 2025 KiSI Labs. All rights reserved.</p>
            <p>Designed & Developed by Bagas Dwi Anggoro</p>
        </div>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=JetBrains+Mono:wght@200;400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap');

    :global(body) {
        margin: 0;
        padding: 0;
        font-family: "Crimson Pro", serif;
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
        height: 100svh;
        overflow-x: hidden;
        padding: 100px 46px 16px 46px;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        text-align: start;
        justify-content: start;
        gap: 32px;
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
    
    .item {
        width: fit-content;
        height: calc(100vh - 60px);
        display: flex;
        flex-direction: column;
        text-align: start;
        justify-content: space-between;
    }

    p {
        margin: 0;
        line-height: 1.2;
    }

    .title, a {
        font-size: 6vh;
        color: #202a40;
    }

    .link {
        font-size: 6vh;
        color: #202a40;
    }

    a {
        text-decoration: none;
        transition: all 0.2s ease-in-out;
    }

    a:hover {
        color: #3913e8;
        padding-left: 18px;
    }

    .blink {
        animation: blink .8s infinite;
    }

    @keyframes blink {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }

    .footer {
        padding-top: 16px;
        font-size: 14px;
        color: #202a40;
        display: flex;
        flex-direction: column;
        gap: 4px;
        border-top: 1px solid #202a40;
    }

    @media screen and (max-width: 600px) {
        .container {
            padding: 110px 24px 16px 24px;
        }

        .title, a, .link {
            font-size: 5.5vw;
        }
    }
</style>