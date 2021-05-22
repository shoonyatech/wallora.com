/* eslint-disable react/jsx-props-no-spreading */
import { Meta, Story } from '@storybook/react'
import React from 'react'

import { ExampleHeader, ExampleHeaderProps } from './ExampleHeader'

export default {
  title: 'Example/Header',
  component: ExampleHeader,
} as Meta

const Template: Story<ExampleHeaderProps> = (args) => <ExampleHeader {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
