import { gql } from "@apollo/client";

// Queries
export const GET_SERVER = gql`
  query GetServer($id: UUID!) {
    server(id: $id) {
      id
      name
      icon
      description
      owner{
        id
        username
      }
      invites{
        id
        code
      }
      members {
        id
        user{
          id
          username
          avatar
          discriminator
          email
          userstatus{
            id
            status
            activity
          }
        }
        roles{
          id
          name
          color
          permissions{
            id
            name
          }
        }
      }
      channelSet{
        id
        name
        channelType
        emoji
      }
      categories{
        id
        name
      }
      invites{
        id
        code
      }
    }
  }
`;

export const GET_ALL_SERVERS = gql`
  query GetAllServers {
    allServers {
      id
      name
      owner {
        id
        username
      }
      description
      icon
    }
  }
`;

export const GET_PERMISSION = gql`
  query GetPermission($id: Int!) {
    permission(id: $id) {
      id
      name
      codename
    }
  }
`;

export const GET_ALL_PERMISSIONS = gql`
  query GetAllPermissions {
    allPermissions {
      id
      name
      codename
    }
  }
`;

export const GET_SERVER_ROLE = gql`
  query GetServerRole($id: Int!) {
    serverRole(id: $id) {
      id
      name
      color
      hoist
      mentionable
      permissions {
        id
        name
      }
    }
  }
`;

export const GET_ALL_SERVER_ROLES = gql`
  query GetAllServerRoles {
    allServerRoles {
      id
      name
      color
      hoist
      mentionable
      permissions {
        id
        name
      }
    }
  }
`;

export const GET_MEMBER = gql`
query GetMember($serverId: UUID!, $userId: UUID!) {
  member(serverId: $serverId, userId: $userId) {
    id
    user {
      id
      username
      avatar  
    }
    server {
      id
      name
    }
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
}
`;

export const GET_ALL_MEMBERS = gql`
  query GetAllMembers {
    allMembers {
      id
      user {
        id
        username
      }
      server {
        id
        name
      }
      roles {
        id
        name
      }
      joinedAt
    }
  }
`;

export const GET_INVITE = gql`
  query GetInvite($code: UUID!) {
    invite(code: $code) {
      id
      server {
        id
        name
      }
      inviter {
        id
        username
      }
      code
      usesLeft
      createdAt
      expiresAt
    }
  }
`;

export const GET_ALL_INVITES = gql`
  query GetAllInvites {
    allInvites {
      id
      server {
        id
        name
      }
      inviter {
        id
        username
      }
      code
      usesLeft
      createdAt
      expiresAt
    }
  }
`;

export const GET_USER_SERVERS = gql`
  query GetUserServers($userId: UUID!) {
    userServers(userId: $userId) {
      id
      name
      owner {
        id
        username
      }
      description
      icon
    }
  }
`;

export const GET_ROLES_BY_MEMBER_AND_SERVER = gql`
  query GetRolesByMemberAndServer($userId: UUID!, $serverId: UUID!) {
    rolesByMemberAndServer(userId: $userId, serverId: $serverId) {
      id
      name
      color
      hoist
      mentionable
    }
  }
`;