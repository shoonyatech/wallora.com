import { UserProvider } from '@auth0/nextjs-auth0'
import React from 'react'

import BaseLayout from '.'

export default {
  title: 'BaseLayout',
  component: BaseLayout,
}

const Template = () => (
  <UserProvider>
    <BaseLayout />
  </UserProvider>
)

export const Default = Template.bind({})
