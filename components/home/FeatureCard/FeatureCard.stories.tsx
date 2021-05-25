import { Meta, Story } from '@storybook/react'
import React from 'react'

import FeatureCard, { FeatureCardProps } from '.'

export default {
  title: 'FeatureCard',
  component: FeatureCard,
} as Meta

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<FeatureCardProps> = (args) => <FeatureCard {...args} />

export const Time = Template.bind({})
Time.args = {
  img: './images/time-50x50.jpg',
  title: 'Quick and Easy to setup',
  content:
    'Create your account in easy steps. Wallora will quickly create a budget for you to start with that you can fine tune as needed',
}

export const Secure = Template.bind({})
Secure.args = {
  img: './images/secure-50x50.jpg',
  title: 'Your data is Secure',
  content:
    'Your data is encrypted in database with a 256-bit encryption level and the data exchanged over the internet is encrypted with 128-bit SSL.',
}

export const Analysis = Template.bind({})
Analysis.args = {
  img: './images/analysis-50x50.jpg',
  title: 'In depth Analysis',
  content:
    'Find patterns in your spendings and gaps between plan and actual expenditures using our graphical analysis tools',
}

export const Money = Template.bind({})
Money.args = {
  img: './images/money-inr-50x50.jpg',
  title: 'Finance Experts services',
  content:
    'Get help from our panel of finance experts for personalized investment recommendations (Currently available only in selected countries)',
}
