import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { Button, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

import FinanceCategories from '../../components/finance/FinanceCategories'
import FinanceDateHeader from '../../components/finance/FinanceDateHeader'
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
    startDate: dateBeforeDays(Math.floor(dateColumns / 2)),
    endDate: dateAfterDays(Math.ceil(dateColumns / 2 - 1)),
  })
  const [activeCell, setActiveCell] = useState([0, 0])

  return (
    <div>
      <div>
        <div className="grid grid-cols-financeHeader h-16">
          <FinanceSwitch actualOrPlan="Actual" />
          <FinanceDateHeader startDate={values.startDate} endDate={values.endDate} activeColumn={activeCell[1]} />
        </div>
        <div className="flex">
          <FinanceCategories
            columns={dateColumns}
            activeCell={activeCell}
            setActiveCell={(cell: any) => setActiveCell(cell)}
          />
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
                startDate: startDateAfterMonths(values.startDate, 1),
                endDate: dateAfterDays(dateColumns, startDateAfterMonths(values.endDate, 1)),
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
                startDate: dateBeforeDays(1, values.startDate),
                endDate: dateBeforeDays(1, values.endDate),
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
                startDate: dateBeforeDays(dateColumns / 2 - 1),
                endDate: dateAfterDays(dateColumns / 2 + 1),
              })
            }
          >
            Today
          </Button>
          <Button
            size="medium"
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() =>
              setValues({
                startDate: dateAfterDays(1, values.startDate),
                endDate: dateAfterDays(1, values.endDate),
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
                startDate: startDateBeforeMonths(values.startDate, -1),
                endDate: dateAfterDays(dateColumns, startDateBeforeMonths(values.endDate, -1)),
              })
            }
          >
            &gt;&gt;
          </Button>
        </div>
      </div>
    </div>
  )
})
