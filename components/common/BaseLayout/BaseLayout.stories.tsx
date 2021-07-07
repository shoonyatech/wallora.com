import { UserProvider } from '@auth0/nextjs-auth0'
import React from 'react'
import { withNextRouter } from 'storybook-addon-next-router'

import BaseLayout from '.'

export default {
  title: 'BaseLayout',
  component: BaseLayout,
  decorators: [withNextRouter],
}

export const Default = () => (
  <UserProvider>
    <BaseLayout />
  </UserProvider>
)

Default.parameters = {
  nextRouter: {
    pathname: '/',
  },
}
