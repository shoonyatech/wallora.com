/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { useToggle } from 'react-use'

import IncomeExpenseBrick from '../IncomeExpenseBrick'

const FinanceSpreadSheet = ({ columns, rowIndex, activeCell, setActiveCell }: any) => {
  const isEqual = (a: any, b: any): Boolean => a <= b && a >= b
  const [activeRow, activeColumn] = activeCell
  const map1 = new Map() // keeps track of ceslls for which button would be visible

  map1.set('10', 1)
  map1.set('12', 1)
  map1.set('13', 1)
  map1.set('14', 1)
  map1.set('16', 1)

  return (
    <>
      {Array.from({ length: columns }, (_, columnIndex) => {
        const cellIndex = [rowIndex, columnIndex]
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isOn, toggleIsOn] = useToggle(true)

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
            key={`${rowIndex}${columnIndex}`}
            className={`w-40 p-5 border-box border-solid ${borderStyles} `}
            onMouseOver={() => setActiveCell(cellIndex)}
            onClick={toggleIsOn}
          >
            {map1.get(`${rowIndex}${columnIndex}`) !== undefined && isOn ? (
              <IncomeExpenseBrick keyValue={`${rowIndex}${columnIndex}`} />
            ) : null}
          </div>
        )
      })}
    </>
  )
}

export default FinanceSpreadSheet
