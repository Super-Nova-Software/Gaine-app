"use server";

import { CREATE_MESSAGE, DELETE_MESSAGE, UPDATE_MESSAGE } from '@/graphql/mutation/messages';
import { getClient } from '@/lib/apollo-client';
import { CreateMessageSchema } from '@/schemas';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export const createAttachment = async (values: z.infer<typeof CreateMessageSchema>) => {
  const client = getClient();

  try {
    const response = await client.mutate({
      mutation: CREATE_MESSAGE,
      variables: values,
    });
    revalidatePath("/")
    return response;
    
  } catch (error: any) {
    revalidatePath("/")
    console.error('Error creating Channel:', error.message);
    throw new Error(`Error creating Channel: ${error.message}`);
  }
};

export const updateAttachment = async (values: z.infer<typeof CreateMessageSchema>) => {
  const client = getClient();

  try {
    const response = await client.mutate({
      mutation: UPDATE_MESSAGE,
      variables:values ,
    });

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Error updating Channel');
  }
};

export const deleteAttachment = async (channelId: string) => {
  const client = getClient();

  try {
    const response = await client.mutate({
      mutation: DELETE_MESSAGE,
      variables: { channelId },
    });
    revalidatePath("/")
    return response;
    
  } catch (error: any) {
    revalidatePath("/")
    console.error('Error deleting Channel:', error.message);
    throw new Error(`Error deleting Channel: ${error.message}`);
  }
};

