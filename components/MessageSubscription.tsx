// components/MessageSubscription.tsx
"use client";
import React, { useEffect } from 'react';
import { useSubscription } from '@apollo/client';
import { MESSAGE_SENT } from '../graphql/subscriptions';

interface Message {
  id: number;
  content: string;
  sender: {
    id: number;
    username: string;
  };
  timestamp: string;
}

const MessageSubscription: React.FC = () => {
  const { data, loading, error } = useSubscription<{ messageSent: Message }>(MESSAGE_SENT);

  useEffect(() => {
    if (data) {
      console.log('New message:', data.messageSent);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data && (
        <p>
          {data.messageSent.sender.username}: {data.messageSent.content}
        </p>
      )}
    </div>
  );
};

export default MessageSubscription;
