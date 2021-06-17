import { gql, useQuery } from '@apollo/client'
import React from 'react'

import Loader from '../../common/Loader'
import FinanceCategoryListItem from '../FinanceCategoryListItem'

const FinanceCategories = () => {
  const getCategories = () => gql`
    query User {
      user {
        userSettings {
          workItems {
            name
            incomeOrExpense
            totalAmount {
              type
              amount
            }
          }
        }
      }
    }
  `
  const { loading, error, data } = useQuery(getCategories())
  if (loading || error)
    return (
      <div>
        <Loader open={loading} error={error} />
      </div>
    )

  const { workItems } = data.user.userSettings
  return (
    <div className="flex flex-col w-96 mt-0">
      <div className="">Income/Expense</div>
      <ul className="flex flex-col mt-0">
        {workItems.map((item: any) => (
          <li key={item.name} className="flex mt-px">
            <FinanceCategoryListItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default FinanceCategories
