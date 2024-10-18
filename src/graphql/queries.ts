import { gql } from "@apollo/client";

export const GET_RESPONSIBILITIES = gql`
  query {
    getResponsibilities {
      data {
        name
      }
    }
  }
`;
export const GET_PRODUCT_TAG = gql`
  query {
    getProductTags {
      data {
        name
      }
    }
  }
`;
export const GET_PRODUCTS = gql`
  query {
    getProducts {
      data {
        name
      }
    }
  }
`;
