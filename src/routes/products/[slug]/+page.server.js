import { GraphQLClient } from 'graphql-request';
import { API_URL, API_TOKEN } from '$env/static/private';

export const prerender = true;
/**
 * @param {any} params
 */

export const load = async ({ params }) => {
	const { slug } = params;
	const hygraph = new GraphQLClient(API_URL);

	const { product } = await hygraph.request(
		`query MyQuery($slug: String!) {
            product(where: {slug: $slug}) {
                title
                slug
				description
				mainImage {
					url
				}
				otherImages {
					url
				}
            }
        }`,
		{
			slug
		}
	);

	return {
		product
	};
};
