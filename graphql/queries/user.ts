import { gql } from "@apollo/client";

export const GET_ME = gql`
  query GetMe {
    me {
      id
      username
      email
      clerkId
      avatar
      discriminator
      role
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      username
      email
      clerkId
      avatar
      discriminator
      role
    }
  }
`;

export const GET_USER_FRIENDS = gql`
  query GetUserFriends {
    userFriends {
      id
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

export const GET_USER_STATUSES = gql`
  query GetUserStatuses {
    userStatuses {
      id
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

export const GET_USER_BY_ID = gql`
  query GetUserById($id: UUID!) {
    userById(id: $id) {
      id
      username
      email
      clerkId
      avatar
      discriminator
      role
    }
  }
`;

export const GET_USER_BY_CLERKID = gql`
  query GetUserByClerkId($clerkId: String!) {
    userByClerkId(clerkId: $id) {
      id
      username
      email
      clerkId
      avatar
      discriminator
      role
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($email: String!) {
    userByEmail(email: $email) {
      id
      username
      email
      clerkId
      avatar
      discriminator
      role
    }
  }
`;

export const GET_USER_BY_NAME = gql`
  query GetUserByName($username: String!) {
    userByName(username: $username) {
      id
      username
      email
      clerkId
      avatar
      discriminator
      role
    }
  }
`;