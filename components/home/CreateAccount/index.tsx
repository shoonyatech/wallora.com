import { Button } from '@material-ui/core'
import React from 'react'

const CreateAccount = () => (
  <div className="flex-1 flex p-4 flex-col items-center">
    <h2 className="m-0 text-3xl p-4 font-medium">Create an Account (it&apos;s Free!)</h2>
    <Button variant="contained" color="primary" className="block" href="/api/auth/login">
      Create an account
    </Button>
  </div>
)

export default CreateAccount
