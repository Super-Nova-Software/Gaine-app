import { gql } from "@apollo/client";

const typeDefs = gql`
  type UserNotification {
    id: ID!
    user: User!
    message: Message!
    seen: Boolean!
  }

  type SystemNotification {
    id: ID!
    message: String!
    url: String
  }

  type UserNotificationSettings {
    id: ID!
    user: User!
    server: Server
    channel: Channel
    notification_setting: String!
    custom_sound: String
  }

  input UserNotificationInput {
    user_id: ID!
    message_id: ID!
    seen: Boolean
  }

  input SystemNotificationInput {
    message: String!
    url: String
  }

  input UserNotificationSettingsInput {
    user_id: ID!
    server_id: ID
    channel_id: ID
    notification_setting: String!
    custom_sound: Upload
  }

  type Query {
    user_notifications: [UserNotification]
    system_notifications: [SystemNotification]
    user_notification_settings: [UserNotificationSettings]
  }

  type Mutation {
    create_user_notification(input: UserNotificationInput!): UserNotification
    update_user_notification(id: ID!, input: UserNotificationInput!): UserNotification
    delete_user_notification(id: ID!): UserNotification

    create_system_notification(input: SystemNotificationInput!): SystemNotification
    update_system_notification(id: ID!, input: SystemNotificationInput!): SystemNotification
    delete_system_notification(id: ID!): SystemNotification

    create_user_notification_settings(input: UserNotificationSettingsInput!): UserNotificationSettings
    update_user_notification_settings(id: ID!, input: UserNotificationSettingsInput!): UserNotificationSettings
    delete_user_notification_settings(id: ID!): UserNotificationSettings
  }
`;

export default typeDefs;
