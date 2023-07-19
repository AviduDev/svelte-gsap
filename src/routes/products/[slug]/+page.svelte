<script>
	import { onMount } from 'svelte';
	import { gsap } from "../../../lib/gsap.js";

	onMount(() => {
		gsap.from('.projectImage', { xPercent: -50 });
	});
	export let data;
</script>

<main>
	<div class="header">
		<img class="projectImage" src={data.project.mainImage.url} alt={data.project.title} />
		<h1>{data.project.title}</h1>
	</div>
	<div class="productDetails">
		<p class="productDescription">
			{data.project.description}
		</p>
	</div>
	<ul class="imageGallery">
		{#each data.project.otherImages as images}
			<li class="galleryImage">
				<img class="productImage" src={images.url} alt={data.project.title} />
			</li>
		{/each}
	</ul>
</main>

<style>
	.header {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.imageGallery {
		margin-top: 50vh;
	}

	* {
		font-family: Arial;
		text-transform: uppercase;
	}
	img {
		max-width: 100%;
	}

	ul {
		padding: 0;
		list-style: none;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	.productDescription {
		max-width: 40vw;
	}

	.imageGallery {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.galleryImage {
		margin-top: 30vh;
	}
</style>
