import { gql } from "@apollo/client";

export const GET_DRAW = gql`
  query GetDraw($channelId: UUID!) {
    drawsByChannel(channelId: $channelId) {
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
`;