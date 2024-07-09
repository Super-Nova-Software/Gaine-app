/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: { input: any; output: any; }
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: { input: any; output: any; }
  /**
   * Leverages the internal Python implementation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: { input: any; output: any; }
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: { input: any; output: any; }
};

export type AddMemberToServer = {
  __typename?: 'AddMemberToServer';
  member?: Maybe<MemberType>;
};

export type AddRoleToMember = {
  __typename?: 'AddRoleToMember';
  member?: Maybe<MemberType>;
};

export type AttachmentType = {
  __typename?: 'AttachmentType';
  file: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message: MessageType;
  name: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  type: Scalars['String']['output'];
  uploadedAt: Scalars['DateTime']['output'];
};

export type AuditLogType = {
  __typename?: 'AuditLogType';
  action: Scalars['String']['output'];
  actor: UserType;
  details: Scalars['JSONString']['output'];
  id: Scalars['ID']['output'];
  server: ServerType;
  target?: Maybe<UserType>;
  timestamp: Scalars['DateTime']['output'];
};

export type ChangeRoleMutation = {
  __typename?: 'ChangeRoleMutation';
  member?: Maybe<MemberType>;
};

export type ChannelCategoryMemberType = {
  __typename?: 'ChannelCategoryMemberType';
  category: ChannelCategoryType;
  channel: ChannelType;
  id: Scalars['ID']['output'];
  position: Scalars['Int']['output'];
};

export type ChannelCategoryType = {
  __typename?: 'ChannelCategoryType';
  categoryMembers: Array<ChannelCategoryMemberType>;
  channels: Array<ChannelType>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  server: ServerType;
};

export type ChannelEmojiType = {
  __typename?: 'ChannelEmojiType';
  channel: ChannelType;
  emoji: ServerEmojiType;
  id: Scalars['ID']['output'];
};

export type ChannelPermissionType = {
  __typename?: 'ChannelPermissionType';
  allow: Scalars['String']['output'];
  channel: ChannelType;
  deny: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role?: Maybe<ServerRoleType>;
};

export type ChannelType = {
  __typename?: 'ChannelType';
  category?: Maybe<ChannelCategoryType>;
  categoryMembers: Array<ChannelCategoryMemberType>;
  channelType: ServerchannelsChannelChannelTypeChoices;
  channelemojiSet: Array<ChannelEmojiType>;
  document?: Maybe<DocumentType>;
  draw?: Maybe<DrawType>;
  emoji?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  isPrivate: Scalars['Boolean']['output'];
  messageSet: Array<MessageType>;
  moderationlogSet: Array<ModerationLogType>;
  name: Scalars['String']['output'];
  permissions: Array<ChannelPermissionType>;
  server: ServerType;
  topic?: Maybe<Scalars['String']['output']>;
  usernotificationsettingsSet: Array<UserNotificationSettingsType>;
};

export type CreateAttachment = {
  __typename?: 'CreateAttachment';
  attachment?: Maybe<AttachmentType>;
};

export type CreateChannel = {
  __typename?: 'CreateChannel';
  channel?: Maybe<ChannelType>;
};

export type CreateChannelCategory = {
  __typename?: 'CreateChannelCategory';
  category?: Maybe<ChannelCategoryType>;
};

export type CreateChannelCategoryMember = {
  __typename?: 'CreateChannelCategoryMember';
  member?: Maybe<ChannelCategoryMemberType>;
};

export type CreateChannelEmoji = {
  __typename?: 'CreateChannelEmoji';
  channelEmoji?: Maybe<ChannelEmojiType>;
};

export type CreateChannelPermission = {
  __typename?: 'CreateChannelPermission';
  permission?: Maybe<ChannelPermissionType>;
};

export type CreateDirectMessage = {
  __typename?: 'CreateDirectMessage';
  directMessage?: Maybe<DirectMessageType>;
};

export type CreateDocument = {
  __typename?: 'CreateDocument';
  document?: Maybe<DocumentType>;
};

export type CreateDraw = {
  __typename?: 'CreateDraw';
  draw?: Maybe<DrawType>;
};

export type CreateEvent = {
  __typename?: 'CreateEvent';
  event?: Maybe<EventType>;
};

export type CreateInvite = {
  __typename?: 'CreateInvite';
  invite?: Maybe<InviteType>;
};

export type CreateMessage = {
  __typename?: 'CreateMessage';
  message?: Maybe<MessageType>;
};

export type CreateReaction = {
  __typename?: 'CreateReaction';
  reaction?: Maybe<ReactionType>;
};

export type CreateServer = {
  __typename?: 'CreateServer';
  member?: Maybe<MemberType>;
  server?: Maybe<ServerType>;
};

export type CreateServerEmoji = {
  __typename?: 'CreateServerEmoji';
  serverEmoji?: Maybe<ServerEmojiType>;
};

export type CreateServerRole = {
  __typename?: 'CreateServerRole';
  serverRole?: Maybe<ServerRoleType>;
};

export type CreateSystemNotification = {
  __typename?: 'CreateSystemNotification';
  notification?: Maybe<SystemNotificationType>;
};

export type CreateUser = {
  __typename?: 'CreateUser';
  user?: Maybe<UserType>;
};

export type CreateUserBan = {
  __typename?: 'CreateUserBan';
  userBan?: Maybe<UserBanType>;
};

export type CreateUserNotification = {
  __typename?: 'CreateUserNotification';
  notification?: Maybe<UserNotificationType>;
};

export type CreateUserNotificationSettings = {
  __typename?: 'CreateUserNotificationSettings';
  settings?: Maybe<UserNotificationSettingsType>;
};

export type DeleteAttachment = {
  __typename?: 'DeleteAttachment';
  attachmentId?: Maybe<Scalars['Int']['output']>;
};

export type DeleteChannel = {
  __typename?: 'DeleteChannel';
  id?: Maybe<Scalars['UUID']['output']>;
};

export type DeleteChannelCategory = {
  __typename?: 'DeleteChannelCategory';
  categoryId?: Maybe<Scalars['Int']['output']>;
};

export type DeleteChannelCategoryMember = {
  __typename?: 'DeleteChannelCategoryMember';
  id?: Maybe<Scalars['Int']['output']>;
};

export type DeleteChannelEmoji = {
  __typename?: 'DeleteChannelEmoji';
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteChannelPermission = {
  __typename?: 'DeleteChannelPermission';
  id?: Maybe<Scalars['Int']['output']>;
};

export type DeleteDirectMessage = {
  __typename?: 'DeleteDirectMessage';
  directMessageId?: Maybe<Scalars['Int']['output']>;
};

export type DeleteDocument = {
  __typename?: 'DeleteDocument';
  documentId?: Maybe<Scalars['Int']['output']>;
};

export type DeleteDraw = {
  __typename?: 'DeleteDraw';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteMemberFromServer = {
  __typename?: 'DeleteMemberFromServer';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteMessage = {
  __typename?: 'DeleteMessage';
  messageId?: Maybe<Scalars['Int']['output']>;
};

export type DeleteReaction = {
  __typename?: 'DeleteReaction';
  reactionId?: Maybe<Scalars['Int']['output']>;
};

export type DeleteServer = {
  __typename?: 'DeleteServer';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteServerEmoji = {
  __typename?: 'DeleteServerEmoji';
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteServerRole = {
  __typename?: 'DeleteServerRole';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteSystemNotification = {
  __typename?: 'DeleteSystemNotification';
  notification?: Maybe<SystemNotificationType>;
};

export type DeleteUser = {
  __typename?: 'DeleteUser';
  user?: Maybe<UserType>;
};

export type DeleteUserBan = {
  __typename?: 'DeleteUserBan';
  userBan?: Maybe<UserBanType>;
};

export type DeleteUserNotification = {
  __typename?: 'DeleteUserNotification';
  notification?: Maybe<UserNotificationType>;
};

export type DeleteUserNotificationSettings = {
  __typename?: 'DeleteUserNotificationSettings';
  settings?: Maybe<UserNotificationSettingsType>;
};

export type DirectMessageType = {
  __typename?: 'DirectMessageType';
  content: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  editedTimestamp?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isRead: Scalars['Boolean']['output'];
  recipient: UserType;
  sender: UserType;
  timestamp: Scalars['DateTime']['output'];
};

export type DocumentType = {
  __typename?: 'DocumentType';
  channel: ChannelType;
  /** Cover image for the document */
  cover?: Maybe<Scalars['String']['output']>;
  /** The date and time when the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** File associated with the document */
  document?: Maybe<Scalars['String']['output']>;
  /** The state of the editor for the document */
  editorState?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Publication status of the document */
  isPublished: Scalars['Boolean']['output'];
  /** The date and time when the document was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type DrawType = {
  __typename?: 'DrawType';
  channel: ChannelType;
  /** The date and time when the document was created */
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** Publication status of the document */
  isPublished: Scalars['Boolean']['output'];
  /** The date and time when the document was last updated */
  updatedAt: Scalars['DateTime']['output'];
  /** The state of the editor for the document */
  whiteboard?: Maybe<Scalars['String']['output']>;
};

export type EventType = {
  __typename?: 'EventType';
  createdAt: Scalars['DateTime']['output'];
  creator: UserType;
  description?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  server: ServerType;
  startTime: Scalars['DateTime']['output'];
};

export type InviteType = {
  __typename?: 'InviteType';
  code: Scalars['UUID']['output'];
  createdAt: Scalars['DateTime']['output'];
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  inviter: UserType;
  server: ServerType;
  usesLeft: Scalars['Int']['output'];
};

