import React from 'react'

import WalloraWorkingElement from '../WalloraWorkingElement'

const WalloraWorking = () => (
  <section className="py-12 lg:py-24 px-8">
    <h3 className="p-8 text-center text-3xl text-gray-600">How it works...</h3>
    <WalloraWorkingElement
      title="Plan your Monthly and Annual budget"
      summary="Record expected income and expense for future months. Mark expenses as one time or recurring monthly/yearly."
      imgSrc="./images/plan.png"
      imgAlt="plan"
    />

    <WalloraWorkingElement
      title="Track your expenses"
      summary="Get real time alerts if actual expense exceeds planned budget for the category. Keep track of Bank balances, Credit cards, Loan accounts and Investments."
      imgSrc="./images/track.png"
      imgAlt="track"
      rowReverse
    />

    <WalloraWorkingElement
      title="Analyze your expenses. Predict future of finances"
      summary="Get graphical analysis of Planned vs Actual. Also get a rough estimate of predicated savings 1 year or 5 years down the line based on current expense pattern."
      imgSrc="./images/analyze.png"
      imgAlt="analysis"
    />
  </section>
)
export default WalloraWorking
