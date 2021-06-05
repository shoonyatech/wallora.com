import { useUser } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import React from 'react'

import Bottom from '../components/Bottom'
import FeedBack from '../components/Feedback'
import Top from '../components/Top'

export default function Home() {
  const { user, error, isLoading } = useUser()
  let bodyContent

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  if (user) {
    bodyContent = (
      <h1 className="ml-8">
        Welcome to <a href="https://wallora.com">Wallora.com!</a>
        <br />
        Wallora {user.name}!
      </h1>
    )
  } else {
    bodyContent = <h1 className="text-primary">Please Login</h1>
  }

  return (
    <div className="container min-w-full grid-cols-1 grid-rows-3 h-screen">
      <Head>
        <title>Wallora</title>
        <link rel="icon" href="assets/favicon.ico" />
        <link rel="manifest" href="assets/site.webmanifest" />
        <link rel="mask-icon" href="assets/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png" />
        <meta name="apple-mobile-web-app-title" content="wallora" />
        <meta name="application-name" content="wallora" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%26display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <Top user={user} />
      <main>
        <h1 className="bg-app-background h-screen pl-10 mt-2 pt-10">
          {bodyContent} <FeedBack />
        </h1>
      </main>
      <Bottom user={user} />
    </div>
  )
}
