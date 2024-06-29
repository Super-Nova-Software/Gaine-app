import * as z from "zod";

export const CreateServerSchema = z.object({
  name: z.string().min(1, {
    message: "Server name is required.",
  }),
  icon: z.any().refine((icon) => icon !== "", {
    message: "Server icon is required.",
  }),
  ownerId: z.string().uuid({
    message: "Server description is required.",
  }),
});

export const ChannelSchema = z.object({
  name: z.string().min(1, {
    message: "Channel name is required.",
  }).refine((name) => name !== "general", {
    message: "Channel name cannot be 'general'",
  }),
  channelType: z.string().uuid({
    message: "Channel Type is required.",
  }),
  emoji: z.string().optional(),
  isprivate:z.boolean().optional(),
  topic: z.string().optional(),
});

export const ChannelCetagorySchema = z.object({
  name: z.string().min(1, {
    message: "Channel category name is required.",
  }),
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

