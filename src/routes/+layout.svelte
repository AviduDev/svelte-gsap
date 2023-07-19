<script>
	import '../styles/global.css';
	import Lenis from '@studio-freight/lenis';

	// -----------------------
	if (typeof window !== 'undefined') {
		const lenis = new Lenis();

		lenis.on('scroll', (e) => {
			console.log(e);
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}
</script>

<main>
	<a id="header" href="#footer">footer</a>
	<slot />
	<a href="#header" id="footer">header</a>
</main>
