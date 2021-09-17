import React from 'react'

function FinanceCategoryList({ item, rowIndex, activeRow, summaryOnClick, actualsOrPlan, percentage }: any) {
  return (
    <>
      {actualsOrPlan === 'actuals' ? (
        <>
          <div
            onClick={() => summaryOnClick(item)}
            aria-hidden="true"
            role="button"
            tabIndex={0}
            className={`p-2.5 flex-1 cursor-pointer ${rowIndex === activeRow ? 'bg-workItemActive' : 'bg-workItem'}`}
          >
            {item.name}
          </div>
          <div
            className={`p-2.5 w-24 text-center ${
              item.incomeOrExpense === 'expense' ? 'bg-plannedExpense' : 'bg-plannedIncome'
            }`}
          />
        </>
      ) : (
        <>
          <div
            onClick={() => summaryOnClick(item)}
            aria-hidden="true"
            role="button"
            tabIndex={0}
            className={`p-2.5 flex-1 cursor-pointer ${rowIndex === activeRow ? 'bg-workItemActive' : 'bg-workItem'}`}
          >
            {item.name}
          </div>
          <div className={` w-24`}>
            <div style={{ width: `${percentage}%` }} className="p-2.5 text-center bg-red-200">
              {percentage}%
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default FinanceCategoryList
