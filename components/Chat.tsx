'use client';

import React from 'react';
import Message from '@/components/Message';
import { orderBy, collection, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import ArrowDownCircleIcon from '@heroicons/react/24/solid/ArrowDownCircleIcon';

type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {
  const { data: session } = useSession();
  const [messages] = useCollection(
    session &&
      query(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), orderBy('createdAt', 'asc'))
  );

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {messages?.empty && (
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="mb-10 text-center text-white text-lg">Type in a prompt below to get started</p>
          <ArrowDownCircleIcon className="h-16 w-16 mx-auto text-white animate-bounce" />
        </div>
      )}
      {messages?.docs.reverse().map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
}

export default Chat;
