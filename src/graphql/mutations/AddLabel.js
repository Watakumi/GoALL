import { gql } from '@apollo/client';

const ADD_LABEL = gql`
  mutation($name: String!) {
    labelCreate(input: { name: $name }) {
      label {
        id
        name
      }
    }
  }
`;

export default ADD_LABEL;
