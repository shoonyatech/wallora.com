/* eslint-disable react/jsx-props-no-spreading */
import { ApolloProvider } from '@apollo/client'
import React from 'react'

import GetApolloClient from '../../../apis/apollo.client'
import PredictedSavingsChart from '.'

export default {
  title: 'PredictedSavingsChart',
  component: PredictedSavingsChart,
}

const Template = () => (
  <ApolloProvider client={GetApolloClient()}>
    <PredictedSavingsChart />
  </ApolloProvider>
)

export const Default = Template.bind({})
