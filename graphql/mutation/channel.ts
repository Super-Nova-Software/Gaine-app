import { gql } from "@apollo/client";

export const CREATE_CHANNEL_CATEGORY = gql`
  mutation CreateChannelCategory($serverId: UUID!, $name: String!, $position: Int) {
    createChannelCategory(serverId: $serverId, name: $name, position: $position) {
      category {
        id
        server {
          id
          name
        }
        name
        position
      }
    }
  }
`;

export const UPDATE_CHANNEL_CATEGORY = gql`
  mutation UpdateChannelCategory($categoryId: Int!, $name: String!, $position: Int) {
    updateChannelCategory(categoryId: $categoryId, name: $name, position: $position) {
      category {
        id
        server {
          id
          name
        }
        name
        position
      }
    }
  }
`;

export const DELETE_CHANNEL_CATEGORY = gql`
  mutation DeleteChannelCategory($categoryId: Int!) {
    deleteChannelCategory(categoryId: $categoryId) {
      categoryId
    }
  }
`;

export const CREATE_CHANNEL = gql`
  mutation CreateChannel(
    $serverId: UUID!
    $name: String!
    $emoji: String
    $channelType: String
    $categoryId: Int
    $isPrivate: Boolean
    $topic: String
  ) {
    createChannel(
      serverId: $serverId
      name: $name
      emoji: $emoji
      channelType: $channelType
      categoryId: $categoryId
      isPrivate: $isPrivate
      topic: $topic
    ) {
      channel {
        id
        name
        server {
          id
          name
        }
        emoji
        channelType
        category {
          id
          name
        }
        isPrivate
        topic
      }
    }
  }
`;

export const UPDATE_CHANNEL = gql`
  mutation UpdateChannel(
    $id: UUID!
    $name: String
    $emoji: String
    $channelType: String
    $categoryId: Int
    $isPrivate: Boolean
    $topic: String
  ) {
    updateChannel(
      id: $id
      name: $name
      emoji: $emoji
      channelType: $channelType
      categoryId: $categoryId
      isPrivate: $isPrivate
      topic: $topic
    ) {
      channel {
        id
        name
        server {
          id
          name
        }
        emoji
        channelType
        category {
          id
          name
        }
        isPrivate
        topic
      }
    }
  }
`;

export const DELETE_CHANNEL = gql`
  mutation DeleteChannel($id: UUID!) {
    deleteChannel(id: $id) {
      id
    }
  }
`;

export const CREATE_CHANNEL_PERMISSION = gql`
  mutation CreateChannelPermission($channelId: UUID!, $roleId: Int!, $allow: String!, $deny: String!) {
    createChannelPermission(channelId: $channelId, roleId: $roleId, allow: $allow, deny: $deny) {
      permission {
        id
        channel {
          id
          name
        }
        role {
          id
          name
        }
        allow
        deny
      }
    }
  }
`;

export const UPDATE_CHANNEL_PERMISSION = gql`
  mutation UpdateChannelPermission($id: Int!, $allow: String, $deny: String) {
    updateChannelPermission(id: $id, allow: $allow, deny: $deny) {
      permission {
        id
        channel {
          id
          name
        }
        role {
          id
          name
        }
        allow
        deny
      }
    }
  }
`;

export const DELETE_CHANNEL_PERMISSION = gql`
  mutation DeleteChannelPermission($id: Int!) {
    deleteChannelPermission(id: $id) {
      id
    }
  }
`;

export const CREATE_CHANNEL_CATEGORY_MEMBER = gql`
  mutation CreateChannelCategoryMember($categoryId: Int!, $channelId: UUID!, $position: Int) {
    createChannelCategoryMember(categoryId: $categoryId, channelId: $channelId, position: $position) {
      member {
        id
        category {
          id
          name
        }
        channel {
          id
          name
        }
        position
      }
    }
  }
`;

export const UPDATE_CHANNEL_CATEGORY_MEMBER = gql`
  mutation UpdateChannelCategoryMember($id: Int!, $position: Int) {
    updateChannelCategoryMember(id: $id, position: $position) {
      member {
        id
        category {
          id
          name
        }
        channel {
          id
          name
        }
        position
      }
    }
  }
`;

export const DELETE_CHANNEL_CATEGORY_MEMBER = gql`
  mutation DeleteChannelCategoryMember($id: Int!) {
    deleteChannelCategoryMember(id: $id) {
      id
    }
  }
`;