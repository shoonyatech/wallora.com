import React from 'react'

function FinanceCategoryList({ item, rowIndex, activeRow, summaryOnClick, actualsOrPlan, percentage }: any) {
  // console.log(percentage.toString())
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
            {percentage === null ? (
              <div
                style={{ position: 'relative', textAlign: 'left', height: '100%' }}
                className="text-center bg-plannedIncome"
              >
                <span
                  style={{ position: 'absolute', top: '50%', transform: 'translate(0, -50%)', paddingLeft: '10px' }}
                >
                  %
                </span>
              </div>
            ) : (
              <div
                style={{ width: `${percentage.toString()}%`, position: 'relative', textAlign: 'left', height: '100%' }}
                className="text-center bg-red-200"
              >
                <span
                  style={{ position: 'absolute', top: '50%', transform: 'translate(0, -50%)', paddingLeft: '10px' }}
                >
                  {percentage}%
                </span>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}
export default FinanceCategoryList
