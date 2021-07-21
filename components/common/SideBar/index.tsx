import { Divider, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp'
import GroupIcon from '@material-ui/icons/Group'
import HomeIcon from '@material-ui/icons/Home'
import MenuIcon from '@material-ui/icons/Menu'
import SettingsIcon from '@material-ui/icons/Settings'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { useToggle } from 'react-use'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      '@media (max-width:640px)': { display: 'none' },
    },
    drawerOpen: {
      backgroundColor: theme.palette.secondary.main,
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      backgroundColor: theme.palette.secondary.main,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7) + 1,
      },
    },
  })
)

export default function MiniDrawer() {
  const classes = useStyles()
  const [open, toggleIsOn] = useToggle(false)

  return (
    <div className="">
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className="pl-0 pr-0 flex">
          <IconButton onClick={toggleIsOn} color="primary" aria-label="open drawer" className="w-14 h-14">
            <MenuIcon />
          </IconButton>
          <Link href="/" passHref>
            <img src="./images/wallora-logo-170x53.jpeg" alt="This is Wallora logo." className="block cursor-pointer" />
          </Link>
        </div>

        <Divider />

        <List>
          <Link href="/dashboard" passHref>
            <ListItem button key="Dashboard">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>

          <Link href="/finance/actuals" passHref>
            <ListItem button key="Finance">
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary="Finance" />
            </ListItem>
          </Link>

          <Link href="/contacts" passHref>
            <ListItem button key="Contacts">
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Contacts" />
            </ListItem>
          </Link>

          <Link href="/analysis" passHref>
            <ListItem button key="Analysis">
              <ListItemIcon>
                <EqualizerIcon />
              </ListItemIcon>
              <ListItemText primary="Analysis" />
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: `auto` }}>
          <Divider />

          <Link href="/settings" passHref>
            <ListItem button key="Settings">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </Link>
          <Link href="/api/auth/logout" passHref>
            <ListItem button key="Sign out">
              <ListItemIcon>
                <ExitToAppSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Sign out" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  )
}
