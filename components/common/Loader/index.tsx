import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import React from 'react'

const Loader = ({ open, error }: any) => (
  <div>
    {open !== undefined || error !== undefined ? (
      <Backdrop open={open}>
        {open ? <CircularProgress size={60} color="primary" /> : null}
        {error ? error.message : null}
      </Backdrop>
    ) : null}
  </div>
)

export default Loader
