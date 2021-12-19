import { ApolloProvider } from '@apollo/client'
import React from 'react'

import GetApolloClient from '../../../apis/apollo.client'
import CurrentWorth from '.'

export default {
  title: 'CurrentWorth',
  component: CurrentWorth,
}

const Template = () => (
  <ApolloProvider client={GetApolloClient()}>
    <CurrentWorth />
  </ApolloProvider>
)

export const Default = Template.bind({})
