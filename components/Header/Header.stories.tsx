import { Meta } from '@storybook/react'
import React from 'react'

import Header from '.'

export default {
  title: 'Header',
  component: Header,
} as Meta

export const LogIn: React.VFC<{}> = () => <Header />
