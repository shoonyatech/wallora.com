import { gql, useQuery } from '@apollo/client'
import { Button, createStyles, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useToggle } from 'react-use'

import ClientSideRendering from '../../../lib/client-side-rendering'
import { getMantissa } from '../../../lib/string-parse-helper'
import Loader from '../../common/Loader'
import ExpensePanelDetails from '../ExpensePanelDetails'

const GET_CURRENCY_DETAILS = () => gql`
  query Chart {
    user {
      userSettings {
        currency
        # accountId
      }
      currencies {
        symbol
      }
    }
  }
`

const useStyles = makeStyles(() =>
  createStyles({
    deleteButton: {
      color: 'white',
      background: '#f16c6c',
      '&:hover': {
        background: '#f16c6c',
      },
    },
  })
)

export default function IncomeExpenseBrick() {
  const classes = useStyles()
  const [isOn, toggleIsOn] = useToggle(false)
  const [amount, updateAmountSum] = useState(0.0)
  const [totalValues, setTotalValues] = useState({
    rows: [
      {
        currency: '',
        amount: 0,
        comment: '',
        tags: '',
        person: '',
      },
    ],
  })

  const { loading, error, data } = useQuery(GET_CURRENCY_DETAILS())

  if (loading || error)
    return (
      <div>
        <Loader open={loading} error={error} />
      </div>
    )

  const currencyList = data.user.currencies.map((x: any) => x.symbol) // ['INR', '$', 'YUH']
  const { currency } = data.user.userSettings // '$'

  // setTotalValues({ rows: [...totalValues.rows, currency] })

  return (
    <ClientSideRendering>
      <div className="ml-24">
        <Button
          size="large"
          type="submit"
          color="primary"
          className={classes.deleteButton}
          onClick={toggleIsOn}
          onKeyPress={toggleIsOn}
        >
          <div className="text-sm">{currency}</div>
          <div className="text-lg">{amount.toString().split('.')[0]}</div>
          <div className="text-sm">{getMantissa(amount)}</div>
        </Button>
        {isOn ? (
          <div>
            <ExpensePanelDetails
              toggleIsOn={toggleIsOn}
              totalValues={totalValues}
              setTotalValues={setTotalValues}
              updateAmountSum={updateAmountSum}
              currencyList={currencyList}
              currency={currency}
            />
          </div>
        ) : null}
      </div>
    </ClientSideRendering>
  )
}
