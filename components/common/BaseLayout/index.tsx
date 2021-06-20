import { useUser } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import React from 'react'

import Bottom from '../Bottom'
import Loader from '../Loader'
import Top from '../Top'

function BaseLayout({ children }: any): React.ReactElement {
  const { user, isLoading, error } = useUser()

  if (isLoading || error)
    return (
      <div>
        <Loader open={isLoading} error={error} />
      </div>
    )

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
      <main className="min-h-screen"> {children} </main>
      <Bottom user={user} />
    </div>
  )
}

export default BaseLayout
