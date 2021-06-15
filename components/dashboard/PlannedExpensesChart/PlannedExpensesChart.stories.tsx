import { ApolloProvider } from '@apollo/client'
import React from 'react'

import GetApolloClient from '../../../apis/apollo.client'
import PlannedExpensesChart from '.'

export default {
  title: 'PlannedExpensesChart',
  component: PlannedExpensesChart,
}

const Template = () => (
  <ApolloProvider client={GetApolloClient()}>
    <PlannedExpensesChart />
  </ApolloProvider>
)

export const Default = Template.bind({})
