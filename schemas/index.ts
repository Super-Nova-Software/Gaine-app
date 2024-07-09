import { permission } from "process";
import * as z from "zod";

export const CreateServerSchema = z.object({
  name: z.string().min(1, {
    message: "Server name is required.",
  }),
  icon: z.string().optional(),
  ownerId: z.string().uuid({
    message: "Server description is required.",
  }),
});

export const CreateChannelSchema = z.object({
  name: z.string().min(1, {
    message: "Channel name is required.",
  }).refine((name) => name !== "general", {
    message: "Channel name cannot be 'general'",
  }),
  channelType: z.string().min(1,{
    message: "Channel Type is required.",
  }),
  category: z.string().optional(),
  serverId: z.string().optional(),
  emoji: z.string().optional(),
  isprivate: z.boolean().optional(),
  topic: z.string().optional(),
});


export const ChannelCetagorySchema = z.object({
  name: z.string().min(1, {
    message: "Channel category name is required.",
  }),
  serverId: z.string().uuid()
});

export const ServerRoleSchema = z.object({
 name: z.string().min(1, {
    message: "Role name is required.",
  })
 
  
})

export const ServerSettingSchema = z.object({
  name: z.string().min(1, {
    message: "Setting name is required.",
  }),
  value: z.string().min(1, {
    message: "Setting value is required.",
  }),
  serverId: z.string().uuid({
    message: "Server ID must be a valid UUID.",
  }),
});

export const CreateMessageSchema = z.object({
  channelId: z.string().uuid(),
  content: z.string().min(1,{
    message: "Message content is required.",
  }),
  senderId: z.string().uuid(),
});

export const CreateServerRoleSchema = z.object({
  serverId: z.string().uuid(),
  name: z.string().min(1, {
    message: "Role name is required.",
  }).max(50),
  color: z.string().optional(),
  permissions: z.array(z.number()).min(1, {
    message: "At least one permission must be selected.",
  }),
  hoist: z.boolean().optional(),
  mentionable: z.boolean().optional(),
});
