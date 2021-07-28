import { gql, useQuery } from '@apollo/client'
import { Button, createStyles, makeStyles } from '@material-ui/core'
import React from 'react'

import ClientSideRendering from '../../../lib/client-side-rendering'
import { getMantissa } from '../../../lib/string-parse-helper'
import Loader from '../../common/Loader'

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
    brick: {
      width: '100%',
      color: 'white',
      background: '#f16c6c',
      '&:hover': {
        background: '#f16c6c',
      },
    },
  })
)

export default function IncomeExpenseBrick({ togglePanel, totalValues, isActiveCell }: any) {
  const classes = useStyles()
  let amount = 0.0

  const { loading, error, data } = useQuery(GET_CURRENCY_DETAILS())

  if (loading || error)
    return (
      <div>
        <Loader open={loading} error={error} />
      </div>
    )

  if (totalValues != null && isActiveCell) {
    amount = totalValues.rows
      .map((item: any): any => (item.amount !== undefined ? item.amount : 0))
      .reduce((a: number, b: number) => parseFloat(a.toString()) + parseFloat(b.toString()), 0)
  }

  // const currencyList = data.user.currencies.map((x: any) => x.symbol) // ['INR', '$', 'YUH']
  const { currency } = data.user.userSettings // '$'

  const handleClick = (e: any) => {
    e.stopPropagation()
    togglePanel()
  }

  return (
    <ClientSideRendering>
      <div className="w-full">
        <Button
          size="large"
          type="submit"
          color="primary"
          className={classes.brick}
          onClick={handleClick}
          onKeyPress={togglePanel}
        >
          <div className="text-sm">{currency}</div>
          <div className="text-lg">{amount.toString().split('.')[0]}</div>
          <div className="text-sm">{getMantissa(amount)}</div>
        </Button>
      </div>
    </ClientSideRendering>
  )
}
