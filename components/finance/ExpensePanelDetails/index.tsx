import { Button } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'

import ExpensePanelRows from '../ExpensePanelRows/index'

const useStyles = makeStyles(() =>
  createStyles({
    deleteButton: {
      color: 'white',
      background: '#ff5a42',
      '&:hover': {
        background: '#ff5a42',
      },
    },
  })
)

export default function ExpensePanelDetails({
  toggleIsOn,
  totalValues,
  setTotalValues,
  updateAmountSum,
  currencyList,
  defaultCurrency,
  panelPosition,
}: any) {
  const classes = useStyles()
  const handleTotalValues = (valuen: any) => () => {
    setTotalValues(valuen)
    toggleIsOn()
  }

  const handleChange = (idx: number) => (e: any) => {
    const { name, value } = e.target
    const rows = [...totalValues.rows]
    rows[idx] = {
      ...rows[idx],
      [name]: value,
    }
    setTotalValues({
      rows,
    })
  }

  const handleAddRow = () => {
    const item = {
      currency: defaultCurrency,
      amount: 0,
      comment: '',
      tags: '',
      person: '',
    }
    setTotalValues({
      rows: [...totalValues.rows, item],
    })
  }
  const handleRemoveSpecificRow = (idx: any) => () => {
    const rows = [...totalValues.rows]
    if (rows.length === 1) {
      setTotalValues({
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
      toggleIsOn()
    } else {
      rows.splice(idx, 1)
      setTotalValues({ rows })
    }
  }

  const updateAmount = () => {
    updateAmountSum(
      totalValues.rows
        .map((item: any): any => (item.amount !== undefined ? item.amount : 0))
        .reduce((a: number, b: number) => parseFloat(a.toString()) + parseFloat(b.toString()), 0)
    )
  }

  return (
    <div className="rounded absolute z-10 " style={{ left: panelPosition.left, top: panelPosition.top }}>
      <div className="bg-secondary inline-block rounded">
        <ExpensePanelRows
          totalValues={totalValues}
          handleChange={handleChange}
          handleRemoveSpecificRow={handleRemoveSpecificRow}
          currencyList={currencyList}
          defaultCurrency={defaultCurrency}
        />

        <div
          className="flex justify-between mb-2 mr-2"
          onClick={updateAmount}
          onKeyDown={updateAmount}
          role="button"
          tabIndex={0}
        >
          <span className="inline-block ml-2 mt-2 w-1/2">
            <input
              type="image"
              onClick={handleAddRow}
              src="/images/add-25x25.jpg"
              alt="Add button for expense panel row."
            />
          </span>
          <span className="float text-right w-1/2 flex justify-between">
            <Button
              className="mr-10"
              size="large"
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleTotalValues(totalValues)}
            >
              Save all and close
            </Button>
            <Button size="large" type="submit" variant="contained" color="primary" onClick={toggleIsOn}>
              Close
            </Button>
            <Button
              size="large"
              type="submit"
              variant="contained"
              className={classes.deleteButton}
              onClick={handleTotalValues({
                rows: [{}],
              })}
            >
              Delete All
            </Button>
          </span>
        </div>
      </div>
    </div>
  )
}
