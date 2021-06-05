import React from 'react'

import Footer from '../Footer'
import TabsMobileMode from '../TabsMobileMode'

function Bottom({ user }: any) {
  return <div>{user ? <TabsMobileMode /> : <Footer />}</div>
}

export default Bottom
