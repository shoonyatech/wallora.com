/* eslint-disable react/jsx-props-no-spreading */
import { ApolloProvider} from '@apollo/client'
import React from 'react'

import GetApolloClient from '../../../apis/apollo.client'
import FinanceTag from '.'



export default {
  title: 'FinanceTag',
  component: FinanceTag,
} 

const Template = (args:any) => (
  <ApolloProvider client={GetApolloClient()}>
    <FinanceTag {...args}/>
  </ApolloProvider>
)


export const Default = Template.bind({})
Default.args = {
  defaultOptions:[
    "apple",
    "ball",
    "cat",
    "dog",
    "elephant",
    "fox",
    "girl",
    "horn",
    "india",
    "joker"
  ]
}

