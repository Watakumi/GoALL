import { gql } from '@apollo/client';

const GET_LABELS = gql`
  query {
    labels {
      id
      name
    }
  }
`;

export default GET_LABELS;
