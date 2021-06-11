import { useUser } from '@auth0/nextjs-auth0'
import React from 'react'

import BaseLayout from '../components/BaseLayout'
import MainContent from '../components/home/MainContent'

export default function Home() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return <div>{user ? null : <MainContent />}</div>
}

Home.Layout = BaseLayout
