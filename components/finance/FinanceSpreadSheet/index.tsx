/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'

import IncomeExpenseBrick from '../IncomeExpenseBrick'

const isEqual = (a: any, b: any): Boolean => a <= b && a >= b

const FinanceSpreadSheet = ({ columns, rowIndex, activeCell, setActiveCell, isOn, togglePanel, totalValues }: any) => {
  const [activeRow, activeColumn] = activeCell

  return (
    <>
      {Array.from({ length: columns }, (_, columnIndex) => {
        const cellIndex = [rowIndex, columnIndex]
        const isActiveCell = isEqual(cellIndex, activeCell)

        let borderStyles = ''
        if (isActiveCell) {
          borderStyles = 'border-4 border-gray-200 '
        } else if (isEqual(rowIndex, activeRow)) {
          borderStyles = 'border-t-2 border-b-2'
        } else if (isEqual(columnIndex, activeColumn)) {
          borderStyles = 'border-l-2 border-r-2'
        }
        return (
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
          <div
            key={`${rowIndex}${columnIndex}`}
            className={`w-40 border-box border-solid ${borderStyles} `}
            onMouseOver={() => setActiveCell(cellIndex)}
            onClick={() => togglePanel(rowIndex, columnIndex)}
          >
            {isOn && isActiveCell ? (
              <IncomeExpenseBrick
                togglePanel={() => togglePanel(rowIndex, columnIndex)}
                totalValues={totalValues}
                isActiveCell={isActiveCell}
              />
            ) : null}
          </div>
        )
      })}
    </>
  )
}

export default FinanceSpreadSheet
