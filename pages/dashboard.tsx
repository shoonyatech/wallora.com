import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import React from 'react'

import PlannedExpensesChart from '../components/dashboard/PlannedExpensesChart'
import PredictedSavingsChart from '../components/dashboard/PredictedSavingsChart'
import UserSettings from '../components/dashboard/UserSettings'
import ClientSideRendering from '../lib/client-side-rendering'

export default withPageAuthRequired(() => (
  <ClientSideRendering>
    <UserSettings />
    <div className="ml-8">
      <PredictedSavingsChart />
      <PlannedExpensesChart />
    </div>
  </ClientSideRendering>
))
