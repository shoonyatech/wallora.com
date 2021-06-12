import React from 'react'

import Header from '../Header'
import SideBar from '../SideBar'

function Top({ user }: any) {
  return <div>{user ? <SideBar /> : <Header />}</div>
}

export default Top
