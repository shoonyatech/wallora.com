import { useUser } from '@auth0/nextjs-auth0'
import React from 'react'

import BaseLayout from '../components/common/BaseLayout'
import Loader from '../components/common/Loader'
import FinanceDateHeader from '../components/finance/FinanceDateHeader'
import { dateAfterDays, dateBeforeDays } from '../lib/date-helper'

function Finance() {
  const { user, isLoading, error } = useUser()

  if (isLoading || error)
    return (
      <div>
        <Loader open={isLoading} error={error} />
      </div>
    )

  // TODO: add useOrientation using custom hook.
  const startDate = dateBeforeDays(3)
  const endDate = dateAfterDays(3)

  return <div>{user ? <FinanceDateHeader startDate={startDate} endDate={endDate} /> : null}</div>
}

Finance.Layout = BaseLayout

export default Finance
