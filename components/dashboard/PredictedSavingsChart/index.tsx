/* eslint-disable array-callback-return */
import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts'

import Loader from '../../common/Loader'

const CHART_DATA = () => gql`
  query Chart {
    charts {
      predictedSavings {
        ... on SavingsThisMonth {
          month
          savings {
            amount
          }
        }
      }
    }
  }
`

const PredictedSavingsChart = () => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  let prevYear = 0

  const { loading, error, data } = useQuery(CHART_DATA())

  if (loading || error)
    return (
      <div>
        <Loader open={loading} error={error} />
      </div>
    )
  const savingdata: any[] | undefined = []
  data.charts.predictedSavings.map((saving: any) => {
    let { month } = saving
    const year = month.slice(0, 4)
    month = monthNames[parseInt(month.slice(month.length - 2), 10) - 1]
    const { amount } = saving.savings
    if (year !== prevYear) {
      month = `${month} ${year}`
      savingdata.push({ month, amount })
      prevYear = year
    } else savingdata.push({ month, amount })
  })

  const ValueLabel = ({ x, y, value }: any) => (
    <text x={x + 10} y={y - 5} fill="#777" textAnchor="middle">
      {value}
    </text>
  )

  return savingdata ? (
    <div>
      <ResponsiveContainer width="100%" height={450}>
        <BarChart data={savingdata} margin={{ top: 80 }}>
          <XAxis dataKey="month" fontFamily="sans-serif" dy={-400} tickSize={0} style={{ fill: '#389bb7' }} />
          <Bar dataKey="amount" fill="#ffd92e" label={<ValueLabel />} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <span>loading</span>
  )
}

export default PredictedSavingsChart
