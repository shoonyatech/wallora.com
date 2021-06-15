import { useUser } from '@auth0/nextjs-auth0'
import React from 'react'

import BaseLayout from '../components/common/BaseLayout'
import Loader from '../components/common/Loader'
import MainContent from '../components/home/MainContent'

export default function Home() {
  const { user, error, isLoading } = useUser()

  if (isLoading || error)
    return (
      <div>
        <Loader open={isLoading} error={error} />
      </div>
    )

  return <div>{user ? null : <MainContent />}</div>
}

Home.Layout = BaseLayout
