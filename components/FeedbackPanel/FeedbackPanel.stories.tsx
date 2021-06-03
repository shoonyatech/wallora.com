import { ApolloProvider } from '@apollo/client'
import React from 'react'

import GetApolloClient from '../../apis/apollo.client'
import FeedbackPanel from '.'

export default {
  title: 'FeedbackPanel',
  component: FeedbackPanel,
}

const Template = () => (
  <ApolloProvider client={GetApolloClient()}>
    <FeedbackPanel />
  </ApolloProvider>
)

export const Default = Template.bind({})
