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

  const months = data.actualMonths

  return (
    <div className="flex">
      {months.map((x: any, columnIndex: any) => {
        const newStyle = todayDisplayDate === x.month ? classes.todayHeader : classes.dateHeader

        return (
          <>
            {columnIndex === 0 && (
              <div>
                <p className="bg-plannedExpense h-8 w-8 text-sm text-center">Expenses</p>
                <p className=" h-8 w-24 mt-4 text-sm text-center">Net Balance</p>
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
