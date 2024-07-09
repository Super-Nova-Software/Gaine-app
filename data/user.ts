// import {  GET_USER_BY_EMAIL, GET_USER_BY_ID } from "@/graphql/queries/user";
import { getUserId } from "@/lib/actions";
import { useQuery } from '@apollo/client';

// export const getUserByEmail = async (email: string) => {
//   const { loading, error, data } = useQuery(GET_USER_BY_EMAIL, {
//     variables: { email },
//     skip: !email, // Skip query if email is falsy (optional)
//   });

//   if (loading) return { loading: true };
//   if (error) return { error: true };

//   return data.userByEmail;
// };

// export const getUserByClerkId = async () => {
//   const ClerkId = await getUserId();
//   const { loading, error, data } = useQuery(GET_USER_BY_ID, {
//     variables: { ClerkId },
//     skip: !ClerkId, // Skip query if ClerkId is falsy (optional)
//   });

//   if (loading) return { loading: true };
//   if (error) return { error: true };

//   return data.userByEmail;
// };

// export const getUserById = async (id: string) => {
//   const { loading, error, data } = useQuery(GET_USER_BY_ID, {
//     variables: { id },
//     skip: !id, // Skip query if id is falsy (optional)
//   });

//   if (loading) return { loading: true };
//   if (error) return { error: true };

//   return data.userById;
// };


export const userId = "f2c70348-00ed-46e0-8721-edfb05741574";