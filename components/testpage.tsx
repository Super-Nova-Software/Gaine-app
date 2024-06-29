"use client";
import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Image from "next/image"
const GET_SERVERS_BY_USER = gql`
  query GetServersByUser($userId: UUID!) {
    userServers(userId: $userId) {
      id
      name
      description
      icon
      owner {
        id
        username
      }
    }
  }
`;

const ServersPage = () => {
  // Replace this with actual user ID fetching logic
  const userId = "437b14cd-6c25-4795-83ff-d56e9d71dad5";

  // Fetch servers by user ID
  const { loading, error, data } = useQuery(GET_SERVERS_BY_USER, {
    variables: { userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const servers = data.userServers;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Servers for User {userId}</h1>
      {servers.length === 0 ? (
        <p>No servers found.</p>
      ) : (
        <ul className="space-y-4">
          {servers.map((server) => (
            <li key={server.id} className="shadow rounded-lg p-4">
              <h2 className="text-xl font-bold">{server.name}</h2>
              <p className="text-gray-600">{server.description}</p>
              <p className="text-gray-600">Owner: {server.owner.username}</p>
                <Image
                  src={`http://127.0.0.1:8000/media/${server.icon}`}
                  alt={`${server.name}`}
                  width={300}
                  height={100}
                />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServersPage;
