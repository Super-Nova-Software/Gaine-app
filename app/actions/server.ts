"use server";
import { ADD_MEMBER_TO_SERVER, ADD_ROLE_TO_MEMBER, CREATE_INVITE, CREATE_SERVER, CREATE_SERVER_ROLE, DELETE_MEMBER_FROM_SERVER, DELETE_SERVER, DELETE_SERVER_ROLE, REMOVE_ROLE_FROM_MEMBER, UPDATE_SERVER, UPDATE_SERVER_ROLE, USE_INVITE } from '@/graphql/mutation/server';
import { getClient } from '@/lib/apollo-client';
import { CreateServerRoleSchema, CreateServerSchema } from '@/schemas';
import { revalidatePath } from 'next/cache';

import { z } from 'zod';

const client = getClient();
export const createServer = async (values: z.infer<typeof CreateServerSchema>) => {
  try {
    const response = await client.mutate({
      mutation: CREATE_SERVER,
      variables: values,
    });
    revalidatePath("/main");
    return response;
  } catch (error: any) {
    revalidatePath("/main");
    console.error('Error creating server:', error);
    throw new Error(`Error creating server: ${error.message}`);
  }
};

export const updateServer = async (values: z.infer<typeof CreateServerSchema>) => {
  try {
    const response = await client.mutate({
      mutation: UPDATE_SERVER,
      variables: values,
    });
    revalidatePath("/main");
    return response;
  } catch (error: any) {
    revalidatePath("/main");
    console.error('Error updating server:', error);
    throw new Error(`Error updating server: ${error.message}`);
  }
};

export const deleteServer = async (serverId: string) => {
  try {
    const response = await client.mutate({
      mutation: DELETE_SERVER,
      variables: { serverId },
    });
    revalidatePath("/main");
    return response;
  } catch (error: any) {
    revalidatePath("/main");
    console.error('Error deleting server:', error);
    throw new Error(`Error deleting server: ${error.message}`);
  }
};

export const createServerRole = async (values: z.infer<typeof CreateServerRoleSchema>) => {
  try {
    const response = await client.mutate({
      mutation: CREATE_SERVER_ROLE,
      variables: values,
    });
    revalidatePath("/main");
    return response;
  } catch (error: any) {
    revalidatePath("/main");
    console.error('Error creating server role:', error);
    throw new Error(`Error creating server role: ${error.message}`);
  }
};

export const updateServerRole = async (variables: any) => {
  try {
    const response = await client.mutate({
      mutation: UPDATE_SERVER_ROLE,
      variables,
    });
    revalidatePath("/main");
    return response;
  } catch (error: any) {
    revalidatePath("/main");
    console.error('Error updating server role:', error);
    throw new Error(`Error updating server role: ${error.message}`);
  }
};

export const deleteServerRole = async (id: number) => {
  try {
    const response = await client.mutate({
      mutation: DELETE_SERVER_ROLE,
      variables: { id },
    });
    revalidatePath("/main");
    return response;
  } catch (error: any) {
    revalidatePath("/main");
    console.error('Error deleting server role:', error);
    throw new Error(`Error deleting server role: ${error.message}`);
  }
};

export const addRoleToMember = async (roleId: number, memberId: string) => {
  try {
    const response = await client.mutate({
      mutation: ADD_ROLE_TO_MEMBER,
      variables: { roleId, memberId },
    });
    revalidatePath("/main");
    return response;
  } catch (error: any) {
    revalidatePath("/main");
    console.error('Error adding role to member:', error);
    throw new Error(`Error adding role to member: ${error.message}`);
  }
};

export const removeRoleFromMember = async (roleId: number, memberId: string) => {
  try {
    const response = await client.mutate({
      mutation: REMOVE_ROLE_FROM_MEMBER,
      variables: { roleId, memberId },
    });
    revalidatePath("/main");
    return response;
  } catch (error: any) {
    revalidatePath("/main");
    console.error('Error removing role from member:', error);
    throw new Error(`Error removing role from member: ${error.message}`);
  }
};

export const addMemberToServer = async (userId: string, serverId: string) => {
  try {
    const response = await client.mutate({
      mutation: ADD_MEMBER_TO_SERVER,
      variables: { userId, serverId },
    });
    revalidatePath("/main");
    return response;
  } catch (error: any) {
    revalidatePath("/main");
    console.error('Error adding member to server:', error);
    throw new Error(`Error adding member to server: ${error.message}`);
  }
};

export const deleteMemberFromServer = async (memberId: string) => {
  try {
    const response = await client.mutate({
      mutation: DELETE_MEMBER_FROM_SERVER,
      variables: { memberId },
    });
    revalidatePath("/main");
    return response;
  } catch (error: any) {
    revalidatePath("/main");
    console.error('Error deleting member from server:', error);
    throw new Error(`Error deleting member from server: ${error.message}`);
  }
};

export const createInvite = async (variables: any) => {
  try {
    const response = await client.mutate({
      mutation: CREATE_INVITE,
      variables,
    });
    revalidatePath("/main");
    return response;
  } catch (error: any) {
    revalidatePath("/main");
    console.error('Error creating invite:', error);
    throw new Error(`Error creating invite: ${error.message}`);
  }
};

export const useInvite = async (code: string) => {
  try {
    const response = await client.mutate({
      mutation: USE_INVITE,
      variables: { code },
    });
    revalidatePath("/main");
    return response;
  } catch (error: any) {
    revalidatePath("/main");
    console.error('Error using invite:', error);
    throw new Error(`Error using invite: ${error.message}`);
  }
};