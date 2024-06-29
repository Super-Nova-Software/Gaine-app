import { gql } from "@apollo/client";

export const CREATE_SERVER_EMOJI = gql`
  mutation CreateServerEmoji($serverId: ID!, $name: String!) {
    createServerEmoji(serverId: $serverId, name: $name) {
      serverEmoji{
        id
        image
      }
    }
  }
`;

export const DELETE_SERVER_EMOJI = gql`
  mutation DeleteServerEmoji($emojiId: ID!) {
    deleteServerEmoji(emojiId: $emojiId) {
      ok
    }
  }
`;

export const CREATE_CHANNEL_EMOJI = gql`
  mutation CreateChannelEmoji($channelId: ID!, $emojiId: ID!) {
    createChannelEmoji(channelId: $channelId, emojiId: $emojiId) {
      channelEmoji{
        id
      }
    }
  }
`;

export const DELETE_CHANNEL_EMOJI = gql`
  mutation DeleteChannelEmoji($channelId: ID!, $emojiId: ID!) {
    deleteChannelEmoji(channelId: $channelId, emojiId: $emojiId) {
      ok
    }
  }
`;
