import { gql } from "@apollo/client";

export const CREATE_DRAW = gql`
  mutation CreateDraw($channelId: UUID!, $whiteboard: String!) {
    createDraw(input: $input) {
      draw {
        id
        whiteboard
        channel {
          id
          name
        }
      isPublished
      createdAt
      updatedAt
      }
    }
  }
`;

export const UPDATE_DRAW = gql`
  mutation UpdateDraw($id: ID!, $whiteboard: String!) {
    updateDraw(id: $id, input: $input) {
      draw {
        id
        whiteboard
        channel {
          id
          name
        }
      isPublished
      createdAt
      updatedAt
      }
    }
  }
`;

export const DELETE_DRAW = gql`
  mutation DeleteDraw($id: ID!) {
    deleteDraw(id: $id) {
      success
    }
  }
`;
