import { GraphQLClient } from 'graphql-request';
import { API_URL } from '$env/static/private';

export const prerender = true;
/**
 * @param {any} params
 */

export const load = async ({ params }) => {
	const { slug } = params;
	const hygraph = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clk3pjccw0ng601ur9b1x1xzr/master");

	const { project } = await hygraph.request(
		`query MyQuery($slug: String!) {
            project(where: {slug: $slug}) {
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
		project
	};
};
