import { gql } from '@apollo/client';

const GET_GOALS = gql`
  query {
    goals {
      id
      title
      description
    }
  }
`;

export default GET_GOALS;
