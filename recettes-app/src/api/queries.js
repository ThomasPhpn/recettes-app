import { gql } from "@apollo/client";

export const GET_RECIPES = gql`
  {
    posts {
      nodes {
        slug
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
        customFields {
          note
        }
      }
    }
  }
`;
