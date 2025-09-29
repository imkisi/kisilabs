<script>
	import favicon from '$lib/assets/icon.png';

	let { children } = $props();

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>&gt;_kisilabs</title>
	<meta name="description" content="Bagas/Kisi is an artist who design and code" />
	<meta name="keywords" content="KiSI, kisi, kisilabs, Bagas Dwi, Personal Page, Portfolio, Resume, Projects, Workspace," />
	<meta name="author" content="Bagas Dwi Anggoro" />
	<meta name="robots" content="index,follow" />
	<meta name="copyright" content="kisi" />

	<meta property="og:title" content=">_kisilabs" />
	<meta property="og:description" content="Bagas/Kisi is an artist who design and code" />
	<meta property="og:url" content="https://kisilabs.space" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/cover.avif" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1920" />
	<meta property="og:image:height" content="1080" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@kisilabs" />
	<meta name="twitter:creator" content="@kisilabs" />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "WebSite",
					"name": ">_kisilabs",
					"url": "https://kisilabs.space",
					"potentialAction": {
						"@type": "SearchAction",
						"target": {
							"@type": "EntryPoint",
							"urlTemplate": "https://kisilabs.space/search?q={search_term_string}"
						},
						"query-input": "required name=search_term_string"
					}
				},
				{
					"@type": "SiteNavigationElement",
					"name": "About",
					"url": "https://kisilabs.space/about"
				},
				{
					"@type": "SiteNavigationElement",
					"name": "Contact",
					"url": "https://kisilabs.space/contact"
				}
			]
		}
	</script>
</svelte:head>

{@render children?.()}