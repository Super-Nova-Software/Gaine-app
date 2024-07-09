import { gql } from "@apollo/client";

export const CREATE_SERVER = gql`
  mutation CreateServer($name: String!, $ownerId: UUID!, $icon: Upload) {
    createServer(name: $name, ownerId: $ownerId, icon: $icon) {
      server {
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
  }
`;

export const UPDATE_SERVER = gql`
  mutation UpdateServer($id: UUID!, $name: String, $description: String) {
    updateServer(id: $id, name: $name, description: $description) {
      server {
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
  }
`;

export const DELETE_SERVER = gql`
  mutation DeleteServer($id: UUID!) {
    deleteServer(id: $id) {
      success
    }
  }
`;

export const CREATE_SERVER_ROLE = gql`
  mutation CreateServerRole(
    $serverId: UUID!,
    $name: String!,
    $color: String,
    $hoist: Boolean,
    $mentionable: Boolean,
    $permissionIds: [Int]
  ) {
    createServerRole(
      serverId: $serverId,
      name: $name,
      color: $color,
      hoist: $hoist,
      mentionable: $mentionable,
      permissionIds: $permissionIds
    ) {
      serverRole {
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
  }
`;

export const UPDATE_SERVER_ROLE = gql`
  mutation UpdateServerRole(
    $id: Int!,
    $name: String,
    $color: String,
    $hoist: Boolean,
    $mentionable: Boolean,
    $permissionIds: [Int]
  ) {
    updateServerRole(
      id: $id,
      name: $name,
      color: $color,
      hoist: $hoist,
      mentionable: $mentionable,
      permissionIds: $permissionIds
    ) {
      serverRole {
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
  }
`;

export const DELETE_SERVER_ROLE = gql`
  mutation DeleteServerRole($id: Int!) {
    deleteServerRole(id: $id) {
      success
    }
  }
`;

export const ADD_ROLE_TO_MEMBER = gql`
  mutation AddRoleToMember($roleId: Int!, $memberId: UUID!) {
    addRoleToMember(roleId: $roleId, memberId: $memberId) {
      member {
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
  }
`;

export const REMOVE_ROLE_FROM_MEMBER = gql`
  mutation RemoveRoleFromMember($roleId: Int!, $memberId: UUID!) {
    removeRoleFromMember(roleId: $roleId, memberId: $memberId) {
      member {
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
  }
`;

export const ADD_MEMBER_TO_SERVER = gql`
  mutation AddMemberToServer($userId: UUID!, $serverId: UUID!) {
    addMemberToServer(userId: $userId, serverId: $serverId) {
      member {
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
  }
`;

export const DELETE_MEMBER_FROM_SERVER = gql`
  mutation DeleteMemberFromServer($memberId: UUID!) {
    deleteMemberFromServer(memberId: $memberId) {
      success
    }
  }
`;

export const CREATE_INVITE = gql`
  mutation CreateInvite(
    $serverId: UUID!,
    $inviterId: UUID!,
    $usesLeft: Int,
    $expiresAt: DateTime
  ) {
    createInvite(
      serverId: $serverId,
      inviterId: $inviterId,
      usesLeft: $usesLeft,
      expiresAt: $expiresAt
    ) {
      invite {
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
  }
`;

export const USE_INVITE = gql`
  mutation UseInvite($code: UUID!) {
    useInvite(code: $code) {
      success
    }
  }
`;