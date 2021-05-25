import React from 'react'

import CreateAccount from '../CreateAccount'
import Features from '../Features'
import FeedBack from '../Feedback'
import WalloraDescription from '../WalloraDescription'
import WalloraWorking from '../WalloraWorking'

const MainContent = () => (
  <main className="p-4 xl:py-8">
    <div className="px-4 sm:px-8 pt-8 pb-16  lg:pb-40 xl:pb-20 w-full flex flex-wrap flex-col-reverse xl:flex-row">
      <WalloraDescription />
      <CreateAccount />
    </div>
    <FeedBack />
    <Features />
    <WalloraWorking />
  </main>
)

export default MainContent
