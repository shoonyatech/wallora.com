import React from 'react'

import BaseLayout from '../components/common/BaseLayout'
import MainContent from '../components/home/MainContent'

export default function Home() {
  return (
    <div>
      <MainContent />
    </div>
  )
}

Home.Layout = BaseLayout
