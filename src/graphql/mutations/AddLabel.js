import { gql } from '@apollo/client';

const ADD_LABEL = gql`
  mutation($name: String!) {
    createLabel(input: { name: $name }) {
      label {
        id
        name
      }
    }
  }
`;

export default ADD_LABEL;
