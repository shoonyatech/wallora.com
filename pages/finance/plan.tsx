import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import React from 'react'

import FinanceSwitch from '../../components/finance/FinanceSwitch'

export default withPageAuthRequired(() => (
  <div className="grid grid-cols-financeHeader h-16">
    <FinanceSwitch actualOrPlan="Plan" />
  </div>
))
