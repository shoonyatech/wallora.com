/* eslint-disable react/no-array-index-key */
import { gql, useQuery } from '@apollo/client'
import { Button } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'

import { getDate } from '../../../lib/date-helper'
import Loader from '../../common/Loader'
import Dropdown from './Dropdown'

const useStyles = makeStyles(() =>
  createStyles({
    todayHeader: {
      borderWidth: '0 2px 2px 2px',
      borderStyle: 'solid',
      boxSizing: 'border-box',
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
      borderWidth: '0 2px 2px 2px',
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
    balance: {
      marginTop: '-68px',
      cursor: 'pointer',
      '&:hover': {
        background: 'white',
      },
    },
    net: {
      display: 'inline-block',
      alignItems: 'center',
      width: '20px',
      marginLeft: '145px',
    },
    graph: {
      height: '25px',
      marginLeft: '30px',
      display: 'none',
      '&:hover': {
        display: 'flex',
      },
    },
    dropdown: {
      position: 'absolute',
      marginLeft: '100px',
      border: '2px solid #c54582',
      marginTop: '-25px',
      height: '330px',
      borderTop: 'none',
      width: '1000px',
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

const NET_BALANCE = gql`
  query ActualsDates($startMonth: String!, $endMonth: String!) {
    totalMonthsAmount(startMonth: $startMonth, endMonth: $endMonth) {
      month
      totalPlannedIncome
      totalPlannedExpenses
    }
    charts {
      banks {
        balance
      }
      cashAtHome {
        amount
      }
      creditCards {
        outstandingBalance
      }
    }
  }
`

function FinanceMonthHeader({ endMonth, startMonth, activeColumn }: any) {
  const { loading, error, data } = useQuery(GET_HEADINGS, {
    variables: { startMonth: startMonth.format('YYYYMM'), endMonth: endMonth.format('YYYYMM') },
  })
  const {
    loading: netBalanceLoading,
    error: netBalanceError,
    data: netBalanceData,
  } = useQuery(NET_BALANCE, {
    variables: { startMonth: startMonth.format('YYYYMM'), endMonth: endMonth.format('YYYYMM') },
  })
  const [isActive, setIsActive] = React.useState(false)
  const classes = useStyles()
  const todayDisplayDate = getDate()

  const { banks, creditCards } = netBalanceData?.charts || {}
  const bankTotal = banks?.reduce((acc: number, curr: any) => acc + curr.balance, 0)
  const creditCardTotal = creditCards?.reduce((acc: number, curr: any) => acc + curr.outstandingBalance, 0)

  const cashAtHome = netBalanceData?.charts?.cashAtHome?.amount || 0
  const totalBank = bankTotal
  const totalCredit = creditCardTotal
  const totalCash = cashAtHome
  const net = totalBank - totalCredit + totalCash

  if (netBalanceLoading || netBalanceError) {
    return (
      <div>
        <Loader open={netBalanceLoading} error={netBalanceError} />
      </div>
    )
  }

  if (loading || error)
    return (
      <div>
        <Loader open={loading} error={error} />
      </div>
    )

  const { totalMonthsAmount } = netBalanceData
  const totalPlannedIncome = totalMonthsAmount.map((month: any) => month.totalPlannedIncome)
  const totalPlannedExpenses = totalMonthsAmount.map((month: any) => month.totalPlannedExpenses)

  const plannedIncome = totalPlannedIncome.map((month: any) => month)
  const plannedExpense = totalPlannedExpenses.map((month: any) => month)
  const plannedIncomeExpense = plannedIncome.map(
    (month: any, index: number) => plannedIncome[index] - plannedExpense[index]
  )

  const netBalance = plannedIncomeExpense
  const balance = netBalance.map((month: any) => month)
  const monthlyBalance = balance.map((month: any, index: number) => balance[index] + net)

  const months = data.actualMonths

  return (
    <>
      <div>
        <div className="flex">
          {months.map((x: any, columnIndex: any) => {
            const newStyle = todayDisplayDate === x.month ? classes.todayHeader : classes.dateHeader

            return (
              <>
                {columnIndex === 0 && (
                  <div>
                    <p className="bg-plannedExpense h-8 w-24 text-sm text-center">Expenses</p>
                    <p className=" h-8 w-24 mt-2 text-sm text-center">Net Balance</p>
                  </div>
                )}
                <div
                  key={x.month}
                  className={`flex flex-col  ${isEqual(columnIndex, activeColumn) && classes.isActive}`}
                >
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
        {monthlyBalance.map((x: any) => (
          <div className={classes.net}>
            <Button onClick={() => setIsActive(!isActive)} className={classes.balance}>
              {x.toLocaleString()}
              <img className={classes.graph} src="/images/analysis-50x50.jpg" alt="graph" />
            </Button>
          </div>
        ))}
        {isActive && (
          <div className={classes.dropdown}>
            <Dropdown
              plannedIncome={plannedIncome}
              plannedExpense={plannedExpense}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default FinanceMonthHeader
