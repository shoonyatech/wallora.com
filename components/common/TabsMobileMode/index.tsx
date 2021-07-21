/* eslint-disable react/jsx-props-no-spreading */

import { AppBar, Tab, Tabs } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp'
import GroupIcon from '@material-ui/icons/Group'
import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings'
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
        <Link href="/dashboard" passHref>
          <Tab icon={<HomeIcon />} {...a11yProps(0)} label="Dashboard" />
        </Link>
        <Link href="/finance" passHref>
          <Tab icon={<AttachMoneyIcon />} {...a11yProps(0)} label="Finance" />
        </Link>
        <Link href="/contacts" passHref>
          <Tab icon={<GroupIcon />} {...a11yProps(1)} label="Contacts" />
        </Link>
        <Link href="/analysis" passHref>
          <Tab icon={<EqualizerIcon />} {...a11yProps(2)} label="Analysis" />
        </Link>
        <Link href="/settings" passHref>
          <Tab icon={<SettingsIcon />} {...a11yProps(3)} label="Settings" />
        </Link>
        <Link href="/api/auth/logout" passHref>
          <Tab icon={<ExitToAppSharpIcon />} {...a11yProps(4)} label="Sign out" />
        </Link>
      </Tabs>
    </AppBar>
  )
}
