import { useUser } from '@auth0/nextjs-auth0'
import React from 'react'

import BaseLayout from '../components/common/BaseLayout'
import Loader from '../components/common/Loader'
import PlannedExpensesChart from '../components/dashboard/PlannedExpensesChart'
import ClientSideRendering from '../lib/client-side-rendering'

function DashBoard() {
  const { user, error, isLoading } = useUser()

  if (isLoading || error)
    return (
      <div>
        <Loader open={isLoading} error={error} />
      </div>
    )

  return (
    <ClientSideRendering>
      <div className="ml-8">{user ? <PlannedExpensesChart /> : null}</div>
    </ClientSideRendering>
  )
}

DashBoard.Layout = BaseLayout

export default DashBoard
