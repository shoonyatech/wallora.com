import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user, error, isLoading } = useUser();
  let bodyContent;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    bodyContent = (
      <h1>
        Welcome to <a href="https://wallora.com">Wallora.com!</a>
        <br />
        Wallora {user.name}!
      </h1>
    );
  } else {
    bodyContent = <h1 className="text-primary">Please Login</h1>;
  }

  return (
    <div className="container min-w-full grid-cols-1 grid-rows-3 h-screen">
      <Head>
        <title>Wallora</title>
        <link rel="icon" href="assets/favicon.ico"></link>
        <link rel="manifest" href="assets/site.webmanifest"></link>
        <link
          rel="mask-icon"
          href="assets/safari-pinned-tab.svg"
          color="#5bbad5"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="images/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="images/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="images/favicon-16x16.png"
        ></link>
        <meta name="apple-mobile-web-app-title" content="wallora" />
        <meta name="application-name" content="wallora" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header user={user} />
      <main>
        <h1 className="bg-app-background h-screen pl-10 mt-2 pt-10">
          {bodyContent}
        </h1>
      </main>
      <Footer />
    </div>
  );
}
