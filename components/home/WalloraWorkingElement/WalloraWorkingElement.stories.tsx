import { Meta, Story } from '@storybook/react'
import React from 'react'

import WalloraWorkingElement, { WalloraWorkingElementProps } from '.'

export default {
  title: 'WalloraWorkingElement',
  component: WalloraWorkingElement,
} as Meta

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<WalloraWorkingElementProps> = (args) => <WalloraWorkingElement {...args} />

export const Plan = Template.bind({})
Plan.args = {
  title: 'Plan your Monthly and Annual budget',
  summary:
    'Record expected income and expense for future months. Mark expenses as one time or recurring monthly/yearly.',
  imgSrc: './images/plan.png',
  imgAlt: 'plan',
}

export const Track = Template.bind({})
Track.args = {
  title: 'Track your expenses',
  summary:
    'Get real time alerts if actual expense exceeds planned budget for the category. Keep track of Bank balances, Credit cards, Loan accounts and Investments.',
  imgSrc: './images/track.png',
  imgAlt: 'track',
  rowReverse: true,
}

export const Analysis = Template.bind({})
Analysis.args = {
  title: 'Analyze your expenses. Predict future of finances',
  summary:
    'Get graphical analysis of Planned vs Actual. Also get a rough estimate of predicated savings 1 year or 5 years down the line based on current expense pattern.',
  imgSrc: './images/analyze.png',
  imgAlt: 'analysis',
}
