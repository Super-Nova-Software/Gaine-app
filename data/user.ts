import { GET_USER_BY_CLERKID, GET_USER_BY_EMAIL, GET_USER_BY_ID } from "@/graphql/queries/user";
import { getUserId } from "@/lib/actions";
import { useQuery } from '@apollo/client';

export const getUserByEmail = async (email: string) => {
  const { loading, error, data } = useQuery(GET_USER_BY_EMAIL, {
    variables: { email },
    skip: !email, // Skip query if email is falsy (optional)
  });

  if (loading) return { loading: true };
  if (error) return { error: true };

  return data.userByEmail;
};

export const getUserByClerkId = async () => {
  const ClerkId = await getUserId();
  const { loading, error, data } = useQuery(GET_USER_BY_CLERKID, {
    variables: { ClerkId },
    skip: !ClerkId, // Skip query if ClerkId is falsy (optional)
  });

  if (loading) return { loading: true };
  if (error) return { error: true };

  return data.userByEmail;
};

export const getUserById = async (id: string) => {
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { id },
    skip: !id, // Skip query if id is falsy (optional)
  });

  if (loading) return { loading: true };
  if (error) return { error: true };

  return data.userById;
};


export const userId = "758ab7b4-78f0-4696-86cf-2bd0688bf9a9";