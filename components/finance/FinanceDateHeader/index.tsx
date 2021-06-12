import { Button } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'

import DateHelper from '../../../lib/data-helper'

function createData(date: string, value: number) {
  return { date, value }
}

const useStyles = makeStyles(() =>
  createStyles({
    todayHeader: {
      borderRadius: 0,
      color: 'white',
      width: '10.15rem',
      background: '#255d6d',
      '&:hover': {
        background: '#255d6d',
      },
    },
    dateHeader: {
      borderRadius: 0,
      color: 'white',
      width: '10.15rem',
      background: '#389bb7',
      '&:hover': {
        background: '#389bb7',
      },
    },
    values: {
      borderRadius: 0,
      width: '10.15rem',
      background: '#ffd2ad',
      '&:hover': {
        background: '#ffd2ad',
      },
    },
  })
)

export default function FinanceDateHeader({ startDate, endDate }: any) {
  const classes = useStyles()
  const today = new Date()
  const dates = []
  for (let i = new Date(startDate), j = 0; i <= endDate; i.setDate(i.getDate() + 1), j += 1) {
    dates.push(createData(i.toDateString(), j))
  }

  return (
    <div className="text-right">
      {dates.map((x) => {
        const newStyle = today.toString().includes(x.date) === true ? classes.todayHeader : classes.dateHeader
        return (
          <Button disableRipple key={x.value} size="medium" variant="contained" className={newStyle}>
            {DateHelper.getFormattedDate(x.date)}
          </Button>
        )
      })}
      <br />
      {dates.map((x) => (
        <Button disableRipple key={x.value} size="medium" variant="contained" className={classes.values}>
          {x.value}
        </Button>
      ))}
    </div>
  )
}
