import React from 'react'

import { dateAfterDaysFromToday, dateBeforeDaysFromToday } from '../../../lib/date-helper'
import FinanceDateHeader from '.'

export default {
  title: 'FinanceDateHeader',
  component: FinanceDateHeader,
}

const Template = () => <FinanceDateHeader startDate={dateBeforeDaysFromToday(3)} endDate={dateAfterDaysFromToday(3)} />

export const Default = Template.bind({})
