import { Button } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Moment } from 'moment'
import React from 'react'

import { getDate, getDateString } from '../../../lib/date-helper'

function createDate(date: Moment, value: number) {
  return { date: getDateString(date), value }
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
  const dates = []
  const classes = useStyles()
  const todayDisplayDate = getDateString(getDate())

  for (let i = startDate.clone(), j = 0; i.diff(endDate, 'days') <= 0; i.add(1, 'days')) {
    dates.push(createDate(i, j))
    j += 1
  }

  return (
    <div className="text-right">
      {dates.map((x) => {
        const newStyle = todayDisplayDate === x.date ? classes.todayHeader : classes.dateHeader
        return (
          <Button disableRipple key={x.value} size="small" variant="contained" className={newStyle}>
            {x.date}
          </Button>
        )
      })}
      <br />
      {dates.map((x) => (
        <Button disableRipple key={x.value} size="small" variant="contained" className={classes.values}>
          {x.value}
        </Button>
      ))}
    </div>
  )
}
