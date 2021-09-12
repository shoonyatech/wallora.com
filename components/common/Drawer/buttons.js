import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Buttons() {
  return (
    <div>
      <Link to="/aboutUs">
        <Button variant="contained">About us</Button>
      </Link>
      <Link to="/contact">
        <Button variant="contained">Contact</Button>
      </Link>
    </div>
  )
}

export default Buttons
