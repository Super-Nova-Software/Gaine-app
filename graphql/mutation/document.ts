import { gql } from '@apollo/client';

export const CREATE_DOCUMENT = gql`
  mutation CreateDocument(
    $editorState: String!,
    $channelId: UUID!,
    $document: String,
    $cover: String
  ) {
    createDocument(
      editorState: $editorState,
      channelId: $channelId,
      document: $document,
      cover: $cover
    ) {
      document {
        id
        editorState
        channel {
          id
          name
        }
        document
        cover
        isPublished
        createdAt
        updatedAt
      }
    }
  }
`;

export const UPDATE_DOCUMENT = gql`
  mutation UpdateDocument(
    $channelId: UUID!,
    $id: Int!,
    $editorState: String,
  ) {
    updateDocument(
      id: $id,
      channelId: $channelId,
      editorState: $editorState,
    ) {
      document {
        id
        editorState
        channel {
          id
          name
        }
        createdAt
        updatedAt
      }
    }
  }
`;

export const DELETE_DOCUMENT = gql`
  mutation DeleteDocument($id: Int!) {
    deleteDocument(id: $id) {
      documentId
    }
  }
`;


export const PUBLISH_DOCUMENT = gql`
  mutation PublishDocument($id: Int!) {
    publishDocument(id: $id) {
      document {
        id
        isPublished
      }
    }
  }
`;
