import { ApolloProvider } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useToggle } from 'react-use'

import GetApolloClient from '../../../apis/apollo.client'
import SummaryInfo from '.'

export default {
  title: 'SummaryInfo',
  component: SummaryInfo,
}
const { worker } = require('../../../src/mocks/browser')

const Template = () => {
  const [summaryModal] = useToggle(false)
  const [workItemInfo] = useState('')
  const [mockData, setMockData] = useState()

  if (process.env.NODE_ENV === 'development') {
    worker.start()
  }

  useEffect(() => {
    fetch(`${process.env.WALLORA_BACKEND_WORKITEM_CURRENTMONTH}`)
      .then((res) => res.json())
      .then((data) => {
        setMockData(data)
      })
  }, [])

  return (
    <ApolloProvider client={GetApolloClient()}>
      <SummaryInfo summaryModal={summaryModal} workItemInfo={workItemInfo} mockData={mockData} />
    </ApolloProvider>
  )
}

export const Default = Template.bind({})
