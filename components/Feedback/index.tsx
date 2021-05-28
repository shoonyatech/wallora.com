import React from 'react'
import { useToggle } from 'react-use'

import FeedBackPanel from '../FeedbackPanel'

function FeedBack() {
  const [isOn, toggleIsOn] = useToggle(false)

  const buttonStyle = isOn ? { right: '-0.1rem' } : { right: '-9.125rem' }
  return (
    <div className="fixed text-sm duration-200 top-80" style={buttonStyle}>
      <div
        role="button"
        onClick={toggleIsOn}
        onKeyPress={toggleIsOn}
        tabIndex={0}
        className="uppercase text-white text-center text-xl bg-orange w-40 origin-left p-2 cursor-pointer h-14 -mt-8 -ml-7 -mb-56 -mr-30 shadow-fb transform -rotate-90"
      >
        Get in touch
      </div>
      {isOn ? <FeedBackPanel /> : null}
    </div>
  )
}

export default FeedBack
