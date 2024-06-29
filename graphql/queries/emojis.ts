import { gql } from "@apollo/client";

export const SERVER_EMOJI_FIELDS = gql`
  fragment ServerEmojiFields on ServerEmojiType {
    id
    name
    isAnimated
    image
  }
`;

export const CHANNEL_EMOJI_FIELDS = gql`
  fragment ChannelEmojiFields on ChannelEmojiType {
    id
    emoji {
     name
    }
    channel {
      id
      name
    }
  }
`;

export const GET_ALL_SERVER_EMOJIS = gql`
 query {
    serverEmojis {
      id
      name
    }
  }
`;

// export const GET_SERVER_EMOJI_BY_ID = gql`
//   query GetServerEmoji($id: ID!) {
//     serverEmojiById(id: $id) {
//       ...ServerEmojiFields
//     }
//   }
// `;


export const GET_ALL_CHANNEL_EMOJIS = gql`
  query {
    channelEmojis {
      id
      emoji{
        id
        name
      }
    }
  }
`;

// export const GET_CHANNEL_EMOJI_BY_ID = gql`
//   query GetChannelEmoji($id: ID!) {
//     channelEmojiById(id: $id) {
//       ...ChannelEmojiFields
//     }
//   }
// `;