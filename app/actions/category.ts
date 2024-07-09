"use server";
import { CREATE_CHANNEL_CATEGORY, UPDATE_CHANNEL_CATEGORY, DELETE_CHANNEL_CATEGORY } from '@/graphql/mutation/channel';
import { getClient } from '@/lib/apollo-client';
import { ChannelCetagorySchema } from '@/schemas';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export const createCategory = async (values: z.infer<typeof ChannelCetagorySchema>) => {
  const client = getClient();

  try {
    const response = await client.mutate({
      mutation: CREATE_CHANNEL_CATEGORY,
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

export const updateCategory = async (values: z.infer<typeof ChannelCetagorySchema>) => {
  const client = getClient();

  try {
    const response = await client.mutate({
      mutation: UPDATE_CHANNEL_CATEGORY,
      variables:values ,
    });

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Error updating Channel');
  }
};

export const deleteCategory = async (categoryId: string) => {
  const client = getClient();

  try {
    const response = await client.mutate({
      mutation: DELETE_CHANNEL_CATEGORY,
      variables: { categoryId },
    });
    revalidatePath("/")
    return response;
    
  } catch (error: any) {
    revalidatePath("/")
    console.error('Error deleting Channel:', error.message);
    throw new Error(`Error deleting Channel: ${error.message}`);
  }
};

