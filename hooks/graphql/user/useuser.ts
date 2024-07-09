import { CREATE_USER } from "@/graphql/mutation/user";
import { GET_USER, GET_USER_FRIENDS, GET_USER_STATUS, GET_USERS } from "@/graphql/queries/user";
import { useMutation, useQuery } from "@apollo/client";

export const useUsers = () => {
    const { loading, error, data } = useQuery(GET_USERS);
    return { loading, error, users: data?.users };
  };
  
  export const useUser = (id: string) => {
    const { loading, error, data } = useQuery(GET_USER, {
      variables: { id }
    });
    return { loading, error, user: data?.user };
  };
  
  export const useUserFriends = (userId: string) => {
    const { loading, error, data } = useQuery(GET_USER_FRIENDS, {
      variables: { userId }
    });
    return { loading, error, friends: data?.userFriends };
  };
  
  export const useUserStatus = (userId: string) => {
    const { loading, error, data } = useQuery(GET_USER_STATUS, {
      variables: { userId }
    });
    return { loading, error, status: data?.userStatus };
  };
  
  export const useCreateUser = () => {
    const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
    return { createUser, data, loading, error };
  };