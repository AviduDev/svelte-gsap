import { GraphQLClient } from 'graphql-request';
import { API_URL, API_TOKEN } from '$env/static/private';

export const prerender = true;

export const load = async () => {
	const hygraph = new GraphQLClient(API_URL);

	const { products } = await hygraph.request(
		`query MyQuery {
			products {
				title
				slug
				mainImage {
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

// -------------------------------------
