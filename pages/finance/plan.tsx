import React from 'react'

import FinanceSwitch from '../../components/finance/FinanceSwitch'

function Plan() {
  return (
    <div className="grid grid-cols-financeHeader h-16">
      <FinanceSwitch actualOrPlan="Plan" />
    </div>
  )
}

export default Plan
