<script>
	export let data;
</script>

<main>
	<ul class="productContainer">
		{#each data.products as product}
			<li class="productItem">
				<a href={`/products/${product.slug}`}>
					<img src={product.mainImage.url} alt="" />
					<h1>{product.title}</h1>
				</a>
			</li>
		{/each}
	</ul>
</main>

<style>
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
