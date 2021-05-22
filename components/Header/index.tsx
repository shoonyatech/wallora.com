import Button from '@material-ui/core/Button'
import React from 'react'

const Header = ({ user }: any) => (
  <div className="bg-secondary pl-10  p-5 flex justify-between">
    <img src="./images/wallora-logo-170x53.jpeg" alt="This is Wallora logo." />
    <span className="text-primary">This is header</span>
    {user ? (
      <Button variant="contained" color="primary" href="/api/auth/logout">
        LOGOUT
      </Button>
    ) : (
      <Button variant="contained" color="primary" href="/api/auth/login">
        LOGIN
      </Button>
    )}
  </div>
)

export default Header
