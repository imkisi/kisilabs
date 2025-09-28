<nav>
	<p>
		<a href="/">&gt;_kisilabs&#47;workspace</a>
	</p>

	<ul>
		<li><a href="/about" class="nav-link">About</a></li>
		<li><a href="/" class="nav-link"><sup>[soon]</sup>Services</a></li>
		<li><a href="/contact" class="nav-link">Contact</a></li>
	</ul>
</nav>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');

	:global(body) {
		display: inline-block;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: auto;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 16px 46px;
		background: none;
		z-index: 999;
	}

	p {
		font:
			600 15px 'Fira Code',
			monospace;
		color: #591ef3;
	}

	sup {
		font:
			400 10px 'Fira Code',
			monospace;
		color: #591ef3;
		vertical-align: super;
		top: 8px;
	}

	.nav-link:hover {
		text-decoration: underline;
		color: #7356f2;
	}

	ul {
		list-style: none;
		margin: 0;
		display: flex;
		justify-content: center;
		gap: 16px;
	}

	a {
		text-decoration: none;
		font:
			600 15px 'Fira Code',
			monospace;
		color: #591ef3;
	}

	@media screen and (max-width: 600px) {
		nav {
			padding: 16px 24px;
			background: rgba(239, 239, 239, 0.44);
			backdrop-filter: blur(10px);
		}

		ul {
			gap: 6px;
			padding: 0;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
		}

		li a {
			display: inline-block;
			width: auto;
			font-size: 14px;
			word-wrap: break-word;
			overflow-wrap: break-word;
		}
	}
</style>
