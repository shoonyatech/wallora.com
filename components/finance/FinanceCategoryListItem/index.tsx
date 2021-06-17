import React from 'react'

function FinanceCategoryListItem({ item }: any) {
  return (
    <>
      <div className="p-2.5 flex-1 bg-workItem">{item.name}</div>
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
