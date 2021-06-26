import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import React from 'react'

import BaseLayout from '../components/common/BaseLayout'
import Loader from '../components/common/Loader'
import MainContent from '../components/home/MainContent'

export default function Home() {
  const router = useRouter()
  const { user, error, isLoading } = useUser()

  if (isLoading || error)
    return (
      <div>
        <Loader open={isLoading} error={error} />
      </div>
    )
  if (user) {
    router.push('/dashboard')
  }
  return (
    <div>
      <MainContent />
    </div>
  )
}

Home.Layout = BaseLayout
