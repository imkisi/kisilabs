<script>
	import favicon from '$lib/assets/icon.png';

	let { children } = $props();

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>&gt;_kisilabs</title>
	<meta name="description" content="kisilabs workspace" />
	<meta name="keywords" content="KiSI, kisi, kisilabs, Bagas Dwi, Personal Page, Portfolio, Resume, Projects, Workspace," />
	<meta name="author" content="Bagas Dwi Anggoro" />
	<meta name="robots" content="index,follow" />
	<meta name="copyright" content="kisi" />

	<meta property="og:title" content=">_kisilabs" />
	<meta property="og:description" content="kisilabs workspace" />
	<meta property="og:url" content="https://kisilabs.space" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/cover.avif" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1920" />
	<meta property="og:image:height" content="1080" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@kisilabs" />
	<meta name="twitter:creator" content="@kisilabs" />
</svelte:head>

{@render children?.()}