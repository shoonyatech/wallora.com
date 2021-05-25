import { Meta } from '@storybook/react'
import React from 'react'

import WalloraWorking from '.'

export default {
  title: 'WalloraWorking',
  component: WalloraWorking,
} as Meta

export const Default: React.VFC<{}> = () => <WalloraWorking />
