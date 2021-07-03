/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { gql, useQuery } from '@apollo/client'
import React from 'react'

import Loader from '../../common/Loader'
import FinanceCategoryListItem from '../FinanceCategoryListItem'
import FinanceSpreadSheet from '../FinanceSpreadSheet'

type financeCategoriesProps = {
  columns: number
  activeCell: number[]
  setActiveCell: any
  setShowPanel: any
}

const FinanceCategories = ({ columns, activeCell, setActiveCell, setShowPanel }: financeCategoriesProps) => {
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
  const [activeRow, activeColumn] = activeCell
  const { workItems } = data.user.userSettings
  return (
    <div className="flex flex-col mt-0">
      <div className="">Income/Expense</div>
      <ul className="flex flex-col mt-0">
        {workItems.map((item: any, rowIndex: any) => (
          <li key={item.name} className="flex mt-px">
            <div className="w-96 flex" onMouseOver={() => setActiveCell([rowIndex, activeColumn])}>
              <FinanceCategoryListItem item={item} activeRow={activeRow} rowIndex={rowIndex} />
            </div>
            <FinanceSpreadSheet
              columns={columns}
              rowIndex={rowIndex}
              activeCell={activeCell}
              setActiveCell={setActiveCell}
              setShowPanel={setShowPanel}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default FinanceCategories
