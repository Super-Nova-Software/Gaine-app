"use server";
import { CREATE_CHANNEL, UPDATE_CHANNEL, DELETE_CHANNEL } from '@/graphql/mutation/channel';
import { getClient } from '@/lib/apollo-client';
import { CreateChannelSchema } from '@/schemas';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const client = getClient();

export const createChannel = async (values: z.infer<typeof CreateChannelSchema>) => {
  try {
    const response = await client.mutate({
      mutation: CREATE_CHANNEL,
      variables: values,
    });
    revalidatePath("/main/servers/");
    return response.data; // Return the data part of the response
  } catch (error: any) {
    revalidatePath("/");
    console.error('Error creating Channel:', error.message);
    throw new Error(`Error creating Channel: ${error.message}`);
  }
};

export const updateChannel = async (values: z.infer<typeof CreateChannelSchema>) => {
  try {
    const response = await client.mutate({
      mutation: UPDATE_CHANNEL,
      variables: values,
    });
    return response.data; // Return the data part of the response
  } catch (error) {
    console.error('Error updating Channel:', error);
    throw new Error('Error updating Channel');
  }
};

export const deleteChannel = async (channelId: string) => {
  try {
    const response = await client.mutate({
      mutation: DELETE_CHANNEL,
      variables: { channelId },
    });
    revalidatePath("/");
    return response.data; // Return the data part of the response
  } catch (error: any) {
    revalidatePath("/");
    console.error('Error deleting Channel:', error.message);
    throw new Error(`Error deleting Channel: ${error.message}`);
  }
};
