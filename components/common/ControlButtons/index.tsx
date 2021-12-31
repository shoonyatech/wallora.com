import { Button, makeStyles } from '@material-ui/core'
import React from 'react'

import { dateAfterDays, dateBeforeDays, startDateAfterMonths, startDateBeforeMonths } from '../../../lib/date-helper'

const useStyles = makeStyles({
  button: {
    marginLeft: '0.5rem',
    fontSize: '1rem',
    textTransform: 'none',
  },
})

function ControlButtons({ dateColumns, values, setValues }: any) {
  const classes = useStyles()
  return (
    <div>
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
  )
}

export default ControlButtons
