import { AppBar, Box, Drawer, IconButton, List, ListItem, MenuIcon, Toolbar } from '@material-ui/core'
import Link from 'next/link'
import React, { useState } from 'react'

import Buttons from './buttons'

// const useStyle = makeStyles(theme => ({

// }))

const Sidebar = () => {
  // const classes = useStyle();
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const list = () => (
    <Box>
      <List>
        <ListItem>
          <Buttons />
        </ListItem>
      </List>
    </Box>
  )
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <div>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpen}>
            <MenuIcon />
          </IconButton>
          <Link href="/" passHref>
            <img
              src="../../../public/images/wallora-logo-170x53.jpeg"
              alt="Wallora logo"
              className="block cursor-pointer"
            />
          </Link>
        </div>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}

export default Sidebar
