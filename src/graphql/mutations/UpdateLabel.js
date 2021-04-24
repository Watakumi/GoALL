import { gql } from '@apollo/client';

const UPDATE_LABEL = gql`
  mutation($id: ID!, $name: String!) {
    updateLabel(input: { id: $id, name: $name }) {
      label {
        id
        name
      }
    }
  }
`;

export default UPDATE_LABEL;
