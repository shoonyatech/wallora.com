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

const OWE_WORTH = () => gql`
  query Chart {
    charts {
      myOweData {
        name
        amount
      }
    }
  }
`

function CurrentWorth() {
  const { loading, error, data } = useQuery(CURRENT_WORTH())
  const { loading: loadingOwned, error: errorOwned, data: dataOwe } = useQuery(OWE_WORTH())
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#E21226', '#FF66B2']

  if (errorOwned || loadingOwned)
    return (
      <div>
        <Loader open={loadingOwned} error={errorOwned} />
      </div>
    )

  if (loading || error)
    return (
      <div>
        <Loader open={loading} error={error} />
      </div>
    )
  const current = data.charts.myCurrentWorth.reduce((acc: any, curr: any) => acc + curr.amount, 0)
  const owe = dataOwe.charts.myOweData.reduce((acc: any, curr: any) => acc + curr.amount, 0)
  const totalData = current - owe

  return (
    <div>
      <h1 className="text-2xl flex justify-center">
        My Current Worth: <span style={{ color: '#57d028' }}>&nbsp;₹{totalData.toLocaleString()}</span>
      </h1>
      <div className="flex justify-center" style={{ marginTop: '20px', marginBottom: '40px' }}>
        <div className="border-2" style={{ width: '500px', height: '350px' }}>
          <h1 className="text-2xl" style={{ paddingLeft: '10px', backgroundColor: '#57d028' }}>
            I have: ₹{current.toLocaleString()}
          </h1>
          <ResponsiveContainer width="95%" height={300} className="text-center">
            <PieChart width={600} height={600}>
              <Legend layout="horizontal" verticalAlign="top" align="center" height={300} width={400} />
              <Pie
                data={data.charts.myCurrentWorth}
                startAngle={180}
                endAngle={0}
                dataKey="amount"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
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
        <div className="ml-8 border-2" style={{ width: '500px', height: '350px' }}>
          <h1 className="pl-2 text-2xl" style={{ paddingLeft: '10px', backgroundColor: '#f16c6c' }}>
            I owe: ₹{owe.toLocaleString()}
          </h1>
          <ResponsiveContainer width="95%" height={300} className="text-center">
            <PieChart width={600} height={600}>
              <Legend layout="horizontal" verticalAlign="top" align="center" height={300} width={200} />
              <Pie
                data={dataOwe.charts.myOweData}
                startAngle={180}
                endAngle={0}
                dataKey="amount"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {dataOwe.charts.myOweData.map((entry: any, index: any) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default CurrentWorth
