/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { gql, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { useToggle } from 'react-use'

import Loader from '../../common/Loader'
import ExpensePanelDetails from '../ExpensePanelDetails'
import FinanceCategoryList from '../FinanceCategoryList'
import FinanceSpreadSheet from '../FinanceSpreadSheet'
import SummaryInfo from '../SummaryInfo'

type financeCategoriesProps = {
  columns: number
  activeCell: number[]
  setActiveCell: any
}

const FinanceCategories = ({ columns, activeCell, setActiveCell }: financeCategoriesProps) => {
  const getCategories = () => gql`
    query IncomeExpenseCategoriesWorkItems {
      incomeExpenseCategoriesWorkItems {
        name
        incomeOrExpense
        order
        id
      }
    }
  `

  const leftMargin = 384
  const topMargin = 138
  const [panelPosition, setPanelPosition] = useState({
    top: `${topMargin}px`,
    left: `${leftMargin}px`,
  })
  const [isOn, toggleIsOn] = useToggle(false)
  const { loading, error, data } = useQuery(getCategories())
  const defaultCurrency = '$'
  const currencyList = ['INR', '$', 'YUH']
  const [totalValues, setTotalValues] = useState({
    rows: [
      {
        currency: defaultCurrency,
        amount: 0,
        comment: '',
        tags: '',
        person: '',
      },
    ],
  })

  const [summaryModal, setSummaryModal] = useToggle(false)
  const [workItemInfo, setWorkItemInfo] = useState('')

  const summaryOnClick = (workitem: any) => {
    setSummaryModal()
    setWorkItemInfo(workitem)
  }

  if (loading || error)
    return (
      <div>
        <Loader open={loading} error={error} />
      </div>
    )
  const [activeRow, activeColumn] = activeCell
  const workItems = data.incomeExpenseCategoriesWorkItems
  const panelSize = 880

  const togglePanel = (row: any, col: any) => {
    toggleIsOn()
    setPanelPosition({
      top: `${topMargin + row * 49}px`,
      left: `${leftMargin + Math.min(((columns - 1) * 160) % panelSize, col * 160)}px`,
    })
  }

  return (
    <div className="flex flex-col mt-0">
      <div className="h-6">Income/Expense</div>
      <ul className="flex flex-col mt-0 ml-0">
        {workItems.map((item: any, rowIndex: any) => (
          <li key={item.id} className="h-12 flex mt-px">
            <div className="w-96 flex" onMouseOver={() => setActiveCell([rowIndex, activeColumn])}>
              <FinanceCategoryList
                item={item}
                activeRow={activeRow}
                rowIndex={rowIndex}
                summaryOnClick={summaryOnClick}
              />
            </div>
            <FinanceSpreadSheet
              columns={columns}
              rowIndex={rowIndex}
              activeCell={activeCell}
              setActiveCell={setActiveCell}
              togglePanel={togglePanel}
              totalValues={totalValues}
              isOn={isOn}
            />
          </li>
        ))}
      </ul>
      {isOn ? (
        <div>
          <ExpensePanelDetails
            toggleIsOn={toggleIsOn}
            totalValues={totalValues}
            setTotalValues={setTotalValues}
            currencyList={currencyList}
            defaultCurrency={defaultCurrency}
            panelPosition={panelPosition}
          />
        </div>
      ) : null}
      {summaryModal ? <SummaryInfo setSummaryModal={setSummaryModal} workItemInfo={workItemInfo} /> : null}
    </div>
  )
}
export default FinanceCategories
