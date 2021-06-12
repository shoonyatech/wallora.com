/* eslint-disable react/jsx-props-no-spreading */

import { AppBar, Tab, Tabs } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PhoneIcon from '@material-ui/icons/Phone'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

const useStyles = makeStyles(() => ({
  root: {
    '@media (min-width:640px)': { display: 'none' },
  },
}))

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  }
}

export default function ScrollableTabsButtonForce() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <AppBar position="sticky" className={clsx(classes.root)} color="secondary">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="on"
        indicatorColor="primary"
        textColor="primary"
        aria-label="scrollable force tabs example"
      >
        <Link href="/money" passHref>
          <Tab icon={<PhoneIcon />} {...a11yProps(0)} label="Manage Finances" />
        </Link>
        <Link href="/contacts" passHref>
          <Tab icon={<PhoneIcon />} {...a11yProps(1)} label="Manage Contacts" />
        </Link>
        <Link href="/analysis" passHref>
          <Tab icon={<PhoneIcon />} {...a11yProps(2)} label="View Reports" />
        </Link>
        <Link href="/settings" passHref>
          <Tab icon={<PhoneIcon />} {...a11yProps(3)} label="User Settings" />
        </Link>
        <Link href="/api/auth/logout" passHref>
          <Tab icon={<PhoneIcon />} {...a11yProps(4)} label="Sign out" />
        </Link>
      </Tabs>
    </AppBar>
  )
}
