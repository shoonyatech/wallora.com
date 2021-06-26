import React from 'react'

import BaseLayout from '../components/common/BaseLayout'
import PlannedExpensesChart from '../components/dashboard/PlannedExpensesChart'
import PredictedSavingsChart from '../components/dashboard/PredictedSavingsChart'
import UserSettings from '../components/dashboard/UserSettings'
import ClientSideRendering from '../lib/client-side-rendering'

function DashBoard() {
  return (
    <ClientSideRendering>
      <UserSettings />
      <div className="ml-8">
        <PredictedSavingsChart />
        <PlannedExpensesChart />
      </div>
    </ClientSideRendering>
  )
}

DashBoard.Layout = BaseLayout

export default DashBoard
