import React from 'react'

function FinanceCategoryListItem({ item, rowIndex, activeRow }: any) {
  return (
    <>
      <div className={`p-2.5 flex-1 ${rowIndex === activeRow ? 'bg-workItemActive' : 'bg-workItem'}`}>{item.name}</div>
      <div
        className={`p-2.5 w-24 text-center ${
          item.incomeOrExpense === 'expense' ? 'bg-plannedExpense' : 'bg-plannedIncome'
        }`}
      >
        {item.totalAmount.reduce((a: any, b: any) => ({ amount: a.amount + b.amount })).amount}
      </div>
    </>
  )
}
export default FinanceCategoryListItem
