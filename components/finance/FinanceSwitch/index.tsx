/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import React from 'react'

const FinanceSwitch = ({ actualOrPlan }: any) => (
  <div className="flex justify-center items-center">
    <div className="flex border-2 border-solid border-gray-200 rounded-full">
      <Link href="./actuals">
        <a className={`py-2 px-4 rounded-l-full ${actualOrPlan === 'actuals' && 'bg-primary text-white'}`}>Actual</a>
      </Link>
      <Link href="./plan">
        <a className={`py-2 px-4 rounded-r-full ${actualOrPlan === 'plan' && 'bg-primary text-white'}`}>Plan</a>
      </Link>
    </div>
  </div>
)

export default FinanceSwitch
