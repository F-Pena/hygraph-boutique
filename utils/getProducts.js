import hygraphClient, { gql } from "./hygraph-client.js";

// TODO: get this from hygraph instead
// Average review.rating for a product
function averageRating({ data: reviews }) {
  const total = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.floor(total / reviews.length);
}

export async function getSomeProducts(count = 4) {
  const query = gql`
    query GetSomeProducts($count: Int!) {
      products(first: $count) {
        productName
        productSlug
        productImage {
          url
          height
          width
          altText
        }
      }
    }
  `;

  try {
    const { products } = await hygraphClient.request(query, { count });

    return products;
  } catch (error) {
    console.log({ error });
  }
}

export async function allProducts() {
  const query = gql`
    query GetAllSlugs {
      products {
        productName
        id
        productSlug
      }
    }
  `;

  try {
    const { bikes } = await hygraphClient.request(query);

    return bikes;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductBySlug(slug, preview = false) {
  const query = gql`
    query GetSingleProduct($slug: String!, $stage: Stage!) {
      product(where: { productSlug: $slug }, stage: $stage) {
        productName
        productSlug
        productPrice
        productDescription {
          html
        }
        productCategory {
          id
          slug
          categoryName
        }
        productImage {
          altText
          url
        }
      }
    }
  `;
  try {
    if (preview)
      hygraphClient.setHeader(
        "Authorization",
        `Bearer ${process.env.HYGRAPH_DEV_AUTH_TOKEN}`
      );

    let { product } = await hygraphClient.request(query, {
      slug,
      stage: preview ? "DRAFT" : "PUBLISHED",
    });

    return product;
  } catch (error) {
    console.log(error);
  }
}
