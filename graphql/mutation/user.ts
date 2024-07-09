import { gql } from "@apollo/client";

// Mutations
export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        id
        username
        email

        avatar
        discriminator
        role
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $username: String, $discriminator: String, $avatar: String, $emailVerified: DateTime) {
    updateUser(id: $id, username: $username, discriminator: $discriminator, avatar: $avatar, emailVerified: $emailVerified) {
      user {
        id
        username
        email
        avatar
        discriminator
        role
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      user {
        id
        username
        email
        avatar
        discriminator
        role
      }
    }
  }
`;