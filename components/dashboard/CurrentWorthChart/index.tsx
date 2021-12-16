/* eslint-disable react/no-array-index-key */
import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts'

import Loader from '../../common/Loader'

const CURRENT_WORTH = () => gql`
  query Chart {
    charts {
      myCurrentWorth {
        name
        amount
      }
    }
  }
`

function CurrentWorth() {
  const { loading, error, data } = useQuery(CURRENT_WORTH())
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#E21226', '#FF66B2']

  if (loading || error)
    return (
      <div>
        <Loader open={loading} error={error} />
      </div>
    )
  const total = data.charts.myCurrentWorth.reduce((acc: any, curr: any) => acc + curr.amount, 0)

  return (
    <div>
      <h1 className="text-center text-2xl">I have: ₹{total.toLocaleString()}</h1>
      <br />
      <ResponsiveContainer width="95%" height={400} className="text-center">
        <PieChart width={800} height={800}>
          <Legend layout="vertical" verticalAlign="top" align="center" height={200} width={700} />
          <Pie
            data={data.charts.myCurrentWorth}
            startAngle={180}
            endAngle={0}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {data.charts.myCurrentWorth.map((entry: any, index: any) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CurrentWorth
