'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

type Props = {};

function Login(props: Props) {
  return (
    <div
      className="bg-[#202123] h-screen flex flex-col items-center
    justify-center text-center"
    >
      <Image src="/dm_logo_blue.svg" width={250} height={250} alt="logo" />
      <h1 className="text-3xl font-medium text-white mt-8">Welcome to ChatDM</h1>
      <p className="text-white mt-2">Built on ChatGPT API and models.</p>

      <button
        onClick={() => signIn('google')}
        className="bg-[#2A2D33] text-[#5586CE] font-bold text-3xl animate-pulse px-8 pt-4 pb-5 mt-10 border-gray-700 border-2 rounded-full hover:bg-gray-700/70 hover:border-sky-500 cursor-pointer"
      >
        Sign in to use ChatDM
      </button>
    </div>
  );
}

export default Login;
