import { gql } from '@apollo/client';

const ADD_GOAL = gql`
  mutation($title: String!, $description: String, $labelId: ID) {
    goalCreate(input: { title: $title, description: $description, labelId: $labelId }) {
      goal {
        id
        title
        description
      }
    }
  }
`;

export default ADD_GOAL;
