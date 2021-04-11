import { gql } from '@apollo/client';

const GET_LABEL = gql`
  query($id: Int!) {
    label(id: $id) {
      id
      name
      goals {
        title
        description
      }
    }
  }
`;

export default GET_LABEL;
