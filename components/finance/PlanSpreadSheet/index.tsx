/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
import { gql, useQuery } from '@apollo/client'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import Loader from '../../common/Loader'

const useStyles = makeStyles(() => ({
  amount: {
    width: '10rem',
    textAlign: 'center',
    padding: '5px',
    marginTop: '5px',
    '&:hover': {
      border: '1px solid grey',
      cursor: 'pointer',
    },
  },
  main: {
    marginLeft: '95px',
    marginTop: '70px',
    width: 'min-content',
  },
  outer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dialog: {
    display: 'grid',
  },
  outerBox: {
    width: '786px',
    backgroundColor: '#f4dcf4',
    margin: '40px -4px -4px',
    padding: '0 0 5px 5px',
    height: '150px',
  },
  innerBox: {
    marginTop: '2rem',
  },
  innerBox1: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'end',
  },
  field1: {
    width: '40px',
    height: '35px',
    fontSize: '13px',
    marginRight: '0.5rem',
    borderRadius: '0.3rem',
    paddingLeft: '0.3rem',
  },
  field2: {
    width: '150px',
    height: '35px',
    fontSize: '13px',
    marginRight: '0.5rem',
    borderRadius: '0.3rem',
    paddingLeft: '0.3rem',
  },
  field3: {
    width: '150px',
    height: '35px',
    fontSize: '13px',
    marginRight: '0.5rem',
    borderRadius: '0.3rem',
    paddingLeft: '0.3rem',
  },
  field4: {
    width: '160px',
    height: '35px',
    marginRight: '0.5rem',
    borderRadius: '0.3rem',
    paddingLeft: '0.3rem',
    fontSize: '13px',
  },
  field5: {
    width: '160px',
    height: '35px',
    marginRight: '0.5rem',
    borderRadius: '0.3rem',
    paddingLeft: '0.3rem',
    fontSize: '13px',
  },
  button1: {
    minWidth: '120px',
    height: '35px',
    fontSize: '13px',
  },
  button2: {
    minWidth: '120px',
    height: '35px',
    fontSize: '13px',
    marginLeft: '1rem',
  },
}))

const MONTHLY_DATA = gql`
  query balance($startMonth: String!, $endMonth: String!) {
    monthlyData(startMonth: $startMonth, endMonth: $endMonth) {
      month
      amount
    }
  }
`

// const WORKLY_DATA = gql`
//     query balance($startMonth: String!, $endMonth: String!){
//         worklyData(startMonth: $startMonth, endMonth: $endMonth){
//             name
//             totalPlannedAmount
//             incomeOrExpense
//         }
//     }
// `

function PlanSpreadSheet({ startMonth, endMonth }: any) {
  const { loading, error, data } = useQuery(MONTHLY_DATA, {
    variables: { startMonth: startMonth.format('YYYYMM'), endMonth: endMonth.format('YYYYMM') },
  })
  // const { loading: worklyLoading, error: worklyError, data: worklyData } = useQuery(WORKLY_DATA, {
  //     variables: { startMonth: startMonth.format('YYYYMM'), endMonth: startMonth.format('YYYYMM') },
  // })
  const [isActive, setIsActive] = React.useState(false)
  const [input, setInput] = React.useState({
    Amount: '',
    Comment: '',
    Tags: '',
    Associate: '',
  })
  const classes = useStyles()

  if (loading || error)
    return (
      <div>
        <Loader open={loading} error={error} />
      </div>
    )

  // if( worklyLoading || worklyError)
  // return (
  //     <div>
  //         <Loader open={loading} error={error} />
  //     </div>
  // )

  const { monthlyData } = data
  const monthlyDataLength = monthlyData.length
  const monthlyDataParts = Math.ceil(monthlyDataLength / 15)
  const monthlyDataPartsArray = []
  for (let i = 0; i < monthlyDataParts; i++) {
    monthlyDataPartsArray.push(monthlyData.slice(i * 15, (i + 1) * 15))
  }

  // const workData = worklyData.worklyData
  // console.log(workData)

  // eslint-disable-next-line consistent-return
  function amountColor(amount: number) {
    if (amount >= 150000) {
      return 'rgba(87, 208, 40, 0.318)'
    }
    if (amount === 150000) {
      return 'rgba(87, 208, 40, 0.157)'
    }
    if (amount <= 150000 && amount >= 50000) {
      return 'rgba(87, 208, 40, 0.05)'
    }
    if (amount <= 50000 && amount >= 20000) {
      return 'rgba(241, 108, 108, 0.082)'
    }
    if (amount <= 10000 && amount >= 1000) {
      return 'rgba(241, 108, 108, 0.03)'
    }
    if (amount < 1000) {
      return 'white'
    }
  }

  const submit = () => {
    setIsActive(true)
    setInput({
      Amount: '',
      Comment: '',
      Tags: '',
      Associate: '',
    })
  }

  return (
    <div className={classes.main}>
      <div className={classes.dialog}>
        <div className={classes.outer}>
          {monthlyDataPartsArray.map((monthlyDataPart, index) => (
            <div key={index}>
              {monthlyDataPart.map((monthlyData: any, index: any) => (
                <Button
                  key={index}
                  onClick={() => setIsActive(!isActive)}
                  className={classes.amount}
                  style={{ backgroundColor: amountColor(monthlyData.amount) }}
                >
                  {monthlyData.amount.toLocaleString()}
                </Button>
              ))}
            </div>
          ))}
        </div>
        {isActive && (
          <div className={classes.outerBox}>
            <div className={classes.innerBox}>
              <input type="text" className={classes.field1} value="INR" />
              <input
                type="text"
                className={classes.field2}
                onChange={(e) => setInput({ ...input, Amount: e.target.value })}
                placeholder="Amount"
              />
              <input
                type="text"
                className={classes.field3}
                onChange={(e) => setInput({ ...input, Comment: e.target.value })}
                placeholder="Comment"
              />
              <input
                type="text"
                className={classes.field4}
                onChange={(e) => setInput({ ...input, Tags: e.target.value })}
                placeholder="Tags"
              />
              <input
                type="text"
                className={classes.field5}
                onChange={(e) => setInput({ ...input, Associate: e.target.value })}
                placeholder="Associate with a person"
              />
            </div>
            <div className={classes.innerBox1}>
              <Button onClick={submit} className={classes.button1} variant="contained" color="primary">
                Save All and Close
              </Button>
              <Button
                onClick={() => setIsActive(!isActive)}
                className={classes.button2}
                variant="contained"
                color="primary"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
      {/* {workData.map((work:any, index:any) => (
                <div key={index}>
                    <div>{work.name}</div>
                    </div>
            ))} */}
    </div>
  )
}

export default PlanSpreadSheet
