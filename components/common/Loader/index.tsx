import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 5,
      color: '#fff',
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.default,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    modal: {
      display: 'flex',
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
)

const Loader = ({ open, error }: any) => {
  const classes = useStyles()

  return (
    <div>
      {open !== undefined || error !== undefined ? (
        <Backdrop className={classes.backdrop} open={open}>
          {open ? <CircularProgress size={60} color="primary" /> : null}
          {error ? error.message : null}
        </Backdrop>
      ) : null}
    </div>
  )
}

export default Loader
