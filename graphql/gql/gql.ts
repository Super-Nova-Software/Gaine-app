/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateChannelCategory($serverId: UUID!, $name: String!, $position: Int) {\n    createChannelCategory(serverId: $serverId, name: $name, position: $position) {\n      category {\n        id\n        server {\n          id\n          name\n        }\n        name\n        position\n      }\n    }\n  }\n": types.CreateChannelCategoryDocument,
    "\n  mutation UpdateChannelCategory($categoryId: Int!, $name: String!, $position: Int) {\n    updateChannelCategory(categoryId: $categoryId, name: $name, position: $position) {\n      category {\n        id\n        server {\n          id\n          name\n        }\n        name\n        position\n      }\n    }\n  }\n": types.UpdateChannelCategoryDocument,
    "\n  mutation DeleteChannelCategory($categoryId: Int!) {\n    deleteChannelCategory(categoryId: $categoryId) {\n      categoryId\n    }\n  }\n": types.DeleteChannelCategoryDocument,
    "\n  mutation CreateChannel(\n    $serverId: UUID!\n    $name: String!\n    $emoji: String\n    $channelType: String\n    $categoryId: Int\n    $isPrivate: Boolean\n    $topic: String\n  ) {\n    createChannel(\n      serverId: $serverId\n      name: $name\n      emoji: $emoji\n      channelType: $channelType\n      categoryId: $categoryId\n      isPrivate: $isPrivate\n      topic: $topic\n    ) {\n      channel {\n        id\n        name\n        server {\n          id\n          name\n        }\n        emoji\n        channelType\n        category {\n          id\n          name\n        }\n        isPrivate\n        topic\n      }\n    }\n  }\n": types.CreateChannelDocument,
    "\n  mutation UpdateChannel(\n    $id: UUID!\n    $name: String\n    $emoji: String\n    $channelType: String\n    $categoryId: Int\n    $isPrivate: Boolean\n    $topic: String\n  ) {\n    updateChannel(\n      id: $id\n      name: $name\n      emoji: $emoji\n      channelType: $channelType\n      categoryId: $categoryId\n      isPrivate: $isPrivate\n      topic: $topic\n    ) {\n      channel {\n        id\n        name\n        server {\n          id\n          name\n        }\n        emoji\n        channelType\n        category {\n          id\n          name\n        }\n        isPrivate\n        topic\n      }\n    }\n  }\n": types.UpdateChannelDocument,
    "\n  mutation DeleteChannel($id: UUID!) {\n    deleteChannel(id: $id) {\n      id\n    }\n  }\n": types.DeleteChannelDocument,
    "\n  mutation CreateChannelPermission($channelId: UUID!, $roleId: Int!, $allow: String!, $deny: String!) {\n    createChannelPermission(channelId: $channelId, roleId: $roleId, allow: $allow, deny: $deny) {\n      permission {\n        id\n        channel {\n          id\n          name\n        }\n        role {\n          id\n          name\n        }\n        allow\n        deny\n      }\n    }\n  }\n": types.CreateChannelPermissionDocument,
    "\n  mutation UpdateChannelPermission($id: Int!, $allow: String, $deny: String) {\n    updateChannelPermission(id: $id, allow: $allow, deny: $deny) {\n      permission {\n        id\n        channel {\n          id\n          name\n        }\n        role {\n          id\n          name\n        }\n        allow\n        deny\n      }\n    }\n  }\n": types.UpdateChannelPermissionDocument,
    "\n  mutation DeleteChannelPermission($id: Int!) {\n    deleteChannelPermission(id: $id) {\n      id\n    }\n  }\n": types.DeleteChannelPermissionDocument,
    "\n  mutation CreateChannelCategoryMember($categoryId: Int!, $channelId: UUID!, $position: Int) {\n    createChannelCategoryMember(categoryId: $categoryId, channelId: $channelId, position: $position) {\n      member {\n        id\n        category {\n          id\n          name\n        }\n        channel {\n          id\n          name\n        }\n        position\n      }\n    }\n  }\n": types.CreateChannelCategoryMemberDocument,
    "\n  mutation UpdateChannelCategoryMember($id: Int!, $position: Int) {\n    updateChannelCategoryMember(id: $id, position: $position) {\n      member {\n        id\n        category {\n          id\n          name\n        }\n        channel {\n          id\n          name\n        }\n        position\n      }\n    }\n  }\n": types.UpdateChannelCategoryMemberDocument,
    "\n  mutation DeleteChannelCategoryMember($id: Int!) {\n    deleteChannelCategoryMember(id: $id) {\n      id\n    }\n  }\n": types.DeleteChannelCategoryMemberDocument,
    "\n  mutation CreateDocument(\n    $editorState: String!,\n    $channelId: UUID!,\n    $document: String,\n    $cover: String\n  ) {\n    createDocument(\n      editorState: $editorState,\n      channelId: $channelId,\n      document: $document,\n      cover: $cover\n    ) {\n      document {\n        id\n        editorState\n        channel {\n          id\n          name\n        }\n        document\n        cover\n        isPublished\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.CreateDocumentDocument,
    "\n  mutation UpdateDocument(\n    $channelId: UUID!,\n    $id: Int!,\n    $editorState: String,\n  ) {\n    updateDocument(\n      id: $id,\n      channelId: $channelId,\n      editorState: $editorState,\n    ) {\n      document {\n        id\n        editorState\n        channel {\n          id\n          name\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.UpdateDocumentDocument,
    "\n  mutation DeleteDocument($id: Int!) {\n    deleteDocument(id: $id) {\n      documentId\n    }\n  }\n": types.DeleteDocumentDocument,
    "\n  mutation PublishDocument($id: Int!) {\n    publishDocument(id: $id) {\n      document {\n        id\n        isPublished\n      }\n    }\n  }\n": types.PublishDocumentDocument,
    "\n  mutation CreateServerEmoji($serverId: UUID!, $name: String!) {\n    createServerEmoji(serverId: $serverId, name: $name) {\n      serverEmoji{\n        id\n        image\n      }\n    }\n  }\n": types.CreateServerEmojiDocument,
    "\n  mutation DeleteServerEmoji($emojiId: ID!) {\n    deleteServerEmoji(emojiId: $emojiId) {\n      ok\n    }\n  }\n": types.DeleteServerEmojiDocument,
    "\n  mutation CreateChannelEmoji($channelId: UUID!, $emojiId: ID!) {\n    createChannelEmoji(channelId: $channelId, emojiId: $emojiId) {\n      channelEmoji{\n        id\n      }\n    }\n  }\n": types.CreateChannelEmojiDocument,
    "\n  mutation DeleteChannelEmoji($channelId: UUID!, $emojiId: ID!) {\n    deleteChannelEmoji(channelId: $channelId, emojiId: $emojiId) {\n      ok\n    }\n  }\n": types.DeleteChannelEmojiDocument,
    "\nmutation ChangeRole($memberId: UUID!, $newRoleId: Int!) {\n  changeRole(memberId:$memberId, newRoleId: $newRoleId ) {\n    member{\n      id\n      user{\n        username\n      }\n    }\n  }\n}\n": types.ChangeRoleDocument,
    "\n mutation KickMember($memberId: UUID!) {\n  kickMember(memberId: $memberId) {\n    success\n  }\n}\n ": types.KickMemberDocument,
    "\n  mutation CreateMessage($channelId: UUID!, $senderId: UUID!, $content: String!) {\n    createMessage(channelId: $channelId, senderId: $senderId, content: $content) {\n      message {\n        id\n        channel{\n          id\n          name\n        }\n        sender {\n          id\n          username\n        }\n        content\n        timestamp\n      }\n    }\n  }\n": types.CreateMessageDocument,
    "\n  mutation UpdateMessage($messageId: Int!, $content: String!) {\n    updateMessage(messageId: $messageId, content: $content) {\n      message {\n        id\n        channel{\n          id\n          name\n        }\n        sender {\n          id\n          username\n        }\n        content\n        editedTimestamp\n      }\n    }\n  }\n": types.UpdateMessageDocument,
    "\n  mutation DeleteMessage($messageId: Int!) {\n    deleteMessage(messageId: $messageId) {\n      messageId\n    }\n  }\n": types.DeleteMessageDocument,
    "\n  mutation CreateAttachment($messageId: Int!, $file: String!, $name: String!, $type: String!, $size: Int!) {\n    createAttachment(messageId: $messageId, file: $file, name: $name, type: $type, size: $size) {\n      attachment {\n        id\n        message {\n          id\n        }\n        file\n        name\n        type\n        size\n      }\n    }\n  }\n": types.CreateAttachmentDocument,
    "\n  mutation UpdateAttachment($attachmentId: Int!, $file: String, $name: String, $type: String, $size: Int) {\n    updateAttachment(attachmentId: $attachmentId, file: $file, name: $name, type: $type, size: $size) {\n      attachment {\n        id\n        message {\n          id\n        }\n        file\n        name\n        type\n        size\n      }\n    }\n  }\n": types.UpdateAttachmentDocument,
    "\n  mutation DeleteAttachment($attachmentId: Int!) {\n    deleteAttachment(attachmentId: $attachmentId) {\n      attachmentId\n    }\n  }\n": types.DeleteAttachmentDocument,
    "\n  mutation CreateDirectMessage($senderId: UUID!, $recipientId: UUID!, $content: String!) {\n    createDirectMessage(senderId: $senderId, recipientId: $recipientId, content: $content) {\n      directMessage {\n        id\n        sender {\n          id\n          username\n        }\n        recipient {\n          id\n          username\n        }\n        content\n        timestamp\n      }\n    }\n  }\n": types.CreateDirectMessageDocument,
    "\n  mutation UpdateDirectMessage($directMessageId: Int!, $content: String!) {\n    updateDirectMessage(directMessageId: $directMessageId, content: $content) {\n      directMessage {\n        id\n        sender {\n          id\n          username\n        }\n        recipient {\n          id\n          username\n        }\n        content\n        editedTimestamp\n      }\n    }\n  }\n": types.UpdateDirectMessageDocument,
    "\n  mutation DeleteDirectMessage($directMessageId: Int!) {\n    deleteDirectMessage(directMessageId: $directMessageId) {\n      directMessageId\n    }\n  }\n": types.DeleteDirectMessageDocument,
    "\n  mutation CreateReaction($messageId: Int!, $userId: UUID!, $emoji: String!) {\n    createReaction(messageId: $messageId, userId: $userId, emoji: $emoji) {\n      reaction {\n        id\n        message {\n          id\n        }\n        user {\n          id\n          username\n        }\n        emoji\n      }\n    }\n  }\n": types.CreateReactionDocument,
    "\n  mutation DeleteReaction($reactionId: Int!) {\n    deleteReaction(reactionId: $reactionId) {\n      reactionId\n    }\n  }\n": types.DeleteReactionDocument,
    "\n  mutation CreateServer($name: String!, $ownerId: UUID!, $icon: Upload) {\n    createServer(name: $name, ownerId: $ownerId, icon: $icon) {\n      server {\n        id\n        name\n        owner {\n          id\n          username\n        }\n        description\n        icon\n      }\n    }\n  }\n": types.CreateServerDocument,
    "\n  mutation UpdateServer($id: UUID!, $name: String, $description: String) {\n    updateServer(id: $id, name: $name, description: $description) {\n      server {\n        id\n        name\n        owner {\n          id\n          username\n        }\n        description\n        icon\n      }\n    }\n  }\n": types.UpdateServerDocument,
    "\n  mutation DeleteServer($id: UUID!) {\n    deleteServer(id: $id) {\n      success\n    }\n  }\n": types.DeleteServerDocument,
    "\n  mutation CreateServerRole(\n    $serverId: UUID!,\n    $name: String!,\n    $color: String,\n    $hoist: Boolean,\n    $mentionable: Boolean,\n    $permissionIds: [Int]\n  ) {\n    createServerRole(\n      serverId: $serverId,\n      name: $name,\n      color: $color,\n      hoist: $hoist,\n      mentionable: $mentionable,\n      permissionIds: $permissionIds\n    ) {\n      serverRole {\n        id\n        name\n        color\n        hoist\n        mentionable\n        permissions {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.CreateServerRoleDocument,
    "\n  mutation UpdateServerRole(\n    $id: Int!,\n    $name: String,\n    $color: String,\n    $hoist: Boolean,\n    $mentionable: Boolean,\n    $permissionIds: [Int]\n  ) {\n    updateServerRole(\n      id: $id,\n      name: $name,\n      color: $color,\n      hoist: $hoist,\n      mentionable: $mentionable,\n      permissionIds: $permissionIds\n    ) {\n      serverRole {\n        id\n        name\n        color\n        hoist\n        mentionable\n        permissions {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.UpdateServerRoleDocument,
    "\n  mutation DeleteServerRole($id: Int!) {\n    deleteServerRole(id: $id) {\n      success\n    }\n  }\n": types.DeleteServerRoleDocument,
    "\n  mutation AddRoleToMember($roleId: Int!, $memberId: UUID!) {\n    addRoleToMember(roleId: $roleId, memberId: $memberId) {\n      member {\n        id\n        user {\n          id\n          username\n        }\n        server {\n          id\n          name\n        }\n        roles {\n          id\n          name\n        }\n        joinedAt\n      }\n    }\n  }\n": types.AddRoleToMemberDocument,
    "\n  mutation RemoveRoleFromMember($roleId: Int!, $memberId: UUID!) {\n    removeRoleFromMember(roleId: $roleId, memberId: $memberId) {\n      member {\n        id\n        user {\n          id\n          username\n        }\n        server {\n          id\n          name\n        }\n        roles {\n          id\n          name\n        }\n        joinedAt\n      }\n    }\n  }\n": types.RemoveRoleFromMemberDocument,
    "\n  mutation AddMemberToServer($userId: UUID!, $serverId: UUID!) {\n    addMemberToServer(userId: $userId, serverId: $serverId) {\n      member {\n        id\n        user {\n          id\n          username\n        }\n        server {\n          id\n          name\n        }\n        roles {\n          id\n          name\n        }\n        joinedAt\n      }\n    }\n  }\n": types.AddMemberToServerDocument,
    "\n  mutation DeleteMemberFromServer($memberId: UUID!) {\n    deleteMemberFromServer(memberId: $memberId) {\n      success\n    }\n  }\n": types.DeleteMemberFromServerDocument,
    "\n  mutation CreateInvite(\n    $serverId: UUID!,\n    $inviterId: UUID!,\n    $usesLeft: Int,\n    $expiresAt: DateTime\n  ) {\n    createInvite(\n      serverId: $serverId,\n      inviterId: $inviterId,\n      usesLeft: $usesLeft,\n      expiresAt: $expiresAt\n    ) {\n      invite {\n        id\n        server {\n          id\n          name\n        }\n        inviter {\n          id\n          username\n        }\n        code\n        usesLeft\n        createdAt\n        expiresAt\n      }\n    }\n  }\n": types.CreateInviteDocument,
    "\n  mutation UseInvite($code: UUID!) {\n    useInvite(code: $code) {\n      success\n    }\n  }\n": types.UseInviteDocument,
    "\n  mutation CreateUser($username: String!, $email: String!, $password: String) {\n    createUser(username: $username, email: $email, password: $password) {\n      user {\n        id\n        username\n        email\n\n        avatar\n        discriminator\n        role\n      }\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation UpdateUser($id: ID!, $username: String, $discriminator: String, $avatar: String, $emailVerified: DateTime) {\n    updateUser(id: $id, username: $username, discriminator: $discriminator, avatar: $avatar, emailVerified: $emailVerified) {\n      user {\n        id\n        username\n        email\n        avatar\n        discriminator\n        role\n      }\n    }\n  }\n": types.UpdateUserDocument,
    "\n  mutation DeleteUser($id: ID!) {\n    deleteUser(id: $id) {\n      user {\n        id\n        username\n        email\n        avatar\n        discriminator\n        role\n      }\n    }\n  }\n": types.DeleteUserDocument,
    "\n  query GetChannelCategories {\n    channelCategories {\n      id\n      server {\n        id\n        name\n      }\n      name\n      position\n    }\n  }\n": types.GetChannelCategoriesDocument,
    "\nquery ChannelsByServer($serverId: UUID!) {\n  channelsByServer(serverId: $serverId) {\n    server{\n      id\n      name\n      icon\n      members{\n        id\n        user{\n          id\n          username\n        }\n      }\n      roles{\n        id\n        name\n        permissions{\n          id\n          name\n          codename\n        }\n      }\n    }\n    id\n    name\n    emoji\n    channelType\n    isPrivate\n    topic\n    category {\n      id\n      name\n    }\n  }\n}\n": types.ChannelsByServerDocument,
    "\n  query GetChannels {\n    channels {\n      id\n      name\n      server {\n        id\n        name\n      }\n      emoji\n      channelType\n      category {\n        id\n        name\n      }\n      isPrivate\n      topic\n    }\n  }\n": types.GetChannelsDocument,
    "\n  query GetChannel($id: UUID!) {\n    channel(id: $id) {\n      id\n      name\n      server {\n        id\n        name\n      }\n      emoji\n      channelType\n      category {\n        id\n        name\n      }\n      isPrivate\n      topic\n    }\n  }\n": types.GetChannelDocument,
    "\n  query GetChannelPermissions {\n    channelPermissions {\n      id\n      channel {\n        id\n        name\n      }\n      role {\n        id\n        name\n      }\n      allow\n      deny\n    }\n  }\n": types.GetChannelPermissionsDocument,
    "\n  query GetChannelPermissionByChannel($channel_id: UUID!) {\n    channelPermissionByChannel(channelId: $channel_id) {\n      id\n      channel {\n        id\n        name\n      }\n      role {\n        id\n        name\n      }\n      allow\n      deny\n    }\n  }\n": types.GetChannelPermissionByChannelDocument,
    "\n  query GetChannelPermissionByRole($roleId: Int!) {\n    channelPermissionByRole(roleId: $roleId) {\n      id\n      channel {\n        id\n        name\n      }\n      role {\n        id\n        name\n      }\n      allow\n      deny\n    }\n  }\n": types.GetChannelPermissionByRoleDocument,
    "\n  query GetCategoryMembers {\n    categoryMembers {\n      id\n      category {\n        id\n        name\n      }\n      channel {\n        id\n        name\n      }\n      position\n    }\n  }\n": types.GetCategoryMembersDocument,
    "\n  query GetCategoryMembersByCategory($categoryId: Int!) {\n    categoryMembersByCategory(categoryId: $categoryId) {\n      id\n      category {\n        id\n        name\n      }\n      channel {\n        id\n        name\n      }\n      position\n    }\n  }\n": types.GetCategoryMembersByCategoryDocument,
    "\n  query GetCategoryMembersByChannel($channelId: UUID!) {\n    categoryMembersByChannel(channelId: $channelId) {\n      id\n      category {\n        id\n        name\n      }\n      channel {\n        id\n        name\n      }\n      position\n    }\n  }\n": types.GetCategoryMembersByChannelDocument,
    "\n  query GetChannelByNameAndServer($name: String!, $serverId: UUID!) {\n    channelByNameAndServer(name: $name, serverId: $serverId) {\n      id\n      name\n      server {\n        id\n        name\n      }\n      emoji\n      channelType\n      category {\n        id\n        name\n      }\n      isPrivate\n      topic\n    }\n  }\n": types.GetChannelByNameAndServerDocument,
    "\n  query GetDocument($id: Int!) {\n    document(id: $id) {\n      id\n      editorState\n      channel {\n        id\n        name\n      }\n      document\n      cover\n      isPublished\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetDocumentDocument,
    "\n  query GetDocumentByChannel($channelId: UUID!) {\n    documentByChannel(channelId: $channelId) {\n      id\n      editorState\n      channel {\n        id\n        name\n      }\n      document\n      cover\n      isPublished\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetDocumentByChannelDocument,
    "\n  query GetAllDocuments {\n    allDocuments {\n      id\n      editorState\n      channel {\n        id\n        name\n      }\n      document\n      cover\n      isPublished\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetAllDocumentsDocument,
    "\n  query GetDraw($channelId: UUID!) {\n    drawsByChannel(channelId: $channelId) {\n      id\n      whiteboard\n      channel {\n        id\n        name\n      }\n      isPublished\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetDrawDocument,
    "\n  fragment ServerEmojiFields on ServerEmojiType {\n    id\n    name\n    isAnimated\n    image\n  }\n": types.ServerEmojiFieldsFragmentDoc,
    "\n  fragment ChannelEmojiFields on ChannelEmojiType {\n    id\n    emoji {\n     name\n    }\n    channel {\n      id\n      name\n    }\n  }\n": types.ChannelEmojiFieldsFragmentDoc,
    "\n  query GetMessagesByChannel($channelId: UUID!) {\n    messagesByChannel(channelId: $channelId) {\n      id\n      content\n      deleted\n      timestamp\n      editedTimestamp\n      attachments {\n        id\n        name\n        message {\n          id\n          content\n        }\n      }\n      channel {\n        id\n        name\n      }\n      sender {\n        role\n        id\n        email\n        firstName\n        lastName\n        avatar\n      }\n    }\n  }\n": types.GetMessagesByChannelDocument,
    "\n  query GetAttachments {\n    attachments {\n      id\n      message {\n        id\n      }\n      file\n      name\n      type\n      size\n    }\n  }\n": types.GetAttachmentsDocument,
    "\n  query GetDirectMessages {\n    directMessages {\n      id\n      sender {\n        id\n        username\n      }\n      recipient {\n        id\n        username\n      }\n      content\n      timestamp\n    }\n  }\n": types.GetDirectMessagesDocument,
    "\n  query GetReactions {\n    reactions {\n      id\n      message {\n        id\n      }\n      user {\n        id\n        username\n      }\n      emoji\n    }\n  }\n": types.GetReactionsDocument,
    "\n  query GetServer($id: UUID!) {\n    server(id: $id) {\n      id\n      name\n      icon\n      owner{\n        id\n        username\n      }\n      invites{\n        id\n        code\n      }\n      members {\n        id\n        user{\n          id\n          username\n          avatar\n          discriminator\n        }\n        roles{\n          id\n          name\n          color\n          permissions{\n            id\n            name\n          }\n        }\n      }\n      channelSet{\n        id\n        name\n        channelType\n      }\n      categories{\n        id\n        name\n      }\n    }\n  }\n": types.GetServerDocument,
    "\n  query GetAllServers {\n    allServers {\n      id\n      name\n      owner {\n        id\n        username\n      }\n      description\n      icon\n    }\n  }\n": types.GetAllServersDocument,
    "\n  query GetPermission($id: Int!) {\n    permission(id: $id) {\n      id\n      name\n      codename\n    }\n  }\n": types.GetPermissionDocument,
    "\n  query GetAllPermissions {\n    allPermissions {\n      id\n      name\n      codename\n    }\n  }\n": types.GetAllPermissionsDocument,
    "\n  query GetServerRole($id: Int!) {\n    serverRole(id: $id) {\n      id\n      name\n      color\n      hoist\n      mentionable\n      permissions {\n        id\n        name\n      }\n    }\n  }\n": types.GetServerRoleDocument,
    "\n  query GetAllServerRoles {\n    allServerRoles {\n      id\n      name\n      color\n      hoist\n      mentionable\n      permissions {\n        id\n        name\n      }\n    }\n  }\n": types.GetAllServerRolesDocument,
    "\nquery GetMember($serverId: UUID!, $userId: UUID!) {\n  member(serverId: $serverId, userId: $userId) {\n    id\n    user {\n      id\n      username\n      avatar  \n    }\n    server {\n      id\n      name\n    }\n    roles{\n      id\n      name\n        permissions{\n        id\n        name\n        codename\n      }\n    }\n  }\n}\n": types.GetMemberDocument,
    "\n  query GetAllMembers {\n    allMembers {\n      id\n      user {\n        id\n        username\n      }\n      server {\n        id\n        name\n      }\n      roles {\n        id\n        name\n      }\n      joinedAt\n    }\n  }\n": types.GetAllMembersDocument,
    "\n  query GetInvite($code: UUID!) {\n    invite(code: $code) {\n      id\n      server {\n        id\n        name\n      }\n      inviter {\n        id\n        username\n      }\n      code\n      usesLeft\n      createdAt\n      expiresAt\n    }\n  }\n": types.GetInviteDocument,
    "\n  query GetAllInvites {\n    allInvites {\n      id\n      server {\n        id\n        name\n      }\n      inviter {\n        id\n        username\n      }\n      code\n      usesLeft\n      createdAt\n      expiresAt\n    }\n  }\n": types.GetAllInvitesDocument,
    "\n  query GetUserServers($userId: UUID!) {\n    userServers(userId: $userId) {\n      id\n      name\n      owner {\n        id\n        username\n      }\n      description\n      icon\n    }\n  }\n": types.GetUserServersDocument,
    "\n  query GetRolesByMemberAndServer($userId: UUID!, $serverId: UUID!) {\n    rolesByMemberAndServer(userId: $userId, serverId: $serverId) {\n      id\n      name\n      color\n      hoist\n      mentionable\n    }\n  }\n": types.GetRolesByMemberAndServerDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateChannelCategory($serverId: UUID!, $name: String!, $position: Int) {\n    createChannelCategory(serverId: $serverId, name: $name, position: $position) {\n      category {\n        id\n        server {\n          id\n          name\n        }\n        name\n        position\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateChannelCategory($serverId: UUID!, $name: String!, $position: Int) {\n    createChannelCategory(serverId: $serverId, name: $name, position: $position) {\n      category {\n        id\n        server {\n          id\n          name\n        }\n        name\n        position\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateChannelCategory($categoryId: Int!, $name: String!, $position: Int) {\n    updateChannelCategory(categoryId: $categoryId, name: $name, position: $position) {\n      category {\n        id\n        server {\n          id\n          name\n        }\n        name\n        position\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateChannelCategory($categoryId: Int!, $name: String!, $position: Int) {\n    updateChannelCategory(categoryId: $categoryId, name: $name, position: $position) {\n      category {\n        id\n        server {\n          id\n          name\n        }\n        name\n        position\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteChannelCategory($categoryId: Int!) {\n    deleteChannelCategory(categoryId: $categoryId) {\n      categoryId\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteChannelCategory($categoryId: Int!) {\n    deleteChannelCategory(categoryId: $categoryId) {\n      categoryId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateChannel(\n    $serverId: UUID!\n    $name: String!\n    $emoji: String\n    $channelType: String\n    $categoryId: Int\n    $isPrivate: Boolean\n    $topic: String\n  ) {\n    createChannel(\n      serverId: $serverId\n      name: $name\n      emoji: $emoji\n      channelType: $channelType\n      categoryId: $categoryId\n      isPrivate: $isPrivate\n      topic: $topic\n    ) {\n      channel {\n        id\n        name\n        server {\n          id\n          name\n        }\n        emoji\n        channelType\n        category {\n          id\n          name\n        }\n        isPrivate\n        topic\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateChannel(\n    $serverId: UUID!\n    $name: String!\n    $emoji: String\n    $channelType: String\n    $categoryId: Int\n    $isPrivate: Boolean\n    $topic: String\n  ) {\n    createChannel(\n      serverId: $serverId\n      name: $name\n      emoji: $emoji\n      channelType: $channelType\n      categoryId: $categoryId\n      isPrivate: $isPrivate\n      topic: $topic\n    ) {\n      channel {\n        id\n        name\n        server {\n          id\n          name\n        }\n        emoji\n        channelType\n        category {\n          id\n          name\n        }\n        isPrivate\n        topic\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateChannel(\n    $id: UUID!\n    $name: String\n    $emoji: String\n    $channelType: String\n    $categoryId: Int\n    $isPrivate: Boolean\n    $topic: String\n  ) {\n    updateChannel(\n      id: $id\n      name: $name\n      emoji: $emoji\n      channelType: $channelType\n      categoryId: $categoryId\n      isPrivate: $isPrivate\n      topic: $topic\n    ) {\n      channel {\n        id\n        name\n        server {\n          id\n          name\n        }\n        emoji\n        channelType\n        category {\n          id\n          name\n        }\n        isPrivate\n        topic\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateChannel(\n    $id: UUID!\n    $name: String\n    $emoji: String\n    $channelType: String\n    $categoryId: Int\n    $isPrivate: Boolean\n    $topic: String\n  ) {\n    updateChannel(\n      id: $id\n      name: $name\n      emoji: $emoji\n      channelType: $channelType\n      categoryId: $categoryId\n      isPrivate: $isPrivate\n      topic: $topic\n    ) {\n      channel {\n        id\n        name\n        server {\n          id\n          name\n        }\n        emoji\n        channelType\n        category {\n          id\n          name\n        }\n        isPrivate\n        topic\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteChannel($id: UUID!) {\n    deleteChannel(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteChannel($id: UUID!) {\n    deleteChannel(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateChannelPermission($channelId: UUID!, $roleId: Int!, $allow: String!, $deny: String!) {\n    createChannelPermission(channelId: $channelId, roleId: $roleId, allow: $allow, deny: $deny) {\n      permission {\n        id\n        channel {\n          id\n          name\n        }\n        role {\n          id\n          name\n        }\n        allow\n        deny\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateChannelPermission($channelId: UUID!, $roleId: Int!, $allow: String!, $deny: String!) {\n    createChannelPermission(channelId: $channelId, roleId: $roleId, allow: $allow, deny: $deny) {\n      permission {\n        id\n        channel {\n          id\n          name\n        }\n        role {\n          id\n          name\n        }\n        allow\n        deny\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateChannelPermission($id: Int!, $allow: String, $deny: String) {\n    updateChannelPermission(id: $id, allow: $allow, deny: $deny) {\n      permission {\n        id\n        channel {\n          id\n          name\n        }\n        role {\n          id\n          name\n        }\n        allow\n        deny\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateChannelPermission($id: Int!, $allow: String, $deny: String) {\n    updateChannelPermission(id: $id, allow: $allow, deny: $deny) {\n      permission {\n        id\n        channel {\n          id\n          name\n        }\n        role {\n          id\n          name\n        }\n        allow\n        deny\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteChannelPermission($id: Int!) {\n    deleteChannelPermission(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteChannelPermission($id: Int!) {\n    deleteChannelPermission(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateChannelCategoryMember($categoryId: Int!, $channelId: UUID!, $position: Int) {\n    createChannelCategoryMember(categoryId: $categoryId, channelId: $channelId, position: $position) {\n      member {\n        id\n        category {\n          id\n          name\n        }\n        channel {\n          id\n          name\n        }\n        position\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateChannelCategoryMember($categoryId: Int!, $channelId: UUID!, $position: Int) {\n    createChannelCategoryMember(categoryId: $categoryId, channelId: $channelId, position: $position) {\n      member {\n        id\n        category {\n          id\n          name\n        }\n        channel {\n          id\n          name\n        }\n        position\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateChannelCategoryMember($id: Int!, $position: Int) {\n    updateChannelCategoryMember(id: $id, position: $position) {\n      member {\n        id\n        category {\n          id\n          name\n        }\n        channel {\n          id\n          name\n        }\n        position\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateChannelCategoryMember($id: Int!, $position: Int) {\n    updateChannelCategoryMember(id: $id, position: $position) {\n      member {\n        id\n        category {\n          id\n          name\n        }\n        channel {\n          id\n          name\n        }\n        position\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteChannelCategoryMember($id: Int!) {\n    deleteChannelCategoryMember(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteChannelCategoryMember($id: Int!) {\n    deleteChannelCategoryMember(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateDocument(\n    $editorState: String!,\n    $channelId: UUID!,\n    $document: String,\n    $cover: String\n  ) {\n    createDocument(\n      editorState: $editorState,\n      channelId: $channelId,\n      document: $document,\n      cover: $cover\n    ) {\n      document {\n        id\n        editorState\n        channel {\n          id\n          name\n        }\n        document\n        cover\n        isPublished\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateDocument(\n    $editorState: String!,\n    $channelId: UUID!,\n    $document: String,\n    $cover: String\n  ) {\n    createDocument(\n      editorState: $editorState,\n      channelId: $channelId,\n      document: $document,\n      cover: $cover\n    ) {\n      document {\n        id\n        editorState\n        channel {\n          id\n          name\n        }\n        document\n        cover\n        isPublished\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateDocument(\n    $channelId: UUID!,\n    $id: Int!,\n    $editorState: String,\n  ) {\n    updateDocument(\n      id: $id,\n      channelId: $channelId,\n      editorState: $editorState,\n    ) {\n      document {\n        id\n        editorState\n        channel {\n          id\n          name\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateDocument(\n    $channelId: UUID!,\n    $id: Int!,\n    $editorState: String,\n  ) {\n    updateDocument(\n      id: $id,\n      channelId: $channelId,\n      editorState: $editorState,\n    ) {\n      document {\n        id\n        editorState\n        channel {\n          id\n          name\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteDocument($id: Int!) {\n    deleteDocument(id: $id) {\n      documentId\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteDocument($id: Int!) {\n    deleteDocument(id: $id) {\n      documentId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation PublishDocument($id: Int!) {\n    publishDocument(id: $id) {\n      document {\n        id\n        isPublished\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation PublishDocument($id: Int!) {\n    publishDocument(id: $id) {\n      document {\n        id\n        isPublished\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateServerEmoji($serverId: UUID!, $name: String!) {\n    createServerEmoji(serverId: $serverId, name: $name) {\n      serverEmoji{\n        id\n        image\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateServerEmoji($serverId: UUID!, $name: String!) {\n    createServerEmoji(serverId: $serverId, name: $name) {\n      serverEmoji{\n        id\n        image\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteServerEmoji($emojiId: ID!) {\n    deleteServerEmoji(emojiId: $emojiId) {\n      ok\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteServerEmoji($emojiId: ID!) {\n    deleteServerEmoji(emojiId: $emojiId) {\n      ok\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateChannelEmoji($channelId: UUID!, $emojiId: ID!) {\n    createChannelEmoji(channelId: $channelId, emojiId: $emojiId) {\n      channelEmoji{\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateChannelEmoji($channelId: UUID!, $emojiId: ID!) {\n    createChannelEmoji(channelId: $channelId, emojiId: $emojiId) {\n      channelEmoji{\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteChannelEmoji($channelId: UUID!, $emojiId: ID!) {\n    deleteChannelEmoji(channelId: $channelId, emojiId: $emojiId) {\n      ok\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteChannelEmoji($channelId: UUID!, $emojiId: ID!) {\n    deleteChannelEmoji(channelId: $channelId, emojiId: $emojiId) {\n      ok\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation ChangeRole($memberId: UUID!, $newRoleId: Int!) {\n  changeRole(memberId:$memberId, newRoleId: $newRoleId ) {\n    member{\n      id\n      user{\n        username\n      }\n    }\n  }\n}\n"): (typeof documents)["\nmutation ChangeRole($memberId: UUID!, $newRoleId: Int!) {\n  changeRole(memberId:$memberId, newRoleId: $newRoleId ) {\n    member{\n      id\n      user{\n        username\n      }\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n mutation KickMember($memberId: UUID!) {\n  kickMember(memberId: $memberId) {\n    success\n  }\n}\n "): (typeof documents)["\n mutation KickMember($memberId: UUID!) {\n  kickMember(memberId: $memberId) {\n    success\n  }\n}\n "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateMessage($channelId: UUID!, $senderId: UUID!, $content: String!) {\n    createMessage(channelId: $channelId, senderId: $senderId, content: $content) {\n      message {\n        id\n        channel{\n          id\n          name\n        }\n        sender {\n          id\n          username\n        }\n        content\n        timestamp\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateMessage($channelId: UUID!, $senderId: UUID!, $content: String!) {\n    createMessage(channelId: $channelId, senderId: $senderId, content: $content) {\n      message {\n        id\n        channel{\n          id\n          name\n        }\n        sender {\n          id\n          username\n        }\n        content\n        timestamp\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateMessage($messageId: Int!, $content: String!) {\n    updateMessage(messageId: $messageId, content: $content) {\n      message {\n        id\n        channel{\n          id\n          name\n        }\n        sender {\n          id\n          username\n        }\n        content\n        editedTimestamp\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateMessage($messageId: Int!, $content: String!) {\n    updateMessage(messageId: $messageId, content: $content) {\n      message {\n        id\n        channel{\n          id\n          name\n        }\n        sender {\n          id\n          username\n        }\n        content\n        editedTimestamp\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteMessage($messageId: Int!) {\n    deleteMessage(messageId: $messageId) {\n      messageId\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteMessage($messageId: Int!) {\n    deleteMessage(messageId: $messageId) {\n      messageId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateAttachment($messageId: Int!, $file: String!, $name: String!, $type: String!, $size: Int!) {\n    createAttachment(messageId: $messageId, file: $file, name: $name, type: $type, size: $size) {\n      attachment {\n        id\n        message {\n          id\n        }\n        file\n        name\n        type\n        size\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateAttachment($messageId: Int!, $file: String!, $name: String!, $type: String!, $size: Int!) {\n    createAttachment(messageId: $messageId, file: $file, name: $name, type: $type, size: $size) {\n      attachment {\n        id\n        message {\n          id\n        }\n        file\n        name\n        type\n        size\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateAttachment($attachmentId: Int!, $file: String, $name: String, $type: String, $size: Int) {\n    updateAttachment(attachmentId: $attachmentId, file: $file, name: $name, type: $type, size: $size) {\n      attachment {\n        id\n        message {\n          id\n        }\n        file\n        name\n        type\n        size\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAttachment($attachmentId: Int!, $file: String, $name: String, $type: String, $size: Int) {\n    updateAttachment(attachmentId: $attachmentId, file: $file, name: $name, type: $type, size: $size) {\n      attachment {\n        id\n        message {\n          id\n        }\n        file\n        name\n        type\n        size\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteAttachment($attachmentId: Int!) {\n    deleteAttachment(attachmentId: $attachmentId) {\n      attachmentId\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteAttachment($attachmentId: Int!) {\n    deleteAttachment(attachmentId: $attachmentId) {\n      attachmentId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateDirectMessage($senderId: UUID!, $recipientId: UUID!, $content: String!) {\n    createDirectMessage(senderId: $senderId, recipientId: $recipientId, content: $content) {\n      directMessage {\n        id\n        sender {\n          id\n          username\n        }\n        recipient {\n          id\n          username\n        }\n        content\n        timestamp\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateDirectMessage($senderId: UUID!, $recipientId: UUID!, $content: String!) {\n    createDirectMessage(senderId: $senderId, recipientId: $recipientId, content: $content) {\n      directMessage {\n        id\n        sender {\n          id\n          username\n        }\n        recipient {\n          id\n          username\n        }\n        content\n        timestamp\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateDirectMessage($directMessageId: Int!, $content: String!) {\n    updateDirectMessage(directMessageId: $directMessageId, content: $content) {\n      directMessage {\n        id\n        sender {\n          id\n          username\n        }\n        recipient {\n          id\n          username\n        }\n        content\n        editedTimestamp\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateDirectMessage($directMessageId: Int!, $content: String!) {\n    updateDirectMessage(directMessageId: $directMessageId, content: $content) {\n      directMessage {\n        id\n        sender {\n          id\n          username\n        }\n        recipient {\n          id\n          username\n        }\n        content\n        editedTimestamp\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteDirectMessage($directMessageId: Int!) {\n    deleteDirectMessage(directMessageId: $directMessageId) {\n      directMessageId\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteDirectMessage($directMessageId: Int!) {\n    deleteDirectMessage(directMessageId: $directMessageId) {\n      directMessageId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateReaction($messageId: Int!, $userId: UUID!, $emoji: String!) {\n    createReaction(messageId: $messageId, userId: $userId, emoji: $emoji) {\n      reaction {\n        id\n        message {\n          id\n        }\n        user {\n          id\n          username\n        }\n        emoji\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateReaction($messageId: Int!, $userId: UUID!, $emoji: String!) {\n    createReaction(messageId: $messageId, userId: $userId, emoji: $emoji) {\n      reaction {\n        id\n        message {\n          id\n        }\n        user {\n          id\n          username\n        }\n        emoji\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteReaction($reactionId: Int!) {\n    deleteReaction(reactionId: $reactionId) {\n      reactionId\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteReaction($reactionId: Int!) {\n    deleteReaction(reactionId: $reactionId) {\n      reactionId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateServer($name: String!, $ownerId: UUID!, $icon: Upload) {\n    createServer(name: $name, ownerId: $ownerId, icon: $icon) {\n      server {\n        id\n        name\n        owner {\n          id\n          username\n        }\n        description\n        icon\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateServer($name: String!, $ownerId: UUID!, $icon: Upload) {\n    createServer(name: $name, ownerId: $ownerId, icon: $icon) {\n      server {\n        id\n        name\n        owner {\n          id\n          username\n        }\n        description\n        icon\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateServer($id: UUID!, $name: String, $description: String) {\n    updateServer(id: $id, name: $name, description: $description) {\n      server {\n        id\n        name\n        owner {\n          id\n          username\n        }\n        description\n        icon\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateServer($id: UUID!, $name: String, $description: String) {\n    updateServer(id: $id, name: $name, description: $description) {\n      server {\n        id\n        name\n        owner {\n          id\n          username\n        }\n        description\n        icon\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteServer($id: UUID!) {\n    deleteServer(id: $id) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteServer($id: UUID!) {\n    deleteServer(id: $id) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateServerRole(\n    $serverId: UUID!,\n    $name: String!,\n    $color: String,\n    $hoist: Boolean,\n    $mentionable: Boolean,\n    $permissionIds: [Int]\n  ) {\n    createServerRole(\n      serverId: $serverId,\n      name: $name,\n      color: $color,\n      hoist: $hoist,\n      mentionable: $mentionable,\n      permissionIds: $permissionIds\n    ) {\n      serverRole {\n        id\n        name\n        color\n        hoist\n        mentionable\n        permissions {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateServerRole(\n    $serverId: UUID!,\n    $name: String!,\n    $color: String,\n    $hoist: Boolean,\n    $mentionable: Boolean,\n    $permissionIds: [Int]\n  ) {\n    createServerRole(\n      serverId: $serverId,\n      name: $name,\n      color: $color,\n      hoist: $hoist,\n      mentionable: $mentionable,\n      permissionIds: $permissionIds\n    ) {\n      serverRole {\n        id\n        name\n        color\n        hoist\n        mentionable\n        permissions {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateServerRole(\n    $id: Int!,\n    $name: String,\n    $color: String,\n    $hoist: Boolean,\n    $mentionable: Boolean,\n    $permissionIds: [Int]\n  ) {\n    updateServerRole(\n      id: $id,\n      name: $name,\n      color: $color,\n      hoist: $hoist,\n      mentionable: $mentionable,\n      permissionIds: $permissionIds\n    ) {\n      serverRole {\n        id\n        name\n        color\n        hoist\n        mentionable\n        permissions {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateServerRole(\n    $id: Int!,\n    $name: String,\n    $color: String,\n    $hoist: Boolean,\n    $mentionable: Boolean,\n    $permissionIds: [Int]\n  ) {\n    updateServerRole(\n      id: $id,\n      name: $name,\n      color: $color,\n      hoist: $hoist,\n      mentionable: $mentionable,\n      permissionIds: $permissionIds\n    ) {\n      serverRole {\n        id\n        name\n        color\n        hoist\n        mentionable\n        permissions {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteServerRole($id: Int!) {\n    deleteServerRole(id: $id) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteServerRole($id: Int!) {\n    deleteServerRole(id: $id) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddRoleToMember($roleId: Int!, $memberId: UUID!) {\n    addRoleToMember(roleId: $roleId, memberId: $memberId) {\n      member {\n        id\n        user {\n          id\n          username\n        }\n        server {\n          id\n          name\n        }\n        roles {\n          id\n          name\n        }\n        joinedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddRoleToMember($roleId: Int!, $memberId: UUID!) {\n    addRoleToMember(roleId: $roleId, memberId: $memberId) {\n      member {\n        id\n        user {\n          id\n          username\n        }\n        server {\n          id\n          name\n        }\n        roles {\n          id\n          name\n        }\n        joinedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RemoveRoleFromMember($roleId: Int!, $memberId: UUID!) {\n    removeRoleFromMember(roleId: $roleId, memberId: $memberId) {\n      member {\n        id\n        user {\n          id\n          username\n        }\n        server {\n          id\n          name\n        }\n        roles {\n          id\n          name\n        }\n        joinedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveRoleFromMember($roleId: Int!, $memberId: UUID!) {\n    removeRoleFromMember(roleId: $roleId, memberId: $memberId) {\n      member {\n        id\n        user {\n          id\n          username\n        }\n        server {\n          id\n          name\n        }\n        roles {\n          id\n          name\n        }\n        joinedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddMemberToServer($userId: UUID!, $serverId: UUID!) {\n    addMemberToServer(userId: $userId, serverId: $serverId) {\n      member {\n        id\n        user {\n          id\n          username\n        }\n        server {\n          id\n          name\n        }\n        roles {\n          id\n          name\n        }\n        joinedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddMemberToServer($userId: UUID!, $serverId: UUID!) {\n    addMemberToServer(userId: $userId, serverId: $serverId) {\n      member {\n        id\n        user {\n          id\n          username\n        }\n        server {\n          id\n          name\n        }\n        roles {\n          id\n          name\n        }\n        joinedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteMemberFromServer($memberId: UUID!) {\n    deleteMemberFromServer(memberId: $memberId) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteMemberFromServer($memberId: UUID!) {\n    deleteMemberFromServer(memberId: $memberId) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateInvite(\n    $serverId: UUID!,\n    $inviterId: UUID!,\n    $usesLeft: Int,\n    $expiresAt: DateTime\n  ) {\n    createInvite(\n      serverId: $serverId,\n      inviterId: $inviterId,\n      usesLeft: $usesLeft,\n      expiresAt: $expiresAt\n    ) {\n      invite {\n        id\n        server {\n          id\n          name\n        }\n        inviter {\n          id\n          username\n        }\n        code\n        usesLeft\n        createdAt\n        expiresAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateInvite(\n    $serverId: UUID!,\n    $inviterId: UUID!,\n    $usesLeft: Int,\n    $expiresAt: DateTime\n  ) {\n    createInvite(\n      serverId: $serverId,\n      inviterId: $inviterId,\n      usesLeft: $usesLeft,\n      expiresAt: $expiresAt\n    ) {\n      invite {\n        id\n        server {\n          id\n          name\n        }\n        inviter {\n          id\n          username\n        }\n        code\n        usesLeft\n        createdAt\n        expiresAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UseInvite($code: UUID!) {\n    useInvite(code: $code) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation UseInvite($code: UUID!) {\n    useInvite(code: $code) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($username: String!, $email: String!, $password: String) {\n    createUser(username: $username, email: $email, password: $password) {\n      user {\n        id\n        username\n        email\n\n        avatar\n        discriminator\n        role\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($username: String!, $email: String!, $password: String) {\n    createUser(username: $username, email: $email, password: $password) {\n      user {\n        id\n        username\n        email\n\n        avatar\n        discriminator\n        role\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUser($id: ID!, $username: String, $discriminator: String, $avatar: String, $emailVerified: DateTime) {\n    updateUser(id: $id, username: $username, discriminator: $discriminator, avatar: $avatar, emailVerified: $emailVerified) {\n      user {\n        id\n        username\n        email\n        avatar\n        discriminator\n        role\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUser($id: ID!, $username: String, $discriminator: String, $avatar: String, $emailVerified: DateTime) {\n    updateUser(id: $id, username: $username, discriminator: $discriminator, avatar: $avatar, emailVerified: $emailVerified) {\n      user {\n        id\n        username\n        email\n        avatar\n        discriminator\n        role\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteUser($id: ID!) {\n    deleteUser(id: $id) {\n      user {\n        id\n        username\n        email\n        avatar\n        discriminator\n        role\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteUser($id: ID!) {\n    deleteUser(id: $id) {\n      user {\n        id\n        username\n        email\n        avatar\n        discriminator\n        role\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChannelCategories {\n    channelCategories {\n      id\n      server {\n        id\n        name\n      }\n      name\n      position\n    }\n  }\n"): (typeof documents)["\n  query GetChannelCategories {\n    channelCategories {\n      id\n      server {\n        id\n        name\n      }\n      name\n      position\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery ChannelsByServer($serverId: UUID!) {\n  channelsByServer(serverId: $serverId) {\n    server{\n      id\n      name\n      icon\n      members{\n        id\n        user{\n          id\n          username\n        }\n      }\n      roles{\n        id\n        name\n        permissions{\n          id\n          name\n          codename\n        }\n      }\n    }\n    id\n    name\n    emoji\n    channelType\n    isPrivate\n    topic\n    category {\n      id\n      name\n    }\n  }\n}\n"): (typeof documents)["\nquery ChannelsByServer($serverId: UUID!) {\n  channelsByServer(serverId: $serverId) {\n    server{\n      id\n      name\n      icon\n      members{\n        id\n        user{\n          id\n          username\n        }\n      }\n      roles{\n        id\n        name\n        permissions{\n          id\n          name\n          codename\n        }\n      }\n    }\n    id\n    name\n    emoji\n    channelType\n    isPrivate\n    topic\n    category {\n      id\n      name\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChannels {\n    channels {\n      id\n      name\n      server {\n        id\n        name\n      }\n      emoji\n      channelType\n      category {\n        id\n        name\n      }\n      isPrivate\n      topic\n    }\n  }\n"): (typeof documents)["\n  query GetChannels {\n    channels {\n      id\n      name\n      server {\n        id\n        name\n      }\n      emoji\n      channelType\n      category {\n        id\n        name\n      }\n      isPrivate\n      topic\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChannel($id: UUID!) {\n    channel(id: $id) {\n      id\n      name\n      server {\n        id\n        name\n      }\n      emoji\n      channelType\n      category {\n        id\n        name\n      }\n      isPrivate\n      topic\n    }\n  }\n"): (typeof documents)["\n  query GetChannel($id: UUID!) {\n    channel(id: $id) {\n      id\n      name\n      server {\n        id\n        name\n      }\n      emoji\n      channelType\n      category {\n        id\n        name\n      }\n      isPrivate\n      topic\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChannelPermissions {\n    channelPermissions {\n      id\n      channel {\n        id\n        name\n      }\n      role {\n        id\n        name\n      }\n      allow\n      deny\n    }\n  }\n"): (typeof documents)["\n  query GetChannelPermissions {\n    channelPermissions {\n      id\n      channel {\n        id\n        name\n      }\n      role {\n        id\n        name\n      }\n      allow\n      deny\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChannelPermissionByChannel($channel_id: UUID!) {\n    channelPermissionByChannel(channelId: $channel_id) {\n      id\n      channel {\n        id\n        name\n      }\n      role {\n        id\n        name\n      }\n      allow\n      deny\n    }\n  }\n"): (typeof documents)["\n  query GetChannelPermissionByChannel($channel_id: UUID!) {\n    channelPermissionByChannel(channelId: $channel_id) {\n      id\n      channel {\n        id\n        name\n      }\n      role {\n        id\n        name\n      }\n      allow\n      deny\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChannelPermissionByRole($roleId: Int!) {\n    channelPermissionByRole(roleId: $roleId) {\n      id\n      channel {\n        id\n        name\n      }\n      role {\n        id\n        name\n      }\n      allow\n      deny\n    }\n  }\n"): (typeof documents)["\n  query GetChannelPermissionByRole($roleId: Int!) {\n    channelPermissionByRole(roleId: $roleId) {\n      id\n      channel {\n        id\n        name\n      }\n      role {\n        id\n        name\n      }\n      allow\n      deny\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCategoryMembers {\n    categoryMembers {\n      id\n      category {\n        id\n        name\n      }\n      channel {\n        id\n        name\n      }\n      position\n    }\n  }\n"): (typeof documents)["\n  query GetCategoryMembers {\n    categoryMembers {\n      id\n      category {\n        id\n        name\n      }\n      channel {\n        id\n        name\n      }\n      position\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCategoryMembersByCategory($categoryId: Int!) {\n    categoryMembersByCategory(categoryId: $categoryId) {\n      id\n      category {\n        id\n        name\n      }\n      channel {\n        id\n        name\n      }\n      position\n    }\n  }\n"): (typeof documents)["\n  query GetCategoryMembersByCategory($categoryId: Int!) {\n    categoryMembersByCategory(categoryId: $categoryId) {\n      id\n      category {\n        id\n        name\n      }\n      channel {\n        id\n        name\n      }\n      position\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCategoryMembersByChannel($channelId: UUID!) {\n    categoryMembersByChannel(channelId: $channelId) {\n      id\n      category {\n        id\n        name\n      }\n      channel {\n        id\n        name\n      }\n      position\n    }\n  }\n"): (typeof documents)["\n  query GetCategoryMembersByChannel($channelId: UUID!) {\n    categoryMembersByChannel(channelId: $channelId) {\n      id\n      category {\n        id\n        name\n      }\n      channel {\n        id\n        name\n      }\n      position\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetChannelByNameAndServer($name: String!, $serverId: UUID!) {\n    channelByNameAndServer(name: $name, serverId: $serverId) {\n      id\n      name\n      server {\n        id\n        name\n      }\n      emoji\n      channelType\n      category {\n        id\n        name\n      }\n      isPrivate\n      topic\n    }\n  }\n"): (typeof documents)["\n  query GetChannelByNameAndServer($name: String!, $serverId: UUID!) {\n    channelByNameAndServer(name: $name, serverId: $serverId) {\n      id\n      name\n      server {\n        id\n        name\n      }\n      emoji\n      channelType\n      category {\n        id\n        name\n      }\n      isPrivate\n      topic\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetDocument($id: Int!) {\n    document(id: $id) {\n      id\n      editorState\n      channel {\n        id\n        name\n      }\n      document\n      cover\n      isPublished\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetDocument($id: Int!) {\n    document(id: $id) {\n      id\n      editorState\n      channel {\n        id\n        name\n      }\n      document\n      cover\n      isPublished\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetDocumentByChannel($channelId: UUID!) {\n    documentByChannel(channelId: $channelId) {\n      id\n      editorState\n      channel {\n        id\n        name\n      }\n      document\n      cover\n      isPublished\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetDocumentByChannel($channelId: UUID!) {\n    documentByChannel(channelId: $channelId) {\n      id\n      editorState\n      channel {\n        id\n        name\n      }\n      document\n      cover\n      isPublished\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllDocuments {\n    allDocuments {\n      id\n      editorState\n      channel {\n        id\n        name\n      }\n      document\n      cover\n      isPublished\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetAllDocuments {\n    allDocuments {\n      id\n      editorState\n      channel {\n        id\n        name\n      }\n      document\n      cover\n      isPublished\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetDraw($channelId: UUID!) {\n    drawsByChannel(channelId: $channelId) {\n      id\n      whiteboard\n      channel {\n        id\n        name\n      }\n      isPublished\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetDraw($channelId: UUID!) {\n    drawsByChannel(channelId: $channelId) {\n      id\n      whiteboard\n      channel {\n        id\n        name\n      }\n      isPublished\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ServerEmojiFields on ServerEmojiType {\n    id\n    name\n    isAnimated\n    image\n  }\n"): (typeof documents)["\n  fragment ServerEmojiFields on ServerEmojiType {\n    id\n    name\n    isAnimated\n    image\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ChannelEmojiFields on ChannelEmojiType {\n    id\n    emoji {\n     name\n    }\n    channel {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment ChannelEmojiFields on ChannelEmojiType {\n    id\n    emoji {\n     name\n    }\n    channel {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMessagesByChannel($channelId: UUID!) {\n    messagesByChannel(channelId: $channelId) {\n      id\n      content\n      deleted\n      timestamp\n      editedTimestamp\n      attachments {\n        id\n        name\n        message {\n          id\n          content\n        }\n      }\n      channel {\n        id\n        name\n      }\n      sender {\n        role\n        id\n        email\n        firstName\n        lastName\n        avatar\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetMessagesByChannel($channelId: UUID!) {\n    messagesByChannel(channelId: $channelId) {\n      id\n      content\n      deleted\n      timestamp\n      editedTimestamp\n      attachments {\n        id\n        name\n        message {\n          id\n          content\n        }\n      }\n      channel {\n        id\n        name\n      }\n      sender {\n        role\n        id\n        email\n        firstName\n        lastName\n        avatar\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAttachments {\n    attachments {\n      id\n      message {\n        id\n      }\n      file\n      name\n      type\n      size\n    }\n  }\n"): (typeof documents)["\n  query GetAttachments {\n    attachments {\n      id\n      message {\n        id\n      }\n      file\n      name\n      type\n      size\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetDirectMessages {\n    directMessages {\n      id\n      sender {\n        id\n        username\n      }\n      recipient {\n        id\n        username\n      }\n      content\n      timestamp\n    }\n  }\n"): (typeof documents)["\n  query GetDirectMessages {\n    directMessages {\n      id\n      sender {\n        id\n        username\n      }\n      recipient {\n        id\n        username\n      }\n      content\n      timestamp\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetReactions {\n    reactions {\n      id\n      message {\n        id\n      }\n      user {\n        id\n        username\n      }\n      emoji\n    }\n  }\n"): (typeof documents)["\n  query GetReactions {\n    reactions {\n      id\n      message {\n        id\n      }\n      user {\n        id\n        username\n      }\n      emoji\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetServer($id: UUID!) {\n    server(id: $id) {\n      id\n      name\n      icon\n      owner{\n        id\n        username\n      }\n      invites{\n        id\n        code\n      }\n      members {\n        id\n        user{\n          id\n          username\n          avatar\n          discriminator\n        }\n        roles{\n          id\n          name\n          color\n          permissions{\n            id\n            name\n          }\n        }\n      }\n      channelSet{\n        id\n        name\n        channelType\n      }\n      categories{\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetServer($id: UUID!) {\n    server(id: $id) {\n      id\n      name\n      icon\n      owner{\n        id\n        username\n      }\n      invites{\n        id\n        code\n      }\n      members {\n        id\n        user{\n          id\n          username\n          avatar\n          discriminator\n        }\n        roles{\n          id\n          name\n          color\n          permissions{\n            id\n            name\n          }\n        }\n      }\n      channelSet{\n        id\n        name\n        channelType\n      }\n      categories{\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllServers {\n    allServers {\n      id\n      name\n      owner {\n        id\n        username\n      }\n      description\n      icon\n    }\n  }\n"): (typeof documents)["\n  query GetAllServers {\n    allServers {\n      id\n      name\n      owner {\n        id\n        username\n      }\n      description\n      icon\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPermission($id: Int!) {\n    permission(id: $id) {\n      id\n      name\n      codename\n    }\n  }\n"): (typeof documents)["\n  query GetPermission($id: Int!) {\n    permission(id: $id) {\n      id\n      name\n      codename\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllPermissions {\n    allPermissions {\n      id\n      name\n      codename\n    }\n  }\n"): (typeof documents)["\n  query GetAllPermissions {\n    allPermissions {\n      id\n      name\n      codename\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetServerRole($id: Int!) {\n    serverRole(id: $id) {\n      id\n      name\n      color\n      hoist\n      mentionable\n      permissions {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetServerRole($id: Int!) {\n    serverRole(id: $id) {\n      id\n      name\n      color\n      hoist\n      mentionable\n      permissions {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllServerRoles {\n    allServerRoles {\n      id\n      name\n      color\n      hoist\n      mentionable\n      permissions {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllServerRoles {\n    allServerRoles {\n      id\n      name\n      color\n      hoist\n      mentionable\n      permissions {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetMember($serverId: UUID!, $userId: UUID!) {\n  member(serverId: $serverId, userId: $userId) {\n    id\n    user {\n      id\n      username\n      avatar  \n    }\n    server {\n      id\n      name\n    }\n    roles{\n      id\n      name\n        permissions{\n        id\n        name\n        codename\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetMember($serverId: UUID!, $userId: UUID!) {\n  member(serverId: $serverId, userId: $userId) {\n    id\n    user {\n      id\n      username\n      avatar  \n    }\n    server {\n      id\n      name\n    }\n    roles{\n      id\n      name\n        permissions{\n        id\n        name\n        codename\n      }\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllMembers {\n    allMembers {\n      id\n      user {\n        id\n        username\n      }\n      server {\n        id\n        name\n      }\n      roles {\n        id\n        name\n      }\n      joinedAt\n    }\n  }\n"): (typeof documents)["\n  query GetAllMembers {\n    allMembers {\n      id\n      user {\n        id\n        username\n      }\n      server {\n        id\n        name\n      }\n      roles {\n        id\n        name\n      }\n      joinedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetInvite($code: UUID!) {\n    invite(code: $code) {\n      id\n      server {\n        id\n        name\n      }\n      inviter {\n        id\n        username\n      }\n      code\n      usesLeft\n      createdAt\n      expiresAt\n    }\n  }\n"): (typeof documents)["\n  query GetInvite($code: UUID!) {\n    invite(code: $code) {\n      id\n      server {\n        id\n        name\n      }\n      inviter {\n        id\n        username\n      }\n      code\n      usesLeft\n      createdAt\n      expiresAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllInvites {\n    allInvites {\n      id\n      server {\n        id\n        name\n      }\n      inviter {\n        id\n        username\n      }\n      code\n      usesLeft\n      createdAt\n      expiresAt\n    }\n  }\n"): (typeof documents)["\n  query GetAllInvites {\n    allInvites {\n      id\n      server {\n        id\n        name\n      }\n      inviter {\n        id\n        username\n      }\n      code\n      usesLeft\n      createdAt\n      expiresAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserServers($userId: UUID!) {\n    userServers(userId: $userId) {\n      id\n      name\n      owner {\n        id\n        username\n      }\n      description\n      icon\n    }\n  }\n"): (typeof documents)["\n  query GetUserServers($userId: UUID!) {\n    userServers(userId: $userId) {\n      id\n      name\n      owner {\n        id\n        username\n      }\n      description\n      icon\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRolesByMemberAndServer($userId: UUID!, $serverId: UUID!) {\n    rolesByMemberAndServer(userId: $userId, serverId: $serverId) {\n      id\n      name\n      color\n      hoist\n      mentionable\n    }\n  }\n"): (typeof documents)["\n  query GetRolesByMemberAndServer($userId: UUID!, $serverId: UUID!) {\n    rolesByMemberAndServer(userId: $userId, serverId: $serverId) {\n      id\n      name\n      color\n      hoist\n      mentionable\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;