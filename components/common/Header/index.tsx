import { AppBar, Button } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'

const Header = () => (
  <AppBar position="static">
    <div className="bg-secondary pl-10 p-2 flex justify-between">
      <Link href="/" passHref>
        <img src="./images/wallora-logo-170x53.jpeg" alt="Wallora logo" className="block cursor-pointer" />
      </Link>
      <div className="m-2">
        <Button variant="contained" color="primary" className="block" href="/api/auth/login">
          Sign in
        </Button>
      </div>
    </div>
  </AppBar>
)

export default Header
