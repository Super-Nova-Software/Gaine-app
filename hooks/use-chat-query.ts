"use client";
import { useQuery } from "@apollo/client";

interface ChatQueryProps {
  query: any;
  variables: {
    [key: string]: any;
  };
}

export const useChatQuery = ({ query, variables }: ChatQueryProps) => {
  const { data, loading, error } = useQuery(query, {
    variables,
  });

  return {
    data,
    loading,
    error,
  };
};
