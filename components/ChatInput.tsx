'use client';

import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { db } from '../firebase';

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState('');
  const { data: session } = useSession();

  const model = 'text-davinci-003';

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt('');

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || 'https://links.papareact.com/89k',
      },
    };

    await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), message);

    const notification = toast.loading('ChatDM is thinking...');

    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      toast.success('ChatDM has responded!', {
        id: notification,
      });
    });
  };

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
        <input
          className="flex-1 text-lg focus:placeholder-opacity-0 bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          value={prompt}
          type="text"
          placeholder="Type your message here..."
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          className="bg-[#11A37F] px-4 py-2 text-white font-bold rounded disabled:cursor-not-allowed disabled:bg-gray-300"
          disabled={!prompt || !session}
          type="submit"
        >
          <PaperAirplaneIcon className="w-6 h-6 -rotate-45" />
        </button>
      </form>
      <div>{/* Modal Selection */}</div>
    </div>
  );
}

export default ChatInput;
