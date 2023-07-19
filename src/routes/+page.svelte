<script>
	import { gsap, Flip } from '../lib/gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.from('.projectImage', {
			yPercent: 30,
			scale: 1.3,
			duration: 1.5,
			ease: 'power4',
		});
	});

	export let data;
</script>

<main>
	<ul class="productContainer">
		{#each data.projects as project}
			<li class="productItem">
				<a href={`/products/${project.slug}`}>
					<div class="imageContainer">
						<img class="projectImage" src={project.mainImage.url} alt="" />
					</div>
					<h1>{project.title}</h1>
				</a>
			</li>
		{/each}
	</ul>
</main>

<style>

	ul {
		padding: 0;
	}

	ul {
		list-style: none;
		padding: 0;
	}
	.productContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.productItem {
		margin-top: 20vh;
	}

	.imageContainer {
		overflow: hidden;
	}
</style>
