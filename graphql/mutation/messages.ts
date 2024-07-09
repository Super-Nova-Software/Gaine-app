import { gql } from '@apollo/client';

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($channelId: UUID!, $senderId: UUID!, $content: String!) {
    createMessage(channelId: $channelId, senderId: $senderId, content: $content) {
      message {
        id
        channel{
          id
          name
        }
        sender {
          id
          username
        }
        content
        timestamp
      }
    }
  }
`;

export const UPDATE_MESSAGE = gql`
  mutation UpdateMessage($messageId: Int!, $content: String!) {
    updateMessage(messageId: $messageId, content: $content) {
      message {
        id
        channel{
          id
          name
        }
        sender {
          id
          username
        }
        content
        editedTimestamp
      }
    }
  }
`;

export const DELETE_MESSAGE = gql`
  mutation DeleteMessage($messageId: Int!) {
    deleteMessage(messageId: $messageId) {
      messageId
    }
  }
`;

export const CREATE_ATTACHMENT = gql`
  mutation CreateAttachment($messageId: Int!, $file: String!, $name: String!, $type: String!, $size: Int!) {
    createAttachment(messageId: $messageId, file: $file, name: $name, type: $type, size: $size) {
      attachment {
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
  }
`;

export const UPDATE_ATTACHMENT = gql`
  mutation UpdateAttachment($attachmentId: Int!, $file: String, $name: String, $type: String, $size: Int) {
    updateAttachment(attachmentId: $attachmentId, file: $file, name: $name, type: $type, size: $size) {
      attachment {
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
  }
`;

export const DELETE_ATTACHMENT = gql`
  mutation DeleteAttachment($attachmentId: Int!) {
    deleteAttachment(attachmentId: $attachmentId) {
      attachmentId
    }
  }
`;

export const CREATE_DIRECT_MESSAGE = gql`
  mutation CreateDirectMessage($senderId: UUID!, $recipientId: UUID!, $content: String!) {
    createDirectMessage(senderId: $senderId, recipientId: $recipientId, content: $content) {
      directMessage {
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
  }
`;

export const UPDATE_DIRECT_MESSAGE = gql`
  mutation UpdateDirectMessage($directMessageId: Int!, $content: String!) {
    updateDirectMessage(directMessageId: $directMessageId, content: $content) {
      directMessage {
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
        editedTimestamp
      }
    }
  }
`;

export const DELETE_DIRECT_MESSAGE = gql`
  mutation DeleteDirectMessage($directMessageId: Int!) {
    deleteDirectMessage(directMessageId: $directMessageId) {
      directMessageId
    }
  }
`;

export const CREATE_REACTION = gql`
  mutation CreateReaction($messageId: Int!, $userId: UUID!, $emoji: String!) {
    createReaction(messageId: $messageId, userId: $userId, emoji: $emoji) {
      reaction {
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
  }
`;

export const DELETE_REACTION = gql`
  mutation DeleteReaction($reactionId: Int!) {
    deleteReaction(reactionId: $reactionId) {
      reactionId
    }
  }
`;
