import { Button, createStyles, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useToggle } from 'react-use'

import ClientSideRendering from '../../../lib/client-side-rendering'
import { getMantissa } from '../../../lib/string-parse-helper'
import ExpensePanelDetails from '../ExpensePanelDetails'

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
  const currencyList = ['INR', '$', 'YUH']
  const defaultCurrency = '$'
  const [totalValues, setTotalValues] = useState({
    rows: [
      {
        currency: defaultCurrency,
        amount: 0,
        comment: '',
        tags: '',
        person: '',
      },
    ],
  })

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
          <div className="text-sm">{defaultCurrency}</div>
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
              defaultCurrency={defaultCurrency}
            />
          </div>
        ) : null}
      </div>
    </ClientSideRendering>
  )
}
