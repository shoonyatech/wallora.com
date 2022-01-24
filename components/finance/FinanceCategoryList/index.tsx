import React from 'react'
import CategorySummary from './CategorySummary'

function FinanceCategoryList({ item, rowIndex, activeRow, summaryOnClick }: any) {
  return (
    <>
      <div
        onClick={() => summaryOnClick(item)}
        // onKeyDown={() => summaryOnClick(item)}
        aria-hidden="true"
        role="button"
        tabIndex={0}
        className={`p-2.5 flex-1 cursor-pointer ${rowIndex === activeRow ? 'bg-workItemActive' : 'bg-workItem'}`}
      >
        {item.name}
      </div>
      <div
        className={`w-24 text-center ${
          item.incomeOrExpense === 'expense' ? 'bg-plannedExpense' : 'bg-plannedIncome'
        }`}
      >
        <CategorySummary 
          balanceTotal={item.balanceTotal} 
          plannedTotal={item.plannedTotal} 
          actualTotal={item.actualTotal}
        />
      </div>
    </>
  )
}
export default FinanceCategoryList
