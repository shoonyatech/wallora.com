/* eslint-disable react/button-has-type */
import { gql, useQuery } from '@apollo/client'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'

import Loader from '../../common/Loader'

const useStyles = makeStyles(() =>
  createStyles({
    main: {
      display: 'flex',
      marginTop: '-20px',
      marginLeft: '-6px',
      width: '50%',
      height: '50px',
    },
    component1: {
      display: 'grid',
    },
    component2: {
      display: 'grid',
      marginTop: '110px',
      marginLeft: '-100px',
    },
    component3: {
      display: 'grid',
      marginTop: '240px',
      marginLeft: '-100px',
    },
    component4: {
      display: 'grid',
      marginTop: '310px',
      marginLeft: '-50px',
    },
    font: {
      fontSize: '15px',
      width: '280px',
      backgroundColor: '#389bb7',
      color: 'white',
      paddingLeft: '200px',
    },
    font2: {
      fontSize: '15px',
      width: '380px',
      color: '#57d028',
      marginTop: '5px',
    },
    font3: {
      color: '#c54582',
      width: '380px',
      fontSize: '15px',
      marginTop: '5px',
    },
    font4: {
      fontSize: '15px',
      width: '280px',
      backgroundColor: '#389bb7',
      color: 'white',
    },
    button: {
      backgroundColor: '#c54582',
      width: '50px',
      height: '30px',
      borderRadius: '5px',
    },
  })
)

const GET_NET_BALANCE = gql`
  query NetBalance {
    charts {
      cashAtHome {
        amount
      }
      banks {
        balance
      }
      creditCards {
        outstandingBalance
      }
    }
  }
`

function Dropdown({ plannedIncome, plannedExpense, isActive, setIsActive }: any) {
  const { loading, error, data } = useQuery(GET_NET_BALANCE)
  const classes = useStyles()

  if (loading || error)
    return (
      <div>
        <Loader open={loading} error={error} />
      </div>
    )
  const { banks, creditCards } = data.charts

  const bankTotal = banks.reduce((acc: any, curr: any) => acc + curr.balance, 0)
  const creditCardTotal = creditCards.reduce((acc: any, curr: any) => acc + curr.outstandingBalance, 0)

  const plannedIncomeMonth = plannedIncome.map((month: any) => month)
  const plannedExpenseMonth = plannedExpense.map((month: any) => month)

  const totalBank = bankTotal
  const totalCredit = creditCardTotal

  return (
    <div className={classes.main}>
      <div className={classes.component1}>
        <p className={classes.font}>Till Today-{'>'}</p>
        <p className={classes.font2}>Available cash in hand: {totalBank.toLocaleString()}</p>
        <p className={classes.font3}>Credit cards outstanding balance: {totalCredit.toLocaleString()}</p>
      </div>
      <div className={classes.component2}>
        <p className={classes.font4}>For remaining days in this month</p>
        <p className={classes.font2}>Yet to earn This month as per plan: {plannedIncomeMonth.toLocaleString()}</p>
        <p className={classes.font3}>Yet to spend This month as per plan: {plannedExpenseMonth.toLocaleString()}</p>
      </div>
      <div className={classes.component3}>
        <p className={classes.font4}>Future months (till Feb 2022)</p>
        {/* <p className={classes.font2}>Planned Income: {total5.toLocaleString()}</p> */}
        {/* <p className={classes.font3}>Planned Expenses: {total6.toLocaleString()}</p> */}
      </div>
      <div className={classes.component4}>
        <button className={classes.button} onClick={() => setIsActive(!isActive)}>
          △
        </button>
      </div>
    </div>
  )
}

export default Dropdown
