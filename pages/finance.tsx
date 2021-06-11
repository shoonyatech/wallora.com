import { useUser } from '@auth0/nextjs-auth0'
import React from 'react'

import BaseLayout from '../components/BaseLayout'
import FinanceDateHeader from '../components/finance/FinanceDateHeader'

function Finance() {
  const { user, isLoading, error } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  // TODO: add useOrientation using custom hook.
  const left = -5
  const right = 4

  return <div className="h-screen">{user ? <FinanceDateHeader left={left} right={right} /> : null}</div>
}

Finance.Layout = BaseLayout

export default Finance
