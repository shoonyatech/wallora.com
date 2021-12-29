import React from 'react'

import { dateAfterDays, dateBeforeDays } from '../../../lib/date-helper'
import FinanceMonthHeader from '.'

export default {
  title: 'FinanceMonthHeader',
  component: FinanceMonthHeader,
}

const Template = () => <FinanceMonthHeader startDate={dateBeforeDays(3)} endDate={dateAfterDays(3)} />

export const Default = Template.bind({})
