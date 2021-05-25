import { Meta } from '@storybook/react'
import React from 'react'

import Features from '.'

export default {
  title: 'Features',
  component: Features,
} as Meta

export const Default: React.VFC<{}> = () => <Features />
