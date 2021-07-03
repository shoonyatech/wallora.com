/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'

const FinanceSpreadSheet = ({ columns, rowIndex, activeCell, setActiveCell, setShowPanel }: any) => {
  const isEqual = (a: any, b: any): Boolean => a <= b && a >= b
  const [activeRow, activeColumn] = activeCell
  return (
    <>
      {Array.from({ length: columns }, (_, columnIndex) => {
        const cellIndex = [rowIndex, columnIndex]

        let borderStyles = ''
        if (isEqual(cellIndex, activeCell)) {
          borderStyles = 'border-4 border-gray-200 '
        } else if (isEqual(rowIndex, activeRow)) {
          borderStyles = 'border-t-2 border-b-2'
        } else if (isEqual(columnIndex, activeColumn)) {
          borderStyles = 'border-l-2 border-r-2'
        }

        return (
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
          <div
            className={`w-40 p-5 border-box border-solid ${borderStyles} `}
            onMouseOver={() => setActiveCell(cellIndex)}
            onClick={() => setShowPanel(true)}
          />
        )
      })}
    </>
  )
}

export default FinanceSpreadSheet
