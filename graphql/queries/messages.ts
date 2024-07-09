import { gql } from "@apollo/client";

export const GET_MESSAGES_BY_CHANNEL = gql`
  query GetMessagesByChannel($channelId: UUID!) {
    messagesByChannel(channelId: $channelId) {
      id
      content
      deleted
      timestamp
      editedTimestamp
      attachments {
        id
        name
        message {
          id
          content
        }
      }
      channel {
        id
        name
      }
      sender {
        members{
          id
          roles{
            id
            name
            permissions{
              id
              name
              codename
            }
          }
        }
        username
        avatar
      }
    }
  }
`;


export const GET_ATTACHMENTS = gql`
  query GetAttachments {
    attachments {
      id
      message {
        id
      }
      file
      name
      type
      size
    }
  }
`;

export const GET_DIRECT_MESSAGES = gql`
  query GetDirectMessages {
    directMessages {
      id
      sender {
        id
        username
      }
      recipient {
        id
        username
      }
      content
      timestamp
    }
  }
`;

export const GET_REACTIONS = gql`
  query GetReactions {
    reactions {
      id
      message {
        id
      }
      user {
        id
        username
      }
      emoji
    }
  }
`;



