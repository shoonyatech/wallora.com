/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { gql, useQuery } from '@apollo/client'
import React from 'react'

import Loader from '../../common/Loader'
import FinanceCategoryList from '../FinanceCategoryList'
import FinanceSpreadSheet from '../FinanceSpreadSheet'

type financeCategoriesProps = {
  columns: number
  activeCell: number[]
  setActiveCell: any
}

const FinanceCategories = ({ columns, activeCell, setActiveCell }: financeCategoriesProps) => {
  const getCategories = () => gql`
    query Finance {
      finance {
        workItems {
          name
          incomeOrExpense
          order
          id
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
  const { workItems } = data.finance

  return (
    <div className="flex flex-col mt-0">
      <div className="h-6">Income/Expense</div>
      <ul className="flex flex-col mt-0 ml-0">
        {workItems.map((item: any, rowIndex: any) => (
          <li key={item.id} className="h-12 flex mt-px">
            <div className="w-96 flex" onMouseOver={() => setActiveCell([rowIndex, activeColumn])}>
              <FinanceCategoryList item={item} activeRow={activeRow} rowIndex={rowIndex} />
            </div>
            <FinanceSpreadSheet
              columns={columns}
              rowIndex={rowIndex}
              activeCell={activeCell}
              setActiveCell={setActiveCell}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default FinanceCategories
