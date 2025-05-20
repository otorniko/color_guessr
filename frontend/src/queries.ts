import { gql } from "@apollo/client";

export const GET_RANDOM_COLOR = gql`
  query GetRandomColor {
    random_color {
      name
      hex
      decimal {
        Red
        Green
        Blue
      }
    }
  }
`;
