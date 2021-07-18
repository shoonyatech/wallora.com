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
      width: '10rem',
      fontWeight: 300,
      background: '#255d6d',
      '&:hover': {
        background: '#255d6d',
      },
    },
    dateHeader: {
      borderRadius: 0,
      color: 'white',
      width: '10rem',
      fontWeight: 300,
      background: '#389bb7',
      '&:hover': {
        background: '#389bb7',
      },
    },
    values: {
      borderRadius: 0,
      width: '10rem',
      background: '#ffd2ad',
      '&:hover': {
        background: '#ffd2ad',
      },
    },
    isActive: {
      borderWidth: '0 2px',
      borderStyle: 'solid',
      boxSizing: 'border-box',
    },
    isActiveDate: {
      fontWeight: 700,
    },
  })
)

const isEqual = (a: any, b: any): Boolean => a <= b && a >= b

export default function FinanceDateHeader({ startDate, endDate, activeColumn }: any) {
  const dates = []
  const classes = useStyles()
  const todayDisplayDate = getDateString(getDate())

  for (let i = startDate.clone(), j = 0; i.diff(endDate, 'days') <= 0; i.add(1, 'days')) {
    dates.push(createDate(i, j))
    j += 1
  }

  return (
    <div className="flex">
      {dates.map((x, columnIndex) => {
        const newStyle = todayDisplayDate === x.date ? classes.todayHeader : classes.dateHeader

        return (
          <div key={x.value} className={`flex flex-col  ${isEqual(columnIndex, activeColumn) && classes.isActive}`}>
            <Button
              disableRipple
              size="small"
              variant="contained"
              className={`${newStyle} ${isEqual(columnIndex, activeColumn) && classes.isActiveDate}`}
            >
              {x.date}
            </Button>
            <Button disableRipple size="small" variant="contained" className={classes.values}>
              {x.value}
            </Button>
          </div>
        )
      })}
    </div>
  )
}
