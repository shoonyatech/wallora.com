/* eslint-disable react/jsx-props-no-spreading */
import { Meta, Story } from '@storybook/react'
import React from 'react'

import * as ExampleHeaderStories from './ExampleHeader.stories'
import { Page, PageProps } from './Page'

export default {
  title: 'Example/Page',
  component: Page,
} as Meta

const Template: Story<PageProps> = (args) => <Page {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  ...ExampleHeaderStories.LoggedIn.args,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...ExampleHeaderStories.LoggedOut.args,
}
