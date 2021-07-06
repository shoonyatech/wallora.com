import { Button, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

import BaseLayout from '../components/common/BaseLayout'
import FinanceCategories from '../components/finance/FinanceCategories'
import FinanceDateHeader from '../components/finance/FinanceDateHeader'
import IncomeExpenseBrick from '../components/finance/IncomeExpenseBrick'
import { dateAfterDays, dateBeforeDays, startDateAfterMonths, startDateBeforeMonths } from '../lib/date-helper'

const useStyles = makeStyles({
  button: {
    marginLeft: '0.5rem',
    fontSize: '1rem',
    textTransform: 'none',
  },
})

function Finance() {
  const classes = useStyles()
  const [values, setValues] = useState({
    dateHeaderCount: 8,
    startDate: dateBeforeDays(3),
    endDate: dateAfterDays(3),
  })
  const [activeCell, setActiveCell] = useState([0, 0])
  const [showPanel, setShowPanel] = useState(true)

  return (
    <div>
      <div>
        <FinanceDateHeader startDate={values.startDate} endDate={values.endDate} />
        <div className="flex">
          <FinanceCategories
            columns={values.dateHeaderCount}
            activeCell={activeCell}
            setShowPanel={setShowPanel}
            setActiveCell={(cell: any) => setActiveCell(cell)}
          />
        </div>
        {showPanel && <IncomeExpenseBrick />}
        <div className="text-center block w-full bottom-0 m-4">
          <Button
            size="medium"
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() =>
              setValues({
                dateHeaderCount: values.dateHeaderCount,
                startDate: startDateAfterMonths(values.startDate, 1),
                endDate: dateAfterDays(values.dateHeaderCount, startDateAfterMonths(values.endDate, 1)),
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
                dateHeaderCount: values.dateHeaderCount,
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
                dateHeaderCount: values.dateHeaderCount,
                startDate: dateBeforeDays(values.dateHeaderCount / 2 - 1),
                endDate: dateAfterDays(values.dateHeaderCount / 2 + 1),
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
                dateHeaderCount: values.dateHeaderCount,
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
                dateHeaderCount: values.dateHeaderCount,
                startDate: startDateBeforeMonths(values.startDate, -1),
                endDate: dateAfterDays(values.dateHeaderCount, startDateBeforeMonths(values.endDate, -1)),
              })
            }
          >
            &gt;&gt;
          </Button>
        </div>
      </div>
    </div>
  )
}

Finance.Layout = BaseLayout

export default Finance
