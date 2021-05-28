/* eslint-disable react/jsx-props-no-spreading */
import '../styles/global.css'

import { ApolloProvider } from '@apollo/client/react'
import { UserProvider } from '@auth0/nextjs-auth0'
import { ThemeProvider } from '@material-ui/styles'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import GetApolloClient from '../apis/apollo.client'
import * as ga from '../lib/ga'
import MaterialUiTheme from '../styles/material.ui.theme.provider'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }

    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ApolloProvider client={GetApolloClient()}>
      <ThemeProvider theme={MaterialUiTheme}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
