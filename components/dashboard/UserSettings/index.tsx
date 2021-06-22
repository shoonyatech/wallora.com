import { gql, useQuery } from '@apollo/client'
import React from 'react'

import Loader from '../../common/Loader'

const USER_SETTINGS = () => gql`
  query User {
    user {
      userSettings {
        currency
      }
    }
  }
`

function UserSettings() {
  const { loading, error, data } = useQuery(USER_SETTINGS())

  if (loading || error)
    return (
      <div>
        <Loader open={loading} error={error} />
      </div>
    )

  return (
    <div>
      <div className="text-center">User Settings</div>
      <div className="text-center">Currency: {data.user.userSettings.currency}</div>
      <br />
    </div>
  )
}

export default UserSettings
