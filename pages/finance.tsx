import { useUser } from '@auth0/nextjs-auth0'
import React from 'react'

import BaseLayout from '../components/common/BaseLayout'
import FinanceDateHeader from '../components/finance/FinanceDateHeader'

function Finance() {
  const { user, isLoading, error } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  // TODO: add useOrientation using custom hook.
  const startDate = new Date('06/12/2021')
  const endDate = new Date('06/16/2021')

  return <div>{user ? <FinanceDateHeader startDate={startDate} endDate={endDate} /> : null}</div>
}

Finance.Layout = BaseLayout

export default Finance
