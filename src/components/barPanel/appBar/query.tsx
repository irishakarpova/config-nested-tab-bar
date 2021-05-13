import { gql } from "@apollo/client";

export const GET_MENU = gql`
  query GetMenu {
    getMenu {
      id
      label
      parentId
    }
  }
`;
