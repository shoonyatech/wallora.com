import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import Loader from '../../common/Loader'

const MAJOR_PLANNED_EXPENSES = () => gql`
  query Chart {
    charts {
      plannedExpenses {
        name
        amount
      }
    }
  }
`

function PlannedExpensesChart() {
  // const today = dateHelper.getDate()
  // const lastSixMonth = dateHelper.dateBeforeMonths(6)
  // const urlLink = `?startmonth=${today.year()}${today.month()}&endmonth=${lastSixMonth.year()}${lastSixMonth.month()}`

  const { loading, error, data } = useQuery(MAJOR_PLANNED_EXPENSES())

  if (loading || error)
    return (
      <div>
        <Loader open={loading} error={error} />
      </div>
    )

  return (
    <div>
      <div className="text-center">Major Expenses planned in next 6 months</div>
      <br />
      <ResponsiveContainer width="95%" height={400} className="text-center">
        <BarChart width={1600} height={400} data={data.charts.plannedExpenses} className="ml-8">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#ffc1c1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PlannedExpensesChart
