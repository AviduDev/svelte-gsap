import { GraphQLClient } from 'graphql-request';


export const load = async () => {
	const hygraph = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clk3pjccw0ng601ur9b1x1xzr/master");

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
