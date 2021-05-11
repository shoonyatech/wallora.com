import React from 'react';
import Head from "next/head";
import Header from '../components/header';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user, error, isLoading } = useUser();
  let bodyContent;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user)
  {
    bodyContent = 
    <h1>
      Welcome to <a href="https://wallora.com">Wallora.com!</a><br/>
      Wallora {user.name}! <a href="/api/auth/logout">Logout</a>
    </h1>;
  }
  else
  {
    bodyContent = <a href="/api/auth/login">Wallora Login</a>;
  }

  return (
    <div className='container min-w-full grid-cols-1 grid-rows-3 h-screen'>
      <Head>
        <title>Wallora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <h1 className="bg-green-700 h-screen pl-10 mt-2 pt-10">
          {bodyContent}
        </h1>
      </main>
      <footer className="bg-blue-200 p-5 mt-2 ">
        This is footer
      </footer>
    </div>
    );
}
