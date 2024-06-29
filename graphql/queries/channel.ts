import { gql } from "@apollo/client";

// Queries
export const GET_CHANNEL_CATEGORIES = gql`
  query GetChannelCategories {
    channelCategories {
      id
      server {
        id
        name
      }
      name
      position
    }
  }
`;

export const GET_CHANNELS = gql`
  query GetChannels {
    channels {
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
`;

export const GET_CHANNEL = gql`
  query GetChannel($id: UUID!) {
    channel(id: $id) {
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
`;

export const GET_CHANNEL_PERMISSIONS = gql`
  query GetChannelPermissions {
    channelPermissions {
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
`;

export const GET_CHANNEL_PERMISSION_BY_CHANNEL = gql`
  query GetChannelPermissionByChannel($channel_id: UUID!) {
    channelPermissionByChannel(channelId: $channel_id) {
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
`;

export const GET_CHANNEL_PERMISSION_BY_ROLE = gql`
  query GetChannelPermissionByRole($roleId: Int!) {
    channelPermissionByRole(roleId: $roleId) {
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
`;

export const GET_CATEGORY_MEMBERS = gql`
  query GetCategoryMembers {
    categoryMembers {
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
`;

export const GET_CATEGORY_MEMBERS_BY_CATEGORY = gql`
  query GetCategoryMembersByCategory($categoryId: Int!) {
    categoryMembersByCategory(categoryId: $categoryId) {
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
`;

export const GET_CATEGORY_MEMBERS_BY_CHANNEL = gql`
  query GetCategoryMembersByChannel($channelId: UUID!) {
    categoryMembersByChannel(channelId: $channelId) {
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
`;

export const GET_CHANNEL_BY_NAME_AND_SERVER = gql`
  query GetChannelByNameAndServer($name: String!, $serverId: UUID!) {
    channelByNameAndServer(name: $name, serverId: $serverId) {
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
`;