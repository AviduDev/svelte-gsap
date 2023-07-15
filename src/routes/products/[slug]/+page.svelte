<script>
	export let data;
</script>

<main>
	<div class="header">
		<img src={data.product.mainImage.url} alt={data.product.title} />
		<h1>{data.product.title}</h1>
	</div>
	<div class="productDetails">
		<p class="productDescription">
			{data.product.description}
		</p>
	</div>
	<ul class="imageGallery">
		{#each data.product.otherImages as images}
			<li>
				<img src={images.url} alt={data.product.title} />
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
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
