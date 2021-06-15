import { Divider, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp'
import MenuIcon from '@material-ui/icons/Menu'
import InboxIcon from '@material-ui/icons/MoveToInbox'
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
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>

        <Link href="/finance" passHref>
          <ListItem button key="Manage Finances">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Finances" />
          </ListItem>
        </Link>

        <Link href="/contacts" passHref>
          <ListItem button key="Manage Contacts">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Contacts" />
          </ListItem>
        </Link>

        <Link href="/analysis" passHref>
          <ListItem button key="View Reports">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="View Reports" />
          </ListItem>
        </Link>
      </List>
      <List style={{ marginTop: `auto` }}>
        <Divider />

        <Link href="/settings" passHref>
          <ListItem button key="User Settings">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="User Settings" />
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
  )
}
