/* eslint-disable arrow-body-style */
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import React from 'react'

const FinancePanel = ({ setShowPanel }: any) => {
  return (
    <div className="bg-secondary p-5 absolute right-0 top-48 z-10  w-[40rem]">
      <div className="flex py-4">
        <TextField
          id="standard-number"
          label="Amount"
          type="number"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-basic" label="Comment" variant="outlined" />
      </div>
      <div className="flex">
        <Button onClick={() => setShowPanel(false)} variant="contained" color="primary" className="block">
          Save and close
        </Button>
      </div>
    </div>
  )
}

export default FinancePanel