export type KickMemberMutation = {
  __typename?: 'KickMemberMutation';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type MemberType = {
  __typename?: 'MemberType';
  id: Scalars['ID']['output'];
  joinedAt: Scalars['DateTime']['output'];
  roles: Array<ServerRoleType>;
  server?: Maybe<ServerType>;
  user?: Maybe<UserType>;
};

export type MessageType = {
  __typename?: 'MessageType';
  attachments: Array<AttachmentType>;
  channel: ChannelType;
  content: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  editedTimestamp?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  reactionSet: Array<ReactionType>;
  sender: UserType;
  timestamp: Scalars['DateTime']['output'];
  usernotificationSet: Array<UserNotificationType>;
};

export type ModerationLogType = {
  __typename?: 'ModerationLogType';
  action: ModerationModerationLogActionChoices;
  actor: UserType;
  channel?: Maybe<ChannelType>;
  id: Scalars['UUID']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  server: ServerType;
  target: UserType;
  timestamp: Scalars['DateTime']['output'];
};

/** An enumeration. */
export enum ModerationModerationLogActionChoices {
  /** Ban */
  Ban = 'BAN',
  /** Kick */
  Kick = 'KICK',
  /** Message Delete */
  MessageDelete = 'MESSAGE_DELETE',
  /** Mute */
  Mute = 'MUTE',
  /** Unban */
  Unban = 'UNBAN',
  /** Unmute */
  Unmute = 'UNMUTE'
}

export type Mutation = {
  __typename?: 'Mutation';
  addMemberToServer?: Maybe<AddMemberToServer>;
  addRoleToMember?: Maybe<AddRoleToMember>;
  changeRole?: Maybe<ChangeRoleMutation>;
  createAttachment?: Maybe<CreateAttachment>;
  createChannel?: Maybe<CreateChannel>;
  createChannelCategory?: Maybe<CreateChannelCategory>;
  createChannelCategoryMember?: Maybe<CreateChannelCategoryMember>;
  createChannelEmoji?: Maybe<CreateChannelEmoji>;
  createChannelPermission?: Maybe<CreateChannelPermission>;
  createDirectMessage?: Maybe<CreateDirectMessage>;
  createDocument?: Maybe<CreateDocument>;
  createDraw?: Maybe<CreateDraw>;
  createEvent?: Maybe<CreateEvent>;
  createInvite?: Maybe<CreateInvite>;
  createMessage?: Maybe<CreateMessage>;
  createReaction?: Maybe<CreateReaction>;
  createServer?: Maybe<CreateServer>;
  createServerEmoji?: Maybe<CreateServerEmoji>;
  createServerRole?: Maybe<CreateServerRole>;
  createSystemNotification?: Maybe<CreateSystemNotification>;
  createUser?: Maybe<CreateUser>;
  createUserBan?: Maybe<CreateUserBan>;
  createUserNotification?: Maybe<CreateUserNotification>;
  createUserNotificationSettings?: Maybe<CreateUserNotificationSettings>;
  deleteAttachment?: Maybe<DeleteAttachment>;
  deleteChannel?: Maybe<DeleteChannel>;
  deleteChannelCategory?: Maybe<DeleteChannelCategory>;
  deleteChannelCategoryMember?: Maybe<DeleteChannelCategoryMember>;
  deleteChannelEmoji?: Maybe<DeleteChannelEmoji>;
  deleteChannelPermission?: Maybe<DeleteChannelPermission>;
  deleteDirectMessage?: Maybe<DeleteDirectMessage>;
  deleteDocument?: Maybe<DeleteDocument>;
  deleteDraw?: Maybe<DeleteDraw>;
  deleteMemberFromServer?: Maybe<DeleteMemberFromServer>;
  deleteMessage?: Maybe<DeleteMessage>;
  deleteReaction?: Maybe<DeleteReaction>;
  deleteServer?: Maybe<DeleteServer>;
  deleteServerEmoji?: Maybe<DeleteServerEmoji>;
  deleteServerRole?: Maybe<DeleteServerRole>;
  deleteSystemNotification?: Maybe<DeleteSystemNotification>;
  deleteUser?: Maybe<DeleteUser>;
  deleteUserBan?: Maybe<DeleteUserBan>;
  deleteUserNotification?: Maybe<DeleteUserNotification>;
  deleteUserNotificationSettings?: Maybe<DeleteUserNotificationSettings>;
  kickMember?: Maybe<KickMemberMutation>;
  publishDocument?: Maybe<PublishDocument>;
  refreshToken?: Maybe<Refresh>;
  removeRoleFromMember?: Maybe<RemoveRoleFromMember>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  updateAttachment?: Maybe<UpdateAttachment>;
  updateChannel?: Maybe<UpdateChannel>;
  updateChannelCategory?: Maybe<UpdateChannelCategory>;
  updateChannelCategoryMember?: Maybe<UpdateChannelCategoryMember>;
  updateChannelPermission?: Maybe<UpdateChannelPermission>;
  updateDirectMessage?: Maybe<UpdateDirectMessage>;
  updateDocument?: Maybe<UpdateDocument>;
  updateDraw?: Maybe<UpdateDraw>;
  updateMessage?: Maybe<UpdateMessage>;
  updateServer?: Maybe<UpdateServer>;
  updateServerRole?: Maybe<UpdateServerRole>;
  updateSystemNotification?: Maybe<UpdateSystemNotification>;
  updateUser?: Maybe<UpdateUser>;
  updateUserBan?: Maybe<UpdateUserBan>;
  updateUserNotification?: Maybe<UpdateUserNotification>;
  updateUserNotificationSettings?: Maybe<UpdateUserNotificationSettings>;
  useInvite?: Maybe<UseInvite>;
  verifyToken?: Maybe<Verify>;
};


export type MutationAddMemberToServerArgs = {
  serverId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};


export type MutationAddRoleToMemberArgs = {
  memberId: Scalars['UUID']['input'];
  roleId: Scalars['Int']['input'];
};


export type MutationChangeRoleArgs = {
  memberId: Scalars['UUID']['input'];
  newRoleId: Scalars['Int']['input'];
};


export type MutationCreateAttachmentArgs = {
  file: Scalars['String']['input'];
  messageId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  type: Scalars['String']['input'];
};


export type MutationCreateChannelArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  channelType?: InputMaybe<Scalars['String']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  serverId: Scalars['UUID']['input'];
  topic?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateChannelCategoryArgs = {
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
  serverId: Scalars['UUID']['input'];
};


export type MutationCreateChannelCategoryMemberArgs = {
  categoryId: Scalars['Int']['input'];
  channelId: Scalars['UUID']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateChannelEmojiArgs = {
  channelId: Scalars['UUID']['input'];
  emojiId: Scalars['ID']['input'];
};


export type MutationCreateChannelPermissionArgs = {
  allow: Scalars['String']['input'];
  channelId: Scalars['UUID']['input'];
  deny: Scalars['String']['input'];
  roleId: Scalars['Int']['input'];
};


export type MutationCreateDirectMessageArgs = {
  content: Scalars['String']['input'];
  recipientId: Scalars['UUID']['input'];
  senderId: Scalars['UUID']['input'];
};


export type MutationCreateDocumentArgs = {
  channelId: Scalars['UUID']['input'];
  cover?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<Scalars['String']['input']>;
  editorState: Scalars['String']['input'];
};


export type MutationCreateDrawArgs = {
  channelId: Scalars['UUID']['input'];
  whiteboard?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateEventArgs = {
  creatorId?: InputMaybe<Scalars['UUID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  serverId?: InputMaybe<Scalars['UUID']['input']>;
};


export type MutationCreateInviteArgs = {
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  inviterId: Scalars['UUID']['input'];
  serverId: Scalars['UUID']['input'];
  usesLeft?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateMessageArgs = {
  channelId: Scalars['UUID']['input'];
  content: Scalars['String']['input'];
  senderId: Scalars['UUID']['input'];
};


export type MutationCreateReactionArgs = {
  emoji: Scalars['String']['input'];
  messageId: Scalars['Int']['input'];
  userId: Scalars['UUID']['input'];
};


export type MutationCreateServerArgs = {
  icon?: InputMaybe<Scalars['Upload']['input']>;
  name: Scalars['String']['input'];
  ownerId: Scalars['UUID']['input'];
};


export type MutationCreateServerEmojiArgs = {
  name: Scalars['String']['input'];
  serverId: Scalars['UUID']['input'];
};


export type MutationCreateServerRoleArgs = {
  color?: InputMaybe<Scalars['String']['input']>;
  hoist?: InputMaybe<Scalars['Boolean']['input']>;
  mentionable?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  permissionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  serverId: Scalars['UUID']['input'];
};


export type MutationCreateSystemNotificationArgs = {
  input: SystemNotificationInput;
};


export type MutationCreateUserArgs = {
  clerkId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationCreateUserBanArgs = {
  input: UserBanInput;
};


export type MutationCreateUserNotificationArgs = {
  input: UserNotificationInput;
};


export type MutationCreateUserNotificationSettingsArgs = {
  input: UserNotificationSettingsInput;
};


export type MutationDeleteAttachmentArgs = {
  attachmentId: Scalars['Int']['input'];
};


export type MutationDeleteChannelArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteChannelCategoryArgs = {
  categoryId: Scalars['Int']['input'];
};


export type MutationDeleteChannelCategoryMemberArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteChannelEmojiArgs = {
  channelId: Scalars['UUID']['input'];
  emojiId: Scalars['ID']['input'];
};


export type MutationDeleteChannelPermissionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteDirectMessageArgs = {
  directMessageId: Scalars['Int']['input'];
};


export type MutationDeleteDocumentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteDrawArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMemberFromServerArgs = {
  memberId: Scalars['UUID']['input'];
};


export type MutationDeleteMessageArgs = {
  messageId: Scalars['Int']['input'];
};


export type MutationDeleteReactionArgs = {
  reactionId: Scalars['Int']['input'];
};


export type MutationDeleteServerArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteServerEmojiArgs = {
  emojiId: Scalars['ID']['input'];
};


export type MutationDeleteServerRoleArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteSystemNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserBanArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserNotificationSettingsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationKickMemberArgs = {
  memberId: Scalars['UUID']['input'];
};


export type MutationPublishDocumentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRemoveRoleFromMemberArgs = {
  memberId: Scalars['UUID']['input'];
  roleId: Scalars['Int']['input'];
};


export type MutationTokenAuthArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateAttachmentArgs = {
  attachmentId: Scalars['Int']['input'];
  file?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateChannelArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  channelType?: InputMaybe<Scalars['String']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateChannelCategoryArgs = {
  categoryId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateChannelCategoryMemberArgs = {
  id: Scalars['Int']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateChannelPermissionArgs = {
  allow?: InputMaybe<Scalars['String']['input']>;
  deny?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateDirectMessageArgs = {
  content: Scalars['String']['input'];
  directMessageId: Scalars['Int']['input'];
};


export type MutationUpdateDocumentArgs = {
  channelId: Scalars['UUID']['input'];
  editorState?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateDrawArgs = {
  id: Scalars['ID']['input'];
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  whiteboard?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateMessageArgs = {
  content: Scalars['String']['input'];
  messageId: Scalars['Int']['input'];
};


export type MutationUpdateServerArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateServerRoleArgs = {
  color?: InputMaybe<Scalars['String']['input']>;
  hoist?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  mentionable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type MutationUpdateSystemNotificationArgs = {
  id: Scalars['ID']['input'];
  input: SystemNotificationInput;
};


export type MutationUpdateUserArgs = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  discriminator?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUserBanArgs = {
  id: Scalars['ID']['input'];
  input: UserBanInput;
};


export type MutationUpdateUserNotificationArgs = {
  id: Scalars['ID']['input'];
  input: UserNotificationInput;
};


export type MutationUpdateUserNotificationSettingsArgs = {
  id: Scalars['ID']['input'];
  input: UserNotificationSettingsInput;
};


export type MutationUseInviteArgs = {
  code: Scalars['UUID']['input'];
};


export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

/** An enumeration. */
export enum NotificationsUserNotificationSettingsNotificationSettingChoices {
  /** Receive notifications for all messages */
  AllMessages = 'ALL_MESSAGES',
  /** Receive notifications for mentions only */
  MentionsOnly = 'MENTIONS_ONLY',
  /** Do not receive notifications */
  NoNotifications = 'NO_NOTIFICATIONS'
}

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type PermissionType = {
  __typename?: 'PermissionType';
  codename: Scalars['UUID']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  serverroleSet: Array<ServerRoleType>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type PublishDocument = {
  __typename?: 'PublishDocument';
  document?: Maybe<DocumentType>;
};

export type Query = {
  __typename?: 'Query';
  allDocuments?: Maybe<Array<Maybe<DocumentType>>>;
  allDraws?: Maybe<Array<Maybe<DrawType>>>;
  allEvents?: Maybe<Array<Maybe<EventType>>>;
  allInvites?: Maybe<Array<Maybe<InviteType>>>;
  allMembers?: Maybe<Array<Maybe<MemberType>>>;
  allPermissions?: Maybe<Array<Maybe<PermissionType>>>;
  allServerRoles?: Maybe<Array<Maybe<ServerRoleType>>>;
  allServers?: Maybe<Array<Maybe<ServerType>>>;
  attachments?: Maybe<Array<Maybe<AttachmentType>>>;
  auditLogs?: Maybe<Array<Maybe<AuditLogType>>>;
  categoryMembers?: Maybe<Array<Maybe<ChannelCategoryMemberType>>>;
  categoryMembersByCategory?: Maybe<Array<Maybe<ChannelCategoryMemberType>>>;
  categoryMembersByChannel?: Maybe<Array<Maybe<ChannelCategoryMemberType>>>;
  channel?: Maybe<ChannelType>;
  channelByNameAndServer?: Maybe<ChannelType>;
  channelCategories?: Maybe<Array<Maybe<ChannelCategoryType>>>;
  channelEmojis?: Maybe<Array<Maybe<ChannelEmojiType>>>;
  channelPermissionByChannel?: Maybe<Array<Maybe<ChannelPermissionType>>>;
  channelPermissionByRole?: Maybe<Array<Maybe<ChannelPermissionType>>>;
  channelPermissions?: Maybe<Array<Maybe<ChannelPermissionType>>>;
  channels?: Maybe<Array<Maybe<ChannelType>>>;
  channelsByServer?: Maybe<Array<Maybe<ChannelType>>>;
  directMessages?: Maybe<Array<Maybe<DirectMessageType>>>;
  document?: Maybe<DocumentType>;
  documentByChannel?: Maybe<Array<Maybe<DocumentType>>>;
  drawById?: Maybe<DrawType>;
  drawsByChannel?: Maybe<Array<Maybe<DrawType>>>;
  eventById?: Maybe<EventType>;
  eventsByServer?: Maybe<Array<Maybe<EventType>>>;
  invite?: Maybe<InviteType>;
  me?: Maybe<UserType>;
  member?: Maybe<MemberType>;
  messages?: Maybe<Array<Maybe<MessageType>>>;
  messagesByChannel?: Maybe<Array<Maybe<MessageType>>>;
  moderationLogs?: Maybe<Array<Maybe<ModerationLogType>>>;
  permission?: Maybe<PermissionType>;
  reactions?: Maybe<Array<Maybe<ReactionType>>>;
  rolesByMemberAndServer?: Maybe<Array<Maybe<ServerRoleType>>>;
  server?: Maybe<ServerType>;
  serverEmojis?: Maybe<Array<Maybe<ServerEmojiType>>>;
  serverRole?: Maybe<ServerRoleType>;
  systemNotifications?: Maybe<Array<Maybe<SystemNotificationType>>>;
  userBans?: Maybe<Array<Maybe<UserBanType>>>;
  userByEmail?: Maybe<UserType>;
  userById?: Maybe<UserType>;
  userByName?: Maybe<UserType>;
  userFriends?: Maybe<Array<Maybe<UserFriendType>>>;
  userMutes?: Maybe<Array<Maybe<UserMuteType>>>;
  userNotificationSettings?: Maybe<Array<Maybe<UserNotificationSettingsType>>>;
  userNotifications?: Maybe<Array<Maybe<UserNotificationType>>>;
  userServers?: Maybe<Array<Maybe<ServerType>>>;
  userStatuses?: Maybe<Array<Maybe<UserStatusType>>>;
  users?: Maybe<Array<Maybe<UserType>>>;
};


export type QueryCategoryMembersByCategoryArgs = {
  categoryId: Scalars['Int']['input'];
};


export type QueryCategoryMembersByChannelArgs = {
  channelId: Scalars['UUID']['input'];
};


export type QueryChannelArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryChannelByNameAndServerArgs = {
  name: Scalars['String']['input'];
  serverId: Scalars['UUID']['input'];
};


export type QueryChannelPermissionByChannelArgs = {
  channelId: Scalars['UUID']['input'];
};


export type QueryChannelPermissionByRoleArgs = {
  roleId: Scalars['Int']['input'];
};


export type QueryChannelsByServerArgs = {
  serverId: Scalars['UUID']['input'];
};


export type QueryDocumentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocumentByChannelArgs = {
  channelId: Scalars['UUID']['input'];
};


export type QueryDrawByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDrawsByChannelArgs = {
  channelId: Scalars['UUID']['input'];
};


export type QueryEventByIdArgs = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryEventsByServerArgs = {
  serverId?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryInviteArgs = {
  code: Scalars['UUID']['input'];
};


export type QueryMemberArgs = {
  serverId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};


export type QueryMessagesByChannelArgs = {
  channelId?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryPermissionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRolesByMemberAndServerArgs = {
  serverId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
};


export type QueryServerArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryServerRoleArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryUserByIdArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryUserByNameArgs = {
  username: Scalars['String']['input'];
};


export type QueryUserServersArgs = {
  userId: Scalars['UUID']['input'];
};

export type ReactionType = {
  __typename?: 'ReactionType';
  emoji: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message: MessageType;
  timestamp: Scalars['DateTime']['output'];
  user: UserType;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type RemoveRoleFromMember = {
  __typename?: 'RemoveRoleFromMember';
  member?: Maybe<MemberType>;
};

export type ServerEmojiType = {
  __typename?: 'ServerEmojiType';
  channelemojiSet: Array<ChannelEmojiType>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  isAnimated: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  server: ServerType;
};

export type ServerRoleType = {
  __typename?: 'ServerRoleType';
  channelpermissionSet: Array<ChannelPermissionType>;
  color?: Maybe<Scalars['String']['output']>;
  hoist: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  memberSet: Array<MemberType>;
  mentionable: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  permissions: Array<PermissionType>;
  server: ServerType;
};

export type ServerType = {
  __typename?: 'ServerType';
  auditlogSet: Array<AuditLogType>;
  categories: Array<ChannelCategoryType>;
  channelSet: Array<ChannelType>;
  description: Scalars['String']['output'];
  eventSet: Array<EventType>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  invites: Array<InviteType>;
  members: Array<MemberType>;
  moderationlogSet: Array<ModerationLogType>;
  name: Scalars['String']['output'];
  owner: UserType;
  roles: Array<ServerRoleType>;
  serveremojiSet: Array<ServerEmojiType>;
  userbanSet: Array<UserBanType>;
  usermuteSet: Array<UserMuteType>;
  usernotificationsettingsSet: Array<UserNotificationSettingsType>;
};

/** An enumeration. */
export enum ServerchannelsChannelChannelTypeChoices {
  /** Voice Channels */
  Audio = 'AUDIO',
  /** Document Channels */
  Document = 'DOCUMENT',
  /** draw Channels */
  Draw = 'DRAW',
  /** Text Channels */
  Text = 'TEXT',
  /** Video Channels */
  Video = 'VIDEO'
}

export type SystemNotificationInput = {
  message: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SystemNotificationType = {
  __typename?: 'SystemNotificationType';
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type UpdateAttachment = {
  __typename?: 'UpdateAttachment';
  attachment?: Maybe<AttachmentType>;
};

export type UpdateChannel = {
  __typename?: 'UpdateChannel';
  channel?: Maybe<ChannelType>;
};

export type UpdateChannelCategory = {
  __typename?: 'UpdateChannelCategory';
  category?: Maybe<ChannelCategoryType>;
};

export type UpdateChannelCategoryMember = {
  __typename?: 'UpdateChannelCategoryMember';
  member?: Maybe<ChannelCategoryMemberType>;
};

export type UpdateChannelPermission = {
  __typename?: 'UpdateChannelPermission';
  permission?: Maybe<ChannelPermissionType>;
};

export type UpdateDirectMessage = {
  __typename?: 'UpdateDirectMessage';
  directMessage?: Maybe<DirectMessageType>;
};

export type UpdateDocument = {
  __typename?: 'UpdateDocument';
  document?: Maybe<DocumentType>;
};

export type UpdateDraw = {
  __typename?: 'UpdateDraw';
  draw?: Maybe<DrawType>;
};

export type UpdateMessage = {
  __typename?: 'UpdateMessage';
  message?: Maybe<MessageType>;
};

export type UpdateServer = {
  __typename?: 'UpdateServer';
  server?: Maybe<ServerType>;
};

export type UpdateServerRole = {
  __typename?: 'UpdateServerRole';
  serverRole?: Maybe<ServerRoleType>;
};

export type UpdateSystemNotification = {
  __typename?: 'UpdateSystemNotification';
  notification?: Maybe<SystemNotificationType>;
};

export type UpdateUser = {
  __typename?: 'UpdateUser';
  user?: Maybe<UserType>;
};

export type UpdateUserBan = {
  __typename?: 'UpdateUserBan';
  userBan?: Maybe<UserBanType>;
};

export type UpdateUserNotification = {
  __typename?: 'UpdateUserNotification';
  notification?: Maybe<UserNotificationType>;
};

export type UpdateUserNotificationSettings = {
  __typename?: 'UpdateUserNotificationSettings';
  settings?: Maybe<UserNotificationSettingsType>;
};

export type UseInvite = {
  __typename?: 'UseInvite';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UserBanInput = {
  reason?: InputMaybe<Scalars['String']['input']>;
  serverId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type UserBanType = {
  __typename?: 'UserBanType';
  bannedTimestamp: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  server: ServerType;
  user: UserType;
};

export type UserFriendType = {
  __typename?: 'UserFriendType';
  accepted: Scalars['Boolean']['output'];
  friend: UserType;
  id: Scalars['ID']['output'];
  relationshipType: UsersUserFriendRelationshipTypeChoices;
  user: UserType;
};

export type UserMuteType = {
  __typename?: 'UserMuteType';
  id: Scalars['ID']['output'];
  mutedTimestamp: Scalars['DateTime']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  server: ServerType;
  until?: Maybe<Scalars['DateTime']['output']>;
  user: UserType;
};

export type UserNotificationInput = {
  messageId: Scalars['ID']['input'];
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['ID']['input'];
};

export type UserNotificationSettingsInput = {
  channelId?: InputMaybe<Scalars['ID']['input']>;
  customSound?: InputMaybe<Scalars['Upload']['input']>;
  notificationSetting: Scalars['String']['input'];
  serverId?: InputMaybe<Scalars['ID']['input']>;
  userId: Scalars['ID']['input'];
};

export type UserNotificationSettingsType = {
  __typename?: 'UserNotificationSettingsType';
  channel?: Maybe<ChannelType>;
  /** Upload your custom notification sound file */
  customSound?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  notificationSetting: NotificationsUserNotificationSettingsNotificationSettingChoices;
  server?: Maybe<ServerType>;
  user: UserType;
};

export type UserNotificationType = {
  __typename?: 'UserNotificationType';
  id: Scalars['ID']['output'];
  message: MessageType;
  seen: Scalars['Boolean']['output'];
  user: UserType;
};

export type UserStatusType = {
  __typename?: 'UserStatusType';
  activity: Scalars['String']['output'];
  customMessage: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status: UsersUserStatusStatusChoices;
  user: UserType;
};

export type UserType = {
  __typename?: 'UserType';
  auditLogsAsActor: Array<AuditLogType>;
  auditlogSet: Array<AuditLogType>;
  avatar?: Maybe<Scalars['String']['output']>;
  dateJoined: Scalars['DateTime']['output'];
  discriminator: Scalars['String']['output'];
  email: Scalars['String']['output'];
  eventSet: Array<EventType>;
  firstName: Scalars['String']['output'];
  friendRequests: Array<UserFriendType>;
  friends: Array<UserFriendType>;
  id: Scalars['UUID']['output'];
  invitesCreated: Array<InviteType>;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean']['output'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean']['output'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  members: Array<MemberType>;
  messageSet: Array<MessageType>;
  moderationLogsAsActor: Array<ModerationLogType>;
  moderationLogsAsTarget: Array<ModerationLogType>;
  password: Scalars['String']['output'];
  reactionSet: Array<ReactionType>;
  receivedDirectMessages: Array<DirectMessageType>;
  role: UsersUserRoleChoices;
  sentDirectMessages: Array<DirectMessageType>;
  serverSet: Array<ServerType>;
  userbanSet: Array<UserBanType>;
  usermuteSet: Array<UserMuteType>;
  username?: Maybe<Scalars['String']['output']>;
  usernotificationSet: Array<UserNotificationType>;
  usernotificationsettingsSet: Array<UserNotificationSettingsType>;
  userstatus?: Maybe<UserStatusType>;
};

/** An enumeration. */
export enum UsersUserFriendRelationshipTypeChoices {
  /** Blocked */
  Blocked = 'BLOCKED',
  /** Friend */
  Friend = 'FRIEND'
}

/** An enumeration. */
export enum UsersUserRoleChoices {
  /** Admin */
  Admin = 'ADMIN',
  /** User */
  User = 'USER'
}

/** An enumeration. */
export enum UsersUserStatusStatusChoices {
  /** Idle */
  Idle = 'IDLE',
  /** Offline */
  Offline = 'OFFLINE',
  /** Online */
  Online = 'ONLINE'
}

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar']['output'];
};

export type CreateChannelCategoryMutationVariables = Exact<{
  serverId: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateChannelCategoryMutation = { __typename?: 'Mutation', createChannelCategory?: { __typename?: 'CreateChannelCategory', category?: { __typename?: 'ChannelCategoryType', id: string, name: string, position: number, server: { __typename?: 'ServerType', id: any, name: string } } | null } | null };

export type UpdateChannelCategoryMutationVariables = Exact<{
  categoryId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UpdateChannelCategoryMutation = { __typename?: 'Mutation', updateChannelCategory?: { __typename?: 'UpdateChannelCategory', category?: { __typename?: 'ChannelCategoryType', id: string, name: string, position: number, server: { __typename?: 'ServerType', id: any, name: string } } | null } | null };

export type DeleteChannelCategoryMutationVariables = Exact<{
  categoryId: Scalars['Int']['input'];
}>;


export type DeleteChannelCategoryMutation = { __typename?: 'Mutation', deleteChannelCategory?: { __typename?: 'DeleteChannelCategory', categoryId?: number | null } | null };

export type CreateChannelMutationVariables = Exact<{
  serverId: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
  emoji?: InputMaybe<Scalars['String']['input']>;
  channelType?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateChannelMutation = { __typename?: 'Mutation', createChannel?: { __typename?: 'CreateChannel', channel?: { __typename?: 'ChannelType', id: any, name: string, emoji?: string | null, channelType: ServerchannelsChannelChannelTypeChoices, isPrivate: boolean, topic?: string | null, server: { __typename?: 'ServerType', id: any, name: string }, category?: { __typename?: 'ChannelCategoryType', id: string, name: string } | null } | null } | null };

export type UpdateChannelMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  channelType?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateChannelMutation = { __typename?: 'Mutation', updateChannel?: { __typename?: 'UpdateChannel', channel?: { __typename?: 'ChannelType', id: any, name: string, emoji?: string | null, channelType: ServerchannelsChannelChannelTypeChoices, isPrivate: boolean, topic?: string | null, server: { __typename?: 'ServerType', id: any, name: string }, category?: { __typename?: 'ChannelCategoryType', id: string, name: string } | null } | null } | null };

export type DeleteChannelMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type DeleteChannelMutation = { __typename?: 'Mutation', deleteChannel?: { __typename?: 'DeleteChannel', id?: any | null } | null };

export type CreateChannelPermissionMutationVariables = Exact<{
  channelId: Scalars['UUID']['input'];
  roleId: Scalars['Int']['input'];
  allow: Scalars['String']['input'];
  deny: Scalars['String']['input'];
}>;


export type CreateChannelPermissionMutation = { __typename?: 'Mutation', createChannelPermission?: { __typename?: 'CreateChannelPermission', permission?: { __typename?: 'ChannelPermissionType', id: string, allow: string, deny: string, channel: { __typename?: 'ChannelType', id: any, name: string }, role?: { __typename?: 'ServerRoleType', id: string, name: string } | null } | null } | null };

export type UpdateChannelPermissionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  allow?: InputMaybe<Scalars['String']['input']>;
  deny?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateChannelPermissionMutation = { __typename?: 'Mutation', updateChannelPermission?: { __typename?: 'UpdateChannelPermission', permission?: { __typename?: 'ChannelPermissionType', id: string, allow: string, deny: string, channel: { __typename?: 'ChannelType', id: any, name: string }, role?: { __typename?: 'ServerRoleType', id: string, name: string } | null } | null } | null };

export type DeleteChannelPermissionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteChannelPermissionMutation = { __typename?: 'Mutation', deleteChannelPermission?: { __typename?: 'DeleteChannelPermission', id?: number | null } | null };

export type CreateChannelCategoryMemberMutationVariables = Exact<{
  categoryId: Scalars['Int']['input'];
  channelId: Scalars['UUID']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateChannelCategoryMemberMutation = { __typename?: 'Mutation', createChannelCategoryMember?: { __typename?: 'CreateChannelCategoryMember', member?: { __typename?: 'ChannelCategoryMemberType', id: string, position: number, category: { __typename?: 'ChannelCategoryType', id: string, name: string }, channel: { __typename?: 'ChannelType', id: any, name: string } } | null } | null };

export type UpdateChannelCategoryMemberMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  position?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UpdateChannelCategoryMemberMutation = { __typename?: 'Mutation', updateChannelCategoryMember?: { __typename?: 'UpdateChannelCategoryMember', member?: { __typename?: 'ChannelCategoryMemberType', id: string, position: number, category: { __typename?: 'ChannelCategoryType', id: string, name: string }, channel: { __typename?: 'ChannelType', id: any, name: string } } | null } | null };

export type DeleteChannelCategoryMemberMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteChannelCategoryMemberMutation = { __typename?: 'Mutation', deleteChannelCategoryMember?: { __typename?: 'DeleteChannelCategoryMember', id?: number | null } | null };

export type CreateDocumentMutationVariables = Exact<{
  editorState: Scalars['String']['input'];
  channelId: Scalars['UUID']['input'];
  document?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateDocumentMutation = { __typename?: 'Mutation', createDocument?: { __typename?: 'CreateDocument', document?: { __typename?: 'DocumentType', id: string, editorState?: string | null, document?: string | null, cover?: string | null, isPublished: boolean, createdAt: any, updatedAt: any, channel: { __typename?: 'ChannelType', id: any, name: string } } | null } | null };

export type UpdateDocumentMutationVariables = Exact<{
  channelId: Scalars['UUID']['input'];
  id: Scalars['Int']['input'];
  editorState?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateDocumentMutation = { __typename?: 'Mutation', updateDocument?: { __typename?: 'UpdateDocument', document?: { __typename?: 'DocumentType', id: string, editorState?: string | null, createdAt: any, updatedAt: any, channel: { __typename?: 'ChannelType', id: any, name: string } } | null } | null };

export type DeleteDocumentMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteDocumentMutation = { __typename?: 'Mutation', deleteDocument?: { __typename?: 'DeleteDocument', documentId?: number | null } | null };

export type PublishDocumentMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type PublishDocumentMutation = { __typename?: 'Mutation', publishDocument?: { __typename?: 'PublishDocument', document?: { __typename?: 'DocumentType', id: string, isPublished: boolean } | null } | null };

export type CreateServerEmojiMutationVariables = Exact<{
  serverId: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
}>;


export type CreateServerEmojiMutation = { __typename?: 'Mutation', createServerEmoji?: { __typename?: 'CreateServerEmoji', serverEmoji?: { __typename?: 'ServerEmojiType', id: string, image: string } | null } | null };

export type DeleteServerEmojiMutationVariables = Exact<{
  emojiId: Scalars['ID']['input'];
}>;


export type DeleteServerEmojiMutation = { __typename?: 'Mutation', deleteServerEmoji?: { __typename?: 'DeleteServerEmoji', ok?: boolean | null } | null };

export type CreateChannelEmojiMutationVariables = Exact<{
  channelId: Scalars['UUID']['input'];
  emojiId: Scalars['ID']['input'];
}>;


export type CreateChannelEmojiMutation = { __typename?: 'Mutation', createChannelEmoji?: { __typename?: 'CreateChannelEmoji', channelEmoji?: { __typename?: 'ChannelEmojiType', id: string } | null } | null };

export type DeleteChannelEmojiMutationVariables = Exact<{
  channelId: Scalars['UUID']['input'];
  emojiId: Scalars['ID']['input'];
}>;


export type DeleteChannelEmojiMutation = { __typename?: 'Mutation', deleteChannelEmoji?: { __typename?: 'DeleteChannelEmoji', ok?: boolean | null } | null };

export type ChangeRoleMutationVariables = Exact<{
  memberId: Scalars['UUID']['input'];
  newRoleId: Scalars['Int']['input'];
}>;


export type ChangeRoleMutation = { __typename?: 'Mutation', changeRole?: { __typename?: 'ChangeRoleMutation', member?: { __typename?: 'MemberType', id: string, user?: { __typename?: 'UserType', username?: string | null } | null } | null } | null };

export type KickMemberMutationVariables = Exact<{
  memberId: Scalars['UUID']['input'];
}>;


export type KickMemberMutation = { __typename?: 'Mutation', kickMember?: { __typename?: 'KickMemberMutation', success?: boolean | null } | null };

export type CreateMessageMutationVariables = Exact<{
  channelId: Scalars['UUID']['input'];
  senderId: Scalars['UUID']['input'];
  content: Scalars['String']['input'];
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage?: { __typename?: 'CreateMessage', message?: { __typename?: 'MessageType', id: string, content: string, timestamp: any, channel: { __typename?: 'ChannelType', id: any, name: string }, sender: { __typename?: 'UserType', id: any, username?: string | null } } | null } | null };

export type UpdateMessageMutationVariables = Exact<{
  messageId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
}>;


export type UpdateMessageMutation = { __typename?: 'Mutation', updateMessage?: { __typename?: 'UpdateMessage', message?: { __typename?: 'MessageType', id: string, content: string, editedTimestamp?: any | null, channel: { __typename?: 'ChannelType', id: any, name: string }, sender: { __typename?: 'UserType', id: any, username?: string | null } } | null } | null };

export type DeleteMessageMutationVariables = Exact<{
  messageId: Scalars['Int']['input'];
}>;


export type DeleteMessageMutation = { __typename?: 'Mutation', deleteMessage?: { __typename?: 'DeleteMessage', messageId?: number | null } | null };

export type CreateAttachmentMutationVariables = Exact<{
  messageId: Scalars['Int']['input'];
  file: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
  size: Scalars['Int']['input'];
}>;


export type CreateAttachmentMutation = { __typename?: 'Mutation', createAttachment?: { __typename?: 'CreateAttachment', attachment?: { __typename?: 'AttachmentType', id: string, file: string, name: string, type: string, size: number, message: { __typename?: 'MessageType', id: string } } | null } | null };

export type UpdateAttachmentMutationVariables = Exact<{
  attachmentId: Scalars['Int']['input'];
  file?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UpdateAttachmentMutation = { __typename?: 'Mutation', updateAttachment?: { __typename?: 'UpdateAttachment', attachment?: { __typename?: 'AttachmentType', id: string, file: string, name: string, type: string, size: number, message: { __typename?: 'MessageType', id: string } } | null } | null };

export type DeleteAttachmentMutationVariables = Exact<{
  attachmentId: Scalars['Int']['input'];
}>;


export type DeleteAttachmentMutation = { __typename?: 'Mutation', deleteAttachment?: { __typename?: 'DeleteAttachment', attachmentId?: number | null } | null };

export type CreateDirectMessageMutationVariables = Exact<{
  senderId: Scalars['UUID']['input'];
  recipientId: Scalars['UUID']['input'];
  content: Scalars['String']['input'];
}>;


export type CreateDirectMessageMutation = { __typename?: 'Mutation', createDirectMessage?: { __typename?: 'CreateDirectMessage', directMessage?: { __typename?: 'DirectMessageType', id: string, content: string, timestamp: any, sender: { __typename?: 'UserType', id: any, username?: string | null }, recipient: { __typename?: 'UserType', id: any, username?: string | null } } | null } | null };

export type UpdateDirectMessageMutationVariables = Exact<{
  directMessageId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
}>;


export type UpdateDirectMessageMutation = { __typename?: 'Mutation', updateDirectMessage?: { __typename?: 'UpdateDirectMessage', directMessage?: { __typename?: 'DirectMessageType', id: string, content: string, editedTimestamp?: any | null, sender: { __typename?: 'UserType', id: any, username?: string | null }, recipient: { __typename?: 'UserType', id: any, username?: string | null } } | null } | null };

export type DeleteDirectMessageMutationVariables = Exact<{
  directMessageId: Scalars['Int']['input'];
}>;


export type DeleteDirectMessageMutation = { __typename?: 'Mutation', deleteDirectMessage?: { __typename?: 'DeleteDirectMessage', directMessageId?: number | null } | null };

export type CreateReactionMutationVariables = Exact<{
  messageId: Scalars['Int']['input'];
  userId: Scalars['UUID']['input'];
  emoji: Scalars['String']['input'];
}>;


export type CreateReactionMutation = { __typename?: 'Mutation', createReaction?: { __typename?: 'CreateReaction', reaction?: { __typename?: 'ReactionType', id: string, emoji: string, message: { __typename?: 'MessageType', id: string }, user: { __typename?: 'UserType', id: any, username?: string | null } } | null } | null };

export type DeleteReactionMutationVariables = Exact<{
  reactionId: Scalars['Int']['input'];
}>;


export type DeleteReactionMutation = { __typename?: 'Mutation', deleteReaction?: { __typename?: 'DeleteReaction', reactionId?: number | null } | null };

export type CreateServerMutationVariables = Exact<{
  name: Scalars['String']['input'];
  ownerId: Scalars['UUID']['input'];
  icon?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type CreateServerMutation = { __typename?: 'Mutation', createServer?: { __typename?: 'CreateServer', server?: { __typename?: 'ServerType', id: any, name: string, description: string, icon?: string | null, owner: { __typename?: 'UserType', id: any, username?: string | null } } | null } | null };

export type UpdateServerMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateServerMutation = { __typename?: 'Mutation', updateServer?: { __typename?: 'UpdateServer', server?: { __typename?: 'ServerType', id: any, name: string, description: string, icon?: string | null, owner: { __typename?: 'UserType', id: any, username?: string | null } } | null } | null };

export type DeleteServerMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type DeleteServerMutation = { __typename?: 'Mutation', deleteServer?: { __typename?: 'DeleteServer', success?: boolean | null } | null };

export type CreateServerRoleMutationVariables = Exact<{
  serverId: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
  color?: InputMaybe<Scalars['String']['input']>;
  hoist?: InputMaybe<Scalars['Boolean']['input']>;
  mentionable?: InputMaybe<Scalars['Boolean']['input']>;
  permissionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
}>;


export type CreateServerRoleMutation = { __typename?: 'Mutation', createServerRole?: { __typename?: 'CreateServerRole', serverRole?: { __typename?: 'ServerRoleType', id: string, name: string, color?: string | null, hoist: boolean, mentionable: boolean, permissions: Array<{ __typename?: 'PermissionType', id: string, name: string }> } | null } | null };

export type UpdateServerRoleMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  hoist?: InputMaybe<Scalars['Boolean']['input']>;
  mentionable?: InputMaybe<Scalars['Boolean']['input']>;
  permissionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
}>;


export type UpdateServerRoleMutation = { __typename?: 'Mutation', updateServerRole?: { __typename?: 'UpdateServerRole', serverRole?: { __typename?: 'ServerRoleType', id: string, name: string, color?: string | null, hoist: boolean, mentionable: boolean, permissions: Array<{ __typename?: 'PermissionType', id: string, name: string }> } | null } | null };

export type DeleteServerRoleMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteServerRoleMutation = { __typename?: 'Mutation', deleteServerRole?: { __typename?: 'DeleteServerRole', success?: boolean | null } | null };

export type AddRoleToMemberMutationVariables = Exact<{
  roleId: Scalars['Int']['input'];
  memberId: Scalars['UUID']['input'];
}>;


export type AddRoleToMemberMutation = { __typename?: 'Mutation', addRoleToMember?: { __typename?: 'AddRoleToMember', member?: { __typename?: 'MemberType', id: string, joinedAt: any, user?: { __typename?: 'UserType', id: any, username?: string | null } | null, server?: { __typename?: 'ServerType', id: any, name: string } | null, roles: Array<{ __typename?: 'ServerRoleType', id: string, name: string }> } | null } | null };

export type RemoveRoleFromMemberMutationVariables = Exact<{
  roleId: Scalars['Int']['input'];
  memberId: Scalars['UUID']['input'];
}>;


export type RemoveRoleFromMemberMutation = { __typename?: 'Mutation', removeRoleFromMember?: { __typename?: 'RemoveRoleFromMember', member?: { __typename?: 'MemberType', id: string, joinedAt: any, user?: { __typename?: 'UserType', id: any, username?: string | null } | null, server?: { __typename?: 'ServerType', id: any, name: string } | null, roles: Array<{ __typename?: 'ServerRoleType', id: string, name: string }> } | null } | null };

export type AddMemberToServerMutationVariables = Exact<{
  userId: Scalars['UUID']['input'];
  serverId: Scalars['UUID']['input'];
}>;


export type AddMemberToServerMutation = { __typename?: 'Mutation', addMemberToServer?: { __typename?: 'AddMemberToServer', member?: { __typename?: 'MemberType', id: string, joinedAt: any, user?: { __typename?: 'UserType', id: any, username?: string | null } | null, server?: { __typename?: 'ServerType', id: any, name: string } | null, roles: Array<{ __typename?: 'ServerRoleType', id: string, name: string }> } | null } | null };

export type DeleteMemberFromServerMutationVariables = Exact<{
  memberId: Scalars['UUID']['input'];
}>;


export type DeleteMemberFromServerMutation = { __typename?: 'Mutation', deleteMemberFromServer?: { __typename?: 'DeleteMemberFromServer', success?: boolean | null } | null };

export type CreateInviteMutationVariables = Exact<{
  serverId: Scalars['UUID']['input'];
  inviterId: Scalars['UUID']['input'];
  usesLeft?: InputMaybe<Scalars['Int']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type CreateInviteMutation = { __typename?: 'Mutation', createInvite?: { __typename?: 'CreateInvite', invite?: { __typename?: 'InviteType', id: string, code: any, usesLeft: number, createdAt: any, expiresAt?: any | null, server: { __typename?: 'ServerType', id: any, name: string }, inviter: { __typename?: 'UserType', id: any, username?: string | null } } | null } | null };

export type UseInviteMutationVariables = Exact<{
  code: Scalars['UUID']['input'];
}>;


export type UseInviteMutation = { __typename?: 'Mutation', useInvite?: { __typename?: 'UseInvite', success?: boolean | null } | null };

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUser', user?: { __typename?: 'UserType', id: any, username?: string | null, email: string, avatar?: string | null, discriminator: string, role: UsersUserRoleChoices } | null } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
  discriminator?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'UpdateUser', user?: { __typename?: 'UserType', id: any, username?: string | null, email: string, avatar?: string | null, discriminator: string, role: UsersUserRoleChoices } | null } | null };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'DeleteUser', user?: { __typename?: 'UserType', id: any, username?: string | null, email: string, avatar?: string | null, discriminator: string, role: UsersUserRoleChoices } | null } | null };

export type GetChannelCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChannelCategoriesQuery = { __typename?: 'Query', channelCategories?: Array<{ __typename?: 'ChannelCategoryType', id: string, name: string, position: number, server: { __typename?: 'ServerType', id: any, name: string } } | null> | null };

export type ChannelsByServerQueryVariables = Exact<{
  serverId: Scalars['UUID']['input'];
}>;


export type ChannelsByServerQuery = { __typename?: 'Query', channelsByServer?: Array<{ __typename?: 'ChannelType', id: any, name: string, emoji?: string | null, channelType: ServerchannelsChannelChannelTypeChoices, isPrivate: boolean, topic?: string | null, server: { __typename?: 'ServerType', id: any, name: string, icon?: string | null, members: Array<{ __typename?: 'MemberType', id: string, user?: { __typename?: 'UserType', id: any, username?: string | null } | null }>, roles: Array<{ __typename?: 'ServerRoleType', id: string, name: string, permissions: Array<{ __typename?: 'PermissionType', id: string, name: string, codename: any }> }> }, category?: { __typename?: 'ChannelCategoryType', id: string, name: string } | null } | null> | null };

export type GetChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChannelsQuery = { __typename?: 'Query', channels?: Array<{ __typename?: 'ChannelType', id: any, name: string, emoji?: string | null, channelType: ServerchannelsChannelChannelTypeChoices, isPrivate: boolean, topic?: string | null, server: { __typename?: 'ServerType', id: any, name: string }, category?: { __typename?: 'ChannelCategoryType', id: string, name: string } | null } | null> | null };

export type GetChannelQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetChannelQuery = { __typename?: 'Query', channel?: { __typename?: 'ChannelType', id: any, name: string, emoji?: string | null, channelType: ServerchannelsChannelChannelTypeChoices, isPrivate: boolean, topic?: string | null, server: { __typename?: 'ServerType', id: any, name: string }, category?: { __typename?: 'ChannelCategoryType', id: string, name: string } | null } | null };

export type GetChannelPermissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChannelPermissionsQuery = { __typename?: 'Query', channelPermissions?: Array<{ __typename?: 'ChannelPermissionType', id: string, allow: string, deny: string, channel: { __typename?: 'ChannelType', id: any, name: string }, role?: { __typename?: 'ServerRoleType', id: string, name: string } | null } | null> | null };

export type GetChannelPermissionByChannelQueryVariables = Exact<{
  channel_id: Scalars['UUID']['input'];
}>;


export type GetChannelPermissionByChannelQuery = { __typename?: 'Query', channelPermissionByChannel?: Array<{ __typename?: 'ChannelPermissionType', id: string, allow: string, deny: string, channel: { __typename?: 'ChannelType', id: any, name: string }, role?: { __typename?: 'ServerRoleType', id: string, name: string } | null } | null> | null };

export type GetChannelPermissionByRoleQueryVariables = Exact<{
  roleId: Scalars['Int']['input'];
}>;


export type GetChannelPermissionByRoleQuery = { __typename?: 'Query', channelPermissionByRole?: Array<{ __typename?: 'ChannelPermissionType', id: string, allow: string, deny: string, channel: { __typename?: 'ChannelType', id: any, name: string }, role?: { __typename?: 'ServerRoleType', id: string, name: string } | null } | null> | null };

export type GetCategoryMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoryMembersQuery = { __typename?: 'Query', categoryMembers?: Array<{ __typename?: 'ChannelCategoryMemberType', id: string, position: number, category: { __typename?: 'ChannelCategoryType', id: string, name: string }, channel: { __typename?: 'ChannelType', id: any, name: string } } | null> | null };

export type GetCategoryMembersByCategoryQueryVariables = Exact<{
  categoryId: Scalars['Int']['input'];
}>;


export type GetCategoryMembersByCategoryQuery = { __typename?: 'Query', categoryMembersByCategory?: Array<{ __typename?: 'ChannelCategoryMemberType', id: string, position: number, category: { __typename?: 'ChannelCategoryType', id: string, name: string }, channel: { __typename?: 'ChannelType', id: any, name: string } } | null> | null };

export type GetCategoryMembersByChannelQueryVariables = Exact<{
  channelId: Scalars['UUID']['input'];
}>;


export type GetCategoryMembersByChannelQuery = { __typename?: 'Query', categoryMembersByChannel?: Array<{ __typename?: 'ChannelCategoryMemberType', id: string, position: number, category: { __typename?: 'ChannelCategoryType', id: string, name: string }, channel: { __typename?: 'ChannelType', id: any, name: string } } | null> | null };

export type GetChannelByNameAndServerQueryVariables = Exact<{
  name: Scalars['String']['input'];
  serverId: Scalars['UUID']['input'];
}>;


export type GetChannelByNameAndServerQuery = { __typename?: 'Query', channelByNameAndServer?: { __typename?: 'ChannelType', id: any, name: string, emoji?: string | null, channelType: ServerchannelsChannelChannelTypeChoices, isPrivate: boolean, topic?: string | null, server: { __typename?: 'ServerType', id: any, name: string }, category?: { __typename?: 'ChannelCategoryType', id: string, name: string } | null } | null };

export type GetDocumentQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetDocumentQuery = { __typename?: 'Query', document?: { __typename?: 'DocumentType', id: string, editorState?: string | null, document?: string | null, cover?: string | null, isPublished: boolean, createdAt: any, updatedAt: any, channel: { __typename?: 'ChannelType', id: any, name: string } } | null };

export type GetDocumentByChannelQueryVariables = Exact<{
  channelId: Scalars['UUID']['input'];
}>;


export type GetDocumentByChannelQuery = { __typename?: 'Query', documentByChannel?: Array<{ __typename?: 'DocumentType', id: string, editorState?: string | null, document?: string | null, cover?: string | null, isPublished: boolean, createdAt: any, updatedAt: any, channel: { __typename?: 'ChannelType', id: any, name: string } } | null> | null };

export type GetAllDocumentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDocumentsQuery = { __typename?: 'Query', allDocuments?: Array<{ __typename?: 'DocumentType', id: string, editorState?: string | null, document?: string | null, cover?: string | null, isPublished: boolean, createdAt: any, updatedAt: any, channel: { __typename?: 'ChannelType', id: any, name: string } } | null> | null };

export type GetDrawQueryVariables = Exact<{
  channelId: Scalars['UUID']['input'];
}>;


export type GetDrawQuery = { __typename?: 'Query', drawsByChannel?: Array<{ __typename?: 'DrawType', id: string, whiteboard?: string | null, isPublished: boolean, createdAt: any, updatedAt: any, channel: { __typename?: 'ChannelType', id: any, name: string } } | null> | null };

export type ServerEmojiFieldsFragment = { __typename?: 'ServerEmojiType', id: string, name: string, isAnimated: boolean, image: string } & { ' $fragmentName'?: 'ServerEmojiFieldsFragment' };

export type ChannelEmojiFieldsFragment = { __typename?: 'ChannelEmojiType', id: string, emoji: { __typename?: 'ServerEmojiType', name: string }, channel: { __typename?: 'ChannelType', id: any, name: string } } & { ' $fragmentName'?: 'ChannelEmojiFieldsFragment' };

export type GetMessagesByChannelQueryVariables = Exact<{
  channelId: Scalars['UUID']['input'];
}>;


export type GetMessagesByChannelQuery = { __typename?: 'Query', messagesByChannel?: Array<{ __typename?: 'MessageType', id: string, content: string, deleted: boolean, timestamp: any, editedTimestamp?: any | null, attachments: Array<{ __typename?: 'AttachmentType', id: string, name: string, message: { __typename?: 'MessageType', id: string, content: string } }>, channel: { __typename?: 'ChannelType', id: any, name: string }, sender: { __typename?: 'UserType', role: UsersUserRoleChoices, id: any, email: string, firstName: string, lastName: string, avatar?: string | null } } | null> | null };

export type GetAttachmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAttachmentsQuery = { __typename?: 'Query', attachments?: Array<{ __typename?: 'AttachmentType', id: string, file: string, name: string, type: string, size: number, message: { __typename?: 'MessageType', id: string } } | null> | null };

export type GetDirectMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDirectMessagesQuery = { __typename?: 'Query', directMessages?: Array<{ __typename?: 'DirectMessageType', id: string, content: string, timestamp: any, sender: { __typename?: 'UserType', id: any, username?: string | null }, recipient: { __typename?: 'UserType', id: any, username?: string | null } } | null> | null };

export type GetReactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReactionsQuery = { __typename?: 'Query', reactions?: Array<{ __typename?: 'ReactionType', id: string, emoji: string, message: { __typename?: 'MessageType', id: string }, user: { __typename?: 'UserType', id: any, username?: string | null } } | null> | null };

export type GetServerQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type GetServerQuery = { __typename?: 'Query', server?: { __typename?: 'ServerType', id: any, name: string, icon?: string | null, owner: { __typename?: 'UserType', id: any, username?: string | null }, invites: Array<{ __typename?: 'InviteType', id: string, code: any }>, members: Array<{ __typename?: 'MemberType', id: string, user?: { __typename?: 'UserType', id: any, username?: string | null, avatar?: string | null, discriminator: string } | null, roles: Array<{ __typename?: 'ServerRoleType', id: string, name: string, color?: string | null, permissions: Array<{ __typename?: 'PermissionType', id: string, name: string }> }> }>, channelSet: Array<{ __typename?: 'ChannelType', id: any, name: string, channelType: ServerchannelsChannelChannelTypeChoices }>, categories: Array<{ __typename?: 'ChannelCategoryType', id: string, name: string }> } | null };

export type GetAllServersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllServersQuery = { __typename?: 'Query', allServers?: Array<{ __typename?: 'ServerType', id: any, name: string, description: string, icon?: string | null, owner: { __typename?: 'UserType', id: any, username?: string | null } } | null> | null };

export type GetPermissionQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetPermissionQuery = { __typename?: 'Query', permission?: { __typename?: 'PermissionType', id: string, name: string, codename: any } | null };

export type GetAllPermissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPermissionsQuery = { __typename?: 'Query', allPermissions?: Array<{ __typename?: 'PermissionType', id: string, name: string, codename: any } | null> | null };

export type GetServerRoleQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetServerRoleQuery = { __typename?: 'Query', serverRole?: { __typename?: 'ServerRoleType', id: string, name: string, color?: string | null, hoist: boolean, mentionable: boolean, permissions: Array<{ __typename?: 'PermissionType', id: string, name: string }> } | null };

export type GetAllServerRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllServerRolesQuery = { __typename?: 'Query', allServerRoles?: Array<{ __typename?: 'ServerRoleType', id: string, name: string, color?: string | null, hoist: boolean, mentionable: boolean, permissions: Array<{ __typename?: 'PermissionType', id: string, name: string }> } | null> | null };

export type GetMemberQueryVariables = Exact<{
  serverId: Scalars['UUID']['input'];
  userId: Scalars['UUID']['input'];
}>;


export type GetMemberQuery = { __typename?: 'Query', member?: { __typename?: 'MemberType', id: string, user?: { __typename?: 'UserType', id: any, username?: string | null, avatar?: string | null } | null, server?: { __typename?: 'ServerType', id: any, name: string } | null, roles: Array<{ __typename?: 'ServerRoleType', id: string, name: string, permissions: Array<{ __typename?: 'PermissionType', id: string, name: string, codename: any }> }> } | null };

export type GetAllMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMembersQuery = { __typename?: 'Query', allMembers?: Array<{ __typename?: 'MemberType', id: string, joinedAt: any, user?: { __typename?: 'UserType', id: any, username?: string | null } | null, server?: { __typename?: 'ServerType', id: any, name: string } | null, roles: Array<{ __typename?: 'ServerRoleType', id: string, name: string }> } | null> | null };

export type GetInviteQueryVariables = Exact<{
  code: Scalars['UUID']['input'];
}>;


export type GetInviteQuery = { __typename?: 'Query', invite?: { __typename?: 'InviteType', id: string, code: any, usesLeft: number, createdAt: any, expiresAt?: any | null, server: { __typename?: 'ServerType', id: any, name: string }, inviter: { __typename?: 'UserType', id: any, username?: string | null } } | null };

export type GetAllInvitesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllInvitesQuery = { __typename?: 'Query', allInvites?: Array<{ __typename?: 'InviteType', id: string, code: any, usesLeft: number, createdAt: any, expiresAt?: any | null, server: { __typename?: 'ServerType', id: any, name: string }, inviter: { __typename?: 'UserType', id: any, username?: string | null } } | null> | null };

export type GetUserServersQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
}>;


export type GetUserServersQuery = { __typename?: 'Query', userServers?: Array<{ __typename?: 'ServerType', id: any, name: string, description: string, icon?: string | null, owner: { __typename?: 'UserType', id: any, username?: string | null } } | null> | null };

export type GetRolesByMemberAndServerQueryVariables = Exact<{
  userId: Scalars['UUID']['input'];
  serverId: Scalars['UUID']['input'];
}>;


export type GetRolesByMemberAndServerQuery = { __typename?: 'Query', rolesByMemberAndServer?: Array<{ __typename?: 'ServerRoleType', id: string, name: string, color?: string | null, hoist: boolean, mentionable: boolean } | null> | null };

export const ServerEmojiFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServerEmojiFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServerEmojiType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isAnimated"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]} as unknown as DocumentNode<ServerEmojiFieldsFragment, unknown>;
export const ChannelEmojiFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChannelEmojiFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ChannelEmojiType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ChannelEmojiFieldsFragment, unknown>;
export const CreateChannelCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChannelCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"position"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChannelCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"serverId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"position"},"value":{"kind":"Variable","name":{"kind":"Name","value":"position"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]}}]} as unknown as DocumentNode<CreateChannelCategoryMutation, CreateChannelCategoryMutationVariables>;
export const UpdateChannelCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateChannelCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"position"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateChannelCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"position"},"value":{"kind":"Variable","name":{"kind":"Name","value":"position"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateChannelCategoryMutation, UpdateChannelCategoryMutationVariables>;
export const DeleteChannelCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteChannelCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteChannelCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryId"}}]}}]}}]} as unknown as DocumentNode<DeleteChannelCategoryMutation, DeleteChannelCategoryMutationVariables>;
export const CreateChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"emoji"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isPrivate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"topic"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"serverId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"emoji"},"value":{"kind":"Variable","name":{"kind":"Name","value":"emoji"}}},{"kind":"Argument","name":{"kind":"Name","value":"channelType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelType"}}},{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"isPrivate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isPrivate"}}},{"kind":"Argument","name":{"kind":"Name","value":"topic"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topic"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"channelType"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}}]}}]}}]}}]} as unknown as DocumentNode<CreateChannelMutation, CreateChannelMutationVariables>;
export const UpdateChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"emoji"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isPrivate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"topic"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"emoji"},"value":{"kind":"Variable","name":{"kind":"Name","value":"emoji"}}},{"kind":"Argument","name":{"kind":"Name","value":"channelType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelType"}}},{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"isPrivate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isPrivate"}}},{"kind":"Argument","name":{"kind":"Name","value":"topic"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topic"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"channelType"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateChannelMutation, UpdateChannelMutationVariables>;
export const DeleteChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteChannelMutation, DeleteChannelMutationVariables>;
export const CreateChannelPermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChannelPermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"allow"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deny"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChannelPermission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}},{"kind":"Argument","name":{"kind":"Name","value":"roleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}},{"kind":"Argument","name":{"kind":"Name","value":"allow"},"value":{"kind":"Variable","name":{"kind":"Name","value":"allow"}}},{"kind":"Argument","name":{"kind":"Name","value":"deny"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deny"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"allow"}},{"kind":"Field","name":{"kind":"Name","value":"deny"}}]}}]}}]}}]} as unknown as DocumentNode<CreateChannelPermissionMutation, CreateChannelPermissionMutationVariables>;
export const UpdateChannelPermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateChannelPermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"allow"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deny"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateChannelPermission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"allow"},"value":{"kind":"Variable","name":{"kind":"Name","value":"allow"}}},{"kind":"Argument","name":{"kind":"Name","value":"deny"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deny"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"allow"}},{"kind":"Field","name":{"kind":"Name","value":"deny"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateChannelPermissionMutation, UpdateChannelPermissionMutationVariables>;
export const DeleteChannelPermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteChannelPermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteChannelPermission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteChannelPermissionMutation, DeleteChannelPermissionMutationVariables>;
export const CreateChannelCategoryMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChannelCategoryMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"position"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChannelCategoryMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}},{"kind":"Argument","name":{"kind":"Name","value":"position"},"value":{"kind":"Variable","name":{"kind":"Name","value":"position"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]}}]} as unknown as DocumentNode<CreateChannelCategoryMemberMutation, CreateChannelCategoryMemberMutationVariables>;
export const UpdateChannelCategoryMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateChannelCategoryMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"position"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateChannelCategoryMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"position"},"value":{"kind":"Variable","name":{"kind":"Name","value":"position"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateChannelCategoryMemberMutation, UpdateChannelCategoryMemberMutationVariables>;
export const DeleteChannelCategoryMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteChannelCategoryMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteChannelCategoryMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteChannelCategoryMemberMutation, DeleteChannelCategoryMemberMutationVariables>;
export const CreateDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editorState"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"document"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cover"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDocument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editorState"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editorState"}}},{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}},{"kind":"Argument","name":{"kind":"Name","value":"document"},"value":{"kind":"Variable","name":{"kind":"Name","value":"document"}}},{"kind":"Argument","name":{"kind":"Name","value":"cover"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cover"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"editorState"}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<CreateDocumentMutation, CreateDocumentMutationVariables>;
export const UpdateDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editorState"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDocument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}},{"kind":"Argument","name":{"kind":"Name","value":"editorState"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editorState"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"editorState"}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateDocumentMutation, UpdateDocumentMutationVariables>;
export const DeleteDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteDocument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}}]}}]}}]} as unknown as DocumentNode<DeleteDocumentMutation, DeleteDocumentMutationVariables>;
export const PublishDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PublishDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishDocument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}}]}}]}}]}}]} as unknown as DocumentNode<PublishDocumentMutation, PublishDocumentMutationVariables>;
export const CreateServerEmojiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateServerEmoji"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createServerEmoji"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"serverId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serverEmoji"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<CreateServerEmojiMutation, CreateServerEmojiMutationVariables>;
export const DeleteServerEmojiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteServerEmoji"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"emojiId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteServerEmoji"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"emojiId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"emojiId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<DeleteServerEmojiMutation, DeleteServerEmojiMutationVariables>;
export const CreateChannelEmojiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChannelEmoji"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"emojiId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChannelEmoji"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}},{"kind":"Argument","name":{"kind":"Name","value":"emojiId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"emojiId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channelEmoji"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateChannelEmojiMutation, CreateChannelEmojiMutationVariables>;
export const DeleteChannelEmojiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteChannelEmoji"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"emojiId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteChannelEmoji"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}},{"kind":"Argument","name":{"kind":"Name","value":"emojiId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"emojiId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<DeleteChannelEmojiMutation, DeleteChannelEmojiMutationVariables>;
export const ChangeRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newRoleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"memberId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}}},{"kind":"Argument","name":{"kind":"Name","value":"newRoleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newRoleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ChangeRoleMutation, ChangeRoleMutationVariables>;
export const KickMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"KickMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"kickMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"memberId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<KickMemberMutation, KickMemberMutationVariables>;
export const CreateMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"senderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}},{"kind":"Argument","name":{"kind":"Name","value":"senderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"senderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]}}]} as unknown as DocumentNode<CreateMessageMutation, CreateMessageMutationVariables>;
export const UpdateMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"messageId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"editedTimestamp"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateMessageMutation, UpdateMessageMutationVariables>;
export const DeleteMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"messageId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messageId"}}]}}]}}]} as unknown as DocumentNode<DeleteMessageMutation, DeleteMessageMutationVariables>;
export const CreateAttachmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAttachment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"size"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAttachment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"messageId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}}},{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"size"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]}}]} as unknown as DocumentNode<CreateAttachmentMutation, CreateAttachmentMutationVariables>;
export const UpdateAttachmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAttachment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attachmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"size"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAttachment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attachmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attachmentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"size"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateAttachmentMutation, UpdateAttachmentMutationVariables>;
export const DeleteAttachmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAttachment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attachmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAttachment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attachmentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attachmentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachmentId"}}]}}]}}]} as unknown as DocumentNode<DeleteAttachmentMutation, DeleteAttachmentMutationVariables>;
export const CreateDirectMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateDirectMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"senderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recipientId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDirectMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"senderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"senderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"recipientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recipientId"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directMessage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]}}]} as unknown as DocumentNode<CreateDirectMessageMutation, CreateDirectMessageMutationVariables>;
export const UpdateDirectMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDirectMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directMessageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDirectMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"directMessageId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directMessageId"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directMessage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"editedTimestamp"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateDirectMessageMutation, UpdateDirectMessageMutationVariables>;
export const DeleteDirectMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteDirectMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directMessageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteDirectMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"directMessageId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directMessageId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directMessageId"}}]}}]}}]} as unknown as DocumentNode<DeleteDirectMessageMutation, DeleteDirectMessageMutationVariables>;
export const CreateReactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateReaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"emoji"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createReaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"messageId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"messageId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"emoji"},"value":{"kind":"Variable","name":{"kind":"Name","value":"emoji"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}}]}}]} as unknown as DocumentNode<CreateReactionMutation, CreateReactionMutationVariables>;
export const DeleteReactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteReaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reactionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteReaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reactionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reactionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reactionId"}}]}}]}}]} as unknown as DocumentNode<DeleteReactionMutation, DeleteReactionMutationVariables>;
export const CreateServerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateServer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ownerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"icon"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createServer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"ownerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"icon"},"value":{"kind":"Variable","name":{"kind":"Name","value":"icon"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]}}]}}]} as unknown as DocumentNode<CreateServerMutation, CreateServerMutationVariables>;
export const UpdateServerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateServer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateServer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateServerMutation, UpdateServerMutationVariables>;
export const DeleteServerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteServer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteServer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<DeleteServerMutation, DeleteServerMutationVariables>;
export const CreateServerRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateServerRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hoist"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mentionable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"permissionIds"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createServerRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"serverId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"color"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}},{"kind":"Argument","name":{"kind":"Name","value":"hoist"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hoist"}}},{"kind":"Argument","name":{"kind":"Name","value":"mentionable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mentionable"}}},{"kind":"Argument","name":{"kind":"Name","value":"permissionIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"permissionIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serverRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"hoist"}},{"kind":"Field","name":{"kind":"Name","value":"mentionable"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateServerRoleMutation, CreateServerRoleMutationVariables>;
export const UpdateServerRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateServerRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hoist"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mentionable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"permissionIds"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateServerRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"color"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}},{"kind":"Argument","name":{"kind":"Name","value":"hoist"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hoist"}}},{"kind":"Argument","name":{"kind":"Name","value":"mentionable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mentionable"}}},{"kind":"Argument","name":{"kind":"Name","value":"permissionIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"permissionIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serverRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"hoist"}},{"kind":"Field","name":{"kind":"Name","value":"mentionable"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateServerRoleMutation, UpdateServerRoleMutationVariables>;
export const DeleteServerRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteServerRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteServerRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<DeleteServerRoleMutation, DeleteServerRoleMutationVariables>;
export const AddRoleToMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddRoleToMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addRoleToMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"roleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}},{"kind":"Argument","name":{"kind":"Name","value":"memberId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"joinedAt"}}]}}]}}]}}]} as unknown as DocumentNode<AddRoleToMemberMutation, AddRoleToMemberMutationVariables>;
export const RemoveRoleFromMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveRoleFromMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeRoleFromMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"roleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}},{"kind":"Argument","name":{"kind":"Name","value":"memberId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"joinedAt"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveRoleFromMemberMutation, RemoveRoleFromMemberMutationVariables>;
export const AddMemberToServerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddMemberToServer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addMemberToServer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"serverId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"joinedAt"}}]}}]}}]}}]} as unknown as DocumentNode<AddMemberToServerMutation, AddMemberToServerMutationVariables>;
export const DeleteMemberFromServerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteMemberFromServer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMemberFromServer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"memberId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<DeleteMemberFromServerMutation, DeleteMemberFromServerMutationVariables>;
export const CreateInviteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateInvite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inviterId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"usesLeft"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expiresAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createInvite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"serverId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}}},{"kind":"Argument","name":{"kind":"Name","value":"inviterId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inviterId"}}},{"kind":"Argument","name":{"kind":"Name","value":"usesLeft"},"value":{"kind":"Variable","name":{"kind":"Name","value":"usesLeft"}}},{"kind":"Argument","name":{"kind":"Name","value":"expiresAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expiresAt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inviter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"usesLeft"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}}]}}]}}]}}]} as unknown as DocumentNode<CreateInviteMutation, CreateInviteMutationVariables>;
export const UseInviteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UseInvite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"useInvite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<UseInviteMutation, UseInviteMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"discriminator"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"discriminator"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"emailVerified"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"discriminator"},"value":{"kind":"Variable","name":{"kind":"Name","value":"discriminator"}}},{"kind":"Argument","name":{"kind":"Name","value":"avatar"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}}},{"kind":"Argument","name":{"kind":"Name","value":"emailVerified"},"value":{"kind":"Variable","name":{"kind":"Name","value":"emailVerified"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"discriminator"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"discriminator"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const GetChannelCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChannelCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channelCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<GetChannelCategoriesQuery, GetChannelCategoriesQueryVariables>;
export const ChannelsByServerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ChannelsByServer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channelsByServer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"serverId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"codename"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"channelType"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ChannelsByServerQuery, ChannelsByServerQueryVariables>;
export const GetChannelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChannels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"channelType"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}}]}}]}}]} as unknown as DocumentNode<GetChannelsQuery, GetChannelsQueryVariables>;
export const GetChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"channelType"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}}]}}]}}]} as unknown as DocumentNode<GetChannelQuery, GetChannelQueryVariables>;
export const GetChannelPermissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChannelPermissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channelPermissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"allow"}},{"kind":"Field","name":{"kind":"Name","value":"deny"}}]}}]}}]} as unknown as DocumentNode<GetChannelPermissionsQuery, GetChannelPermissionsQueryVariables>;
export const GetChannelPermissionByChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChannelPermissionByChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channel_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channelPermissionByChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channel_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"allow"}},{"kind":"Field","name":{"kind":"Name","value":"deny"}}]}}]}}]} as unknown as DocumentNode<GetChannelPermissionByChannelQuery, GetChannelPermissionByChannelQueryVariables>;
export const GetChannelPermissionByRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChannelPermissionByRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channelPermissionByRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"roleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"allow"}},{"kind":"Field","name":{"kind":"Name","value":"deny"}}]}}]}}]} as unknown as DocumentNode<GetChannelPermissionByRoleQuery, GetChannelPermissionByRoleQueryVariables>;
export const GetCategoryMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategoryMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<GetCategoryMembersQuery, GetCategoryMembersQueryVariables>;
export const GetCategoryMembersByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategoryMembersByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryMembersByCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<GetCategoryMembersByCategoryQuery, GetCategoryMembersByCategoryQueryVariables>;
export const GetCategoryMembersByChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategoryMembersByChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryMembersByChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<GetCategoryMembersByChannelQuery, GetCategoryMembersByChannelQueryVariables>;
export const GetChannelByNameAndServerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChannelByNameAndServer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channelByNameAndServer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"serverId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}},{"kind":"Field","name":{"kind":"Name","value":"channelType"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"topic"}}]}}]}}]} as unknown as DocumentNode<GetChannelByNameAndServerQuery, GetChannelByNameAndServerQueryVariables>;
export const GetDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"editorState"}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetDocumentQuery, GetDocumentQueryVariables>;
export const GetDocumentByChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDocumentByChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentByChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"editorState"}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetDocumentByChannelQuery, GetDocumentByChannelQueryVariables>;
export const GetAllDocumentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllDocuments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allDocuments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"editorState"}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetAllDocumentsQuery, GetAllDocumentsQueryVariables>;
export const GetDrawDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDraw"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"drawsByChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"whiteboard"}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetDrawQuery, GetDrawQueryVariables>;
export const GetMessagesByChannelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMessagesByChannel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messagesByChannel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"editedTimestamp"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"message"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"channel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<GetMessagesByChannelQuery, GetMessagesByChannelQueryVariables>;
export const GetAttachmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAttachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]} as unknown as DocumentNode<GetAttachmentsQuery, GetAttachmentsQueryVariables>;
export const GetDirectMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDirectMessages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"directMessages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]} as unknown as DocumentNode<GetDirectMessagesQuery, GetDirectMessagesQueryVariables>;
export const GetReactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetReactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"emoji"}}]}}]}}]} as unknown as DocumentNode<GetReactionsQuery, GetReactionsQueryVariables>;
export const GetServerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"server"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"discriminator"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"channelSet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"channelType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetServerQuery, GetServerQueryVariables>;
export const GetAllServersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllServers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allServers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]}}]} as unknown as DocumentNode<GetAllServersQuery, GetAllServersQueryVariables>;
export const GetPermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"codename"}}]}}]}}]} as unknown as DocumentNode<GetPermissionQuery, GetPermissionQueryVariables>;
export const GetAllPermissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllPermissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPermissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"codename"}}]}}]}}]} as unknown as DocumentNode<GetAllPermissionsQuery, GetAllPermissionsQueryVariables>;
export const GetServerRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServerRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serverRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"hoist"}},{"kind":"Field","name":{"kind":"Name","value":"mentionable"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetServerRoleQuery, GetServerRoleQueryVariables>;
export const GetAllServerRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllServerRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allServerRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"hoist"}},{"kind":"Field","name":{"kind":"Name","value":"mentionable"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllServerRolesQuery, GetAllServerRolesQueryVariables>;
export const GetMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"member"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"serverId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"codename"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMemberQuery, GetMemberQueryVariables>;
export const GetAllMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"joinedAt"}}]}}]}}]} as unknown as DocumentNode<GetAllMembersQuery, GetAllMembersQueryVariables>;
export const GetInviteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInvite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inviter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"usesLeft"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}}]}}]}}]} as unknown as DocumentNode<GetInviteQuery, GetInviteQueryVariables>;
export const GetAllInvitesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllInvites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allInvites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"server"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"inviter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"usesLeft"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}}]}}]}}]} as unknown as DocumentNode<GetAllInvitesQuery, GetAllInvitesQueryVariables>;
export const GetUserServersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserServers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userServers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]}}]} as unknown as DocumentNode<GetUserServersQuery, GetUserServersQueryVariables>;
export const GetRolesByMemberAndServerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRolesByMemberAndServer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rolesByMemberAndServer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"serverId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serverId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"hoist"}},{"kind":"Field","name":{"kind":"Name","value":"mentionable"}}]}}]}}]} as unknown as DocumentNode<GetRolesByMemberAndServerQuery, GetRolesByMemberAndServerQueryVariables>;