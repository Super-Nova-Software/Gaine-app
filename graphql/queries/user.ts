import { gql } from '@apollo/client';

// Queries
export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      username
      avatar
      discriminator
      role
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: UUID!) {
    user(id: $id) {
      id
      username
      avatar
      discriminator
      role
    }
  }
`;

export const GET_USER_FRIENDS = gql`
  query GetUserFriends($userId: UUID!) {
    userFriendsByUserid(userId: $userId) {
      user {
        id
        username
      }
      friend {
        id
        username
      }
      relationshipType
      accepted
    }
  }
`;

export const GET_USER_STATUS = gql`
  query GetUserStatus($userId: UUID!) {
    userStatus(userId: $userId) {
      user {
        id
        username
      }
      status
      customMessage
      activity
    }
  }
`;


