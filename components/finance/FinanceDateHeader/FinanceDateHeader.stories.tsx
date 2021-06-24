import React from 'react'

import { dateAfterDays, dateBeforeDays } from '../../../lib/date-helper'
import FinanceDateHeader from '.'

export default {
  title: 'FinanceDateHeader',
  component: FinanceDateHeader,
}

const Template = () => <FinanceDateHeader startDate={dateBeforeDays(3)} endDate={dateAfterDays(3)} />

export const Default = Template.bind({})
