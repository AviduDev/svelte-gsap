import { GraphQLClient } from 'graphql-request';
import { API_URL, API_TOKEN } from '$env/static/private';

export const load = async () => {
	const hygraph = new GraphQLClient(API_URL, {
		headers: {
			Authorization: `Bearer ${API_TOKEN}`
		}
	});

	const { products } = await hygraph.request(
		`query MyQuery {
			products {
			  title
			  slug
			  mainImage {
				url
			  }
			  otherImages {
				url
			  }
			}
		  }
		  
          `
	);

	return {
		products
	};
};
