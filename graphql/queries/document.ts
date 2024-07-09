import { gql } from '@apollo/client';

export const GET_DOCUMENT = gql`
  query GetDocument($id: Int!) {
    document(id: $id) {
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
`;

export const GET_DOCUMENT_BY_CHANNEL = gql`
  query GetDocumentByChannel($channelId: UUID!) {
    documentByChannel(channelId: $channelId) {
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
`;

export const GET_ALL_DOCUMENTS = gql`
  query GetAllDocuments {
    allDocuments {
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
`;
