// actions.ts
import { CREATE_SERVER } from '@/graphql/mutation/server';
import { CreateServerSchema } from '@/schemas';
import { useMutation } from '@apollo/client';
import { z } from 'zod';

export const useCreateServer = () => {
  const [createServerMutation, { data, loading, error }] = useMutation(CREATE_SERVER);

  const createServer = async (values: z.infer<typeof CreateServerSchema>) => {
    try {
      const response = await createServerMutation({
        variables: {
          name: values.name,
          ownerId: values.ownerId,
          icon: values.icon,
        },
      });
      return response.data?.createServer;
    } catch (err) {
      console.error('Failed to create server:', err);
      throw err;
    }
  };

  return { createServer, data, loading, error };
};

export const useUpdateServer = () => {
  const [updateServerMutation, { data, loading, error }] = useMutation(CREATE_SERVER);

  const updateServer = async (values: z.infer<typeof CreateServerSchema>) => {
    try {
      const response = await updateServerMutation({
        variables: {
          name: values.name,
          ownerId: values.ownerId,
          icon: values.icon,
        },
      });
      return response.data?.updateServer; // Assuming you have an updateServer mutation
    } catch (err) {
      console.error('Failed to update server:', err);
      throw err;
    }
  };

  return { updateServer, data, loading, error };
};

export const useDeleteServer = () => {
  const [deleteServerMutation, { data, loading, error }] = useMutation(CREATE_SERVER);

  const deleteServer = async (values: z.infer<typeof CreateServerSchema>) => {
    try {
      const response = await deleteServerMutation({
        variables: {
           values, // Adjust this based on your delete mutation requirements
        },
      });
      return response.data?.deleteServer; // Assuming you have a deleteServer mutation
    } catch (err) {
      console.error('Failed to delete server:', err);
      throw err;
    }
  };

  return { deleteServer, data, loading, error };
};
