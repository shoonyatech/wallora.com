import React from 'react'

import FinanceDateHeader from '.'

export default {
  title: 'FinanceDateHeader',
  component: FinanceDateHeader,
}

const Template = () => <FinanceDateHeader left={-4} right={4} />

export const Default = Template.bind({})
