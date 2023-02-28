/* eslint-disable @next/next/no-img-element */
'use client';

import NewChat from './NewChat';
import ChatRow from './ChatRow';
import { useSession, signOut } from 'next-auth/react';
import { db } from '@/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';

function Sidebar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session && query(collection(db, 'users', session.user?.email!, 'chats'), orderBy('createdAt', 'asc'))
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>{/* Select Chat Model */}</div>

          {/* Map through Chat Rows */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} className="border border-gray-700 chatRow" />
          ))}
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="user-image"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
}

export default Sidebar;
