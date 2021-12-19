import { gql, useQuery } from '@apollo/client'
import { Button } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'

import { getDate, getDateString } from '../../../lib/date-helper'
import Loader from '../../common/Loader'

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

const GET_HEADINGS = gql`
  query ActualsDates($startDate: String!, $endDate: String!) {
    actualsDates(startDate: $startDate, endDate: $endDate) {
      date
      totalSpent
    }
  }
`

export default function FinanceDateHeader({ startDate, endDate, activeColumn }: any) {
  const { loading, error, data } = useQuery(GET_HEADINGS, {
    variables: { startDate: startDate.format('YYYYMMDD'), endDate: endDate.format('YYYYMMDD') },
  })

  const classes = useStyles()
  const todayDisplayDate = getDateString(getDate())

  if (loading || error)
    return (
      <div>
        <Loader open={loading} error={error} />
      </div>
    )
  const dates = data.actualsDates

  return (
    <div className="flex">
      {dates.map((x, columnIndex) => {
        const newStyle = todayDisplayDate === x.date ? classes.todayHeader : classes.dateHeader

        return (
          <div key={x.date} className={`flex flex-col  ${isEqual(columnIndex, activeColumn) && classes.isActive}`}>
            <Button
              disableRipple
              size="small"
              variant="contained"
              className={`${newStyle} ${isEqual(columnIndex, activeColumn) && classes.isActiveDate}`}
            >
              {x.date}
            </Button>
            <Button disableRipple size="small" variant="contained" className={classes.values}>
              {x.totalSpent}
            </Button>
          </div>
        )
      })}
    </div>
  )
}
