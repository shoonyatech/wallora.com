import React from 'react'

const Header = ({ user }: any) => (
  <div className="bg-secondary pl-10 pt-5 pb-5 flex justify-between">
    <span className="text-primary">This is header</span>
    {user ? (
      <a href="/api/auth/logout" className="pr-10 text-primary">
        LOGOUT
      </a>
    ) : (
      <a href="/api/auth/login" className="pr-10 text-primary">
        LOGIN
      </a>
    )}
  </div>
)

export default Header
