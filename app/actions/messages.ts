"use server";

import { CREATE_MESSAGE, DELETE_MESSAGE, UPDATE_MESSAGE } from '@/graphql/mutation/messages';
import { getClient } from '@/lib/apollo-client';
import { CreateMessageSchema } from '@/schemas';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export const createMessage = async (values: z.infer<typeof CreateMessageSchema>) => {
  const client = getClient();

  try {
    const response = await client.mutate({
      mutation: CREATE_MESSAGE,
      variables: values,
    });
    revalidatePath("/") // Example path for cache revalidation
    return response.data; // Assuming you want to return only the data from the response
    
  } catch (error: any) {
    console.error('Error creating message:', error.message);
    throw new Error(`Error creating message: ${error.message}`);
  }
};

export const updateMessage = async (values: z.infer<typeof CreateMessageSchema>) => {
  const client = getClient();

  try {
    const response = await client.mutate({
      mutation: UPDATE_MESSAGE,
      variables: values,
    });
    return response.data; // Assuming you want to return only the data from the response
    
  } catch (error: any) {
    console.error('Error updating message:', error.message);
    throw new Error(`Error updating message: ${error.message}`);
  }
};

export const deleteMessage = async (messageId: number) => {
  const client = getClient();

  try {
    const response = await client.mutate({
      mutation: DELETE_MESSAGE,
      variables: { messageId },
    });
    revalidatePath("/main/server/[serverId]/channels/[channelId]") // Example path for cache revalidation
    return response.data; // Assuming you want to return only the data from the response
    
  } catch (error: any) {
    console.error('Error deleting message:', error.message);
    throw new Error(`Error deleting message: ${error.message}`);
  }
};
