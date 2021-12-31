import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import React, { useState } from 'react'

import ControlButtons from '../../components/common/ControlButtons'
import FinanceMonthHeader from '../../components/finance/FinanceMonthHeader'
import FinanceSwitch from '../../components/finance/FinanceSwitch'
import { dateAfterDays, dateBeforeDays } from '../../lib/date-helper'

export default withPageAuthRequired(() => {
  const marginLeft = 384
  const spreadSheetWidth = window.innerWidth - marginLeft
  const cellWidth = 160
  const dateColumns = Math.ceil(spreadSheetWidth / cellWidth)

  const [values, setValues] = useState({
    startMonth: dateBeforeDays(3),
    endMonth: dateAfterDays(Math.ceil(dateColumns * 22)),
  })
  const [activeCell] = useState([0, 0])

  return (
    <div>
      <div className="grid grid-cols-financeHeader h-16">
        <FinanceSwitch actualOrPlan="Plan" />
        <FinanceMonthHeader startMonth={values.startMonth} endMonth={values.endMonth} activeColumn={activeCell[1]} />
      </div>
      <div className="text-center block w-full bottom-0 m-4">
        <ControlButtons dateColumns={dateColumns} values={values} setValues={setValues} />
      </div>
    </div>
  )
})
