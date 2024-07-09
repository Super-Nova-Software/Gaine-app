import { useEffect, useCallback } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  DrawType,
  CreateDraw,
  UpdateDraw,
  DeleteDraw,
} from "@/graphql/gql/graphql";
import { GET_DRAW } from "@/graphql/queries/draw";
import { CREATE_DRAW, DELETE_DRAW, UPDATE_DRAW } from "@/graphql/mutation/draw";

export const useDraw = (channelId: string) => {
  const { data, loading, error, refetch } = useQuery(GET_DRAW, {
    variables: { channelId },
  });

  const [createDraw] = useMutation<CreateDraw>(CREATE_DRAW);
  const [updateDraw] = useMutation<UpdateDraw>(UPDATE_DRAW);
  const [deleteDraw] = useMutation<DeleteDraw>(DELETE_DRAW);

  useEffect(() => {
    if (error) {
      console.error("Error fetching draw data:", error);
    }
  }, [error]);

  const draw: DrawType | undefined = data?.drawsByChannel;

  const handleCreateDraw = useCallback(
    async (channelId: string, whiteboard: string) => {
      try {
        const response = await createDraw({
          variables: { channelId, whiteboard },
        });
        return response.data?.createDraw?.draw;
      } catch (e) {
        console.error("Error creating draw:", e);
        throw e;
      }
    },
    [createDraw]
  );

  const handleUpdateDraw = useCallback(
    async (id: string, channelId: string, whiteboard: string) => {
      try {
        const response = await updateDraw({
          variables: { id, channelId, whiteboard },
        });
        return response.data?.updateDraw.draw;
      } catch (e) {
        console.error("Error updating draw:", e);
        throw e;
      }
    },
    [updateDraw]
  );

  const handleDeleteDraw = useCallback(
    async (id: string) => {
      try {
        const response = await deleteDraw({
          variables: { id },
        });
        return response.data?.deleteDraw.success;
      } catch (e) {
        console.error("Error deleting draw:", e);
        throw e;
      }
    },
    [deleteDraw]
  );

  return {
    draw,
    loading,
    error,
    refetch,
    createDraw: handleCreateDraw,
    updateDraw: handleUpdateDraw,
    deleteDraw: handleDeleteDraw,
  };
};
