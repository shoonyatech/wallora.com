import React, { useState } from 'react'

import ExpensePanelRows from '.'

export default {
  title: 'ExpensePanelRows',
  component: ExpensePanelRows,
}

const Template = () => {
  const [totalValues, setTotalValues] = useState({
    rows: [
      {
        currency: 10,
        amount: 0,
        comment: '',
        tags: '',
        person: '',
      },
    ],
  })

  const handleRemoveSpecificRow = (idx: any) => () => {
    const rows = [...totalValues.rows]
    rows.splice(idx, 1)

    if (rows.length === 0) {
      setTotalValues({
        rows: [
          {
            currency: 10,
            amount: 0,
            comment: '',
            tags: '',
            person: '',
          },
        ],
      })
    } else {
      setTotalValues({ rows })
    }
  }

  const handleChange = (idx: number) => (e: any) => {
    const { name, value }: { name: string; value: string | number } = e.target
    const rows = [...totalValues.rows]
    rows[idx] = {
      ...rows[idx],
      [name]: value,
    }
    setTotalValues({
      rows,
    })
  }

  const currencyList = ['INR', '$', 'YUH']
  const defaultCurrency = '$'

  return (
    <ExpensePanelRows
      totalValues={totalValues}
      handleChange={handleChange}
      handleRemoveSpecificRow={handleRemoveSpecificRow}
      currencyList={currencyList}
      defaultCurrency={defaultCurrency}
    />
  )
}

export const Default = Template.bind({})
