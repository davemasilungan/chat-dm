/* eslint-disable @next/next/no-img-element */
'use client';

import NewChat from './NewChat';
import ChatRow from './ChatRow';
import ModelSelection from './ModelSelection';
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

          <div className="hidden sm:inline">
            <ModelSelection />
          </div>

          {chats?.docs.map((chat) => (
            <ChatRow className={`border border-gray-700 chatRow`} key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <div onClick={() => signOut()}>
          <img
            referrerPolicy="no-referrer"
            src={session.user?.image!}
            alt="user-image"
            className="border-2 border-slate-700 shadow-lg mt-3 h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          />
          <p className="mb-3 text-xs text-gray-400 text-center">Click To Signout</p>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
