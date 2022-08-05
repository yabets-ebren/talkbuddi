
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GCMS

export const getPosts =  async () => {
    const query = gql`
    query MyQuery {
        blogsConnection {
          edges {
            node {
              createdAt
              slug
              title
              snippet
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
            }
          }
        }
      }
      
    `

    const result = await request(graphqlAPI, query);

    return result.blogsConnection.edges
};

export const getRecentPosts = async () => {
  const query = gql`
  query GetPostDetails() {
    blogs(
      orderBy: createdAt_ASC
      last: 3
    ){
      title
      featuredImage {
        url
      }
      categories {
        name
      }
      slug
    }
  }`
  const result = await request(graphqlAPI, query);

  return result.blogs;
}

export const getSimilarPosts = async () => {
  const query = gql`
  query GetPostDetails($slug: String, $categories: [String]) {
    blogs(
  where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
      last: 3
    ){
      title
      featuredImage {
        url
      }
      categories {
        name
      }
      slug
    }
  }`
  const result = await request(graphqlAPI, query);

  return result.blogs;
}

export const getCategories =  async () => {
  const query = gql`
  query GetCategories {
    categories {
      name
      slug
    }
  }
   `
   const result = await request(graphqlAPI, query);

   return result.categories ;
}