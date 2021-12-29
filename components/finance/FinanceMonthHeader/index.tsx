/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import { gql, useQuery } from '@apollo/client'
import { Button } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'

import { getMonth } from '../../../lib/date-helper'
import Loader from '../../common/Loader'

const useStyles = makeStyles(() =>
  createStyles({
    todayHeader: {
      borderRadius: 0,
      color: 'white',
      width: '10rem',
      fontWeight: 300,
      background: '#389bb7',
      '&:hover': {
        background: '#389bb7',
        fontWeight: 600,
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
        fontWeight: 600,
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
      background: '#255d6d',
      '&:hover': {
        background: '#255d6d',
      },
    },
    expenses: {
      backgroundColor: '#ffd2ad',
      borderRight: '1px solid #fff',
      height: '20px',
      width: '6rem',
      textAlign: 'center',
      fontSize: '0.9rem',
    },
    netBalance: {
      borderRight: '1px solid #fff',
      marginTop: '10px',
      width: '6rem',
      fontSize: '0.9rem',
      textAlign: 'center',
    },
  })
)

const isEqual = (a: any, b: any): Boolean => a <= b && a >= b

const GET_HEADINGS = gql`
  query ActualsDates($startMonth: String!, $endMonth: String!) {
    actualMonths(startMonth: $startMonth, endMonth: $endMonth) {
      month
    }
  }
`

function FinanceMonthHeader({ endMonth, startMonth, activeColumn }: any) {
  const { loading, error, data } = useQuery(GET_HEADINGS, {
    variables: { startMonth: startMonth.format('YYYYMM'), endMonth: endMonth.format('YYYYMM') },
  })

  const classes = useStyles()
  const todayDisplayDate = getMonth()

  if (loading || error)
    return (
      <div>
        <Loader open={loading} error={error} />
      </div>
    )
  // months should be in name format (e.g. January) not number format (e.g. 01)
  const months = data.actualMonths
  // const months = data.actualMonths
  // const months = data.actualMonths
  console.log(months)

  return (
    <div className="flex">
      {months.map((x: any, columnIndex: any) => {
        const newStyle = todayDisplayDate === x.month ? classes.todayHeader : classes.dateHeader

        return (
          <>
            {columnIndex === 0 && (
              <div>
                <p className={classes.expenses}>Expenses</p>
                <p className={classes.netBalance}>Net Balance</p>
              </div>
            )}
            <div key={x.month} className={`flex flex-col  ${isEqual(columnIndex, activeColumn) && classes.isActive}`}>
              <Button
                size="small"
                variant="contained"
                className={`${newStyle} ${isEqual(columnIndex, activeColumn) && classes.isActiveDate}`}
              >
                {x.month.toLocaleString('default', { month: 'long' })}
              </Button>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default FinanceMonthHeader
