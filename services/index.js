
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
}