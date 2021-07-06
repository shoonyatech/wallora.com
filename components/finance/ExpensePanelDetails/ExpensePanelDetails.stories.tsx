/* eslint no-unused-vars: "error" */
import React, { useState } from 'react'
import { useToggle } from 'react-use'

import ExpensePanelDetails from '.'

export default {
  title: 'ExpensePanelDetails',
  component: ExpensePanelDetails,
}

const Template = () => {
  const [toggleIsOn] = useToggle(false)

  const [totalValues, setTotalValues] = useState({
    rows: [
      {
        currency: 10,
        amount: 0,
        comment: 'comment',
        tags: 'tags',
        person: 'person',
      },
    ],
  })

  const currencyList = ['INR', '$', 'YUH']
  const defaultCurrency = '$'

  return (
    <ExpensePanelDetails
      toggleIsOn={toggleIsOn}
      totalValues={totalValues}
      setTotalValues={setTotalValues}
      currencyList={currencyList}
      defaultCurrency={defaultCurrency}
    />
  )
}

export const Default = Template.bind({})
