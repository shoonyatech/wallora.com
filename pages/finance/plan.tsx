import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { Button, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

import FinanceMonthHeader from '../../components/finance/FinanceMonthHeader'
import FinanceSwitch from '../../components/finance/FinanceSwitch'
import { dateAfterDays, dateBeforeDays, startDateAfterMonths, startDateBeforeMonths } from '../../lib/date-helper'

const useStyles = makeStyles({
  button: {
    marginLeft: '0.5rem',
    fontSize: '1rem',
    textTransform: 'none',
  },
})

export default withPageAuthRequired(() => {
  const classes = useStyles()
  const marginLeft = 384
  const spreadSheetWidth = window.innerWidth - marginLeft
  const cellWidth = 160
  const dateColumns = Math.ceil(spreadSheetWidth / cellWidth)

  const [values, setValues] = useState({
    // startMonth should be the current month
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
        <Button
          size="medium"
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() =>
            setValues({
              startMonth: startDateAfterMonths(values.startMonth, 10),
              endMonth: dateAfterDays(dateColumns, startDateAfterMonths(values.endMonth, 10)),
            })
          }
        >
          &lt;&lt;
        </Button>
        <Button
          size="medium"
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() =>
            setValues({
              startMonth: dateBeforeDays(10, values.startMonth),
              endMonth: dateBeforeDays(10, values.endMonth),
            })
          }
        >
          &lt;
        </Button>
        <Button
          size="medium"
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() =>
            setValues({
              startMonth: dateBeforeDays(dateColumns / 2 - 1),
              endMonth: dateAfterDays(dateColumns / 2 + 1),
            })
          }
        >
          This Month
        </Button>
        <Button
          size="medium"
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() =>
            setValues({
              startMonth: dateAfterDays(10, values.startMonth),
              endMonth: dateAfterDays(10, values.endMonth),
            })
          }
        >
          &gt;
        </Button>
        <Button
          size="medium"
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() =>
            setValues({
              startMonth: startDateBeforeMonths(values.startMonth, -10),
              endMonth: dateAfterDays(dateColumns, startDateBeforeMonths(values.endMonth, -10)),
            })
          }
        >
          &gt;&gt;
        </Button>
      </div>
    </div>
  )
})
