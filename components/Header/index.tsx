import { AppBar, Button } from '@material-ui/core'
import React from 'react'

const Header = () => (
  <AppBar position="static">
    <div className="bg-secondary pl-10 p-2 flex justify-between">
      <img src="./images/wallora-logo-170x53.jpeg" alt="This is Wallora logo." className="block" />
      <div className="m-2">
        <Button variant="contained" color="primary" className="block" href="/api/auth/login">
          Sign in
        </Button>
      </div>
    </div>
  </AppBar>
)

export default Header
