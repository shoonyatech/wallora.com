import { createStyles, FormControl, makeStyles, MenuItem, Select, TextField } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      backgroundColor: 'white',
      margin: '0.5rem',
      width: '4rem',
      height: '2.5rem',
    },
    textField: {
      backgroundColor: 'white',
      borderRadius: 'rounded',
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
      marginRight: '0.5rem',
    },
    amountField: {
      width: '8rem',
      backgroundColor: 'white',
      borderRadius: 'rounded',
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
      marginRight: '0.5rem',
    },
  })
)

export default function ExpensePanelRows({
  totalValues,
  handleChange,
  handleRemoveSpecificRow,
  currencyList,
  defaultCurrency,
}: any) {
  const classes = useStyles()
  return (
    <div className="flex flex-col">
      {totalValues.rows.map((item: any, idx: any) => (
        <div id={idx} key={idx.toString()}>
          <FormControl variant="outlined">
            <Select
              className={classes.formControl}
              placeholder="Currency"
              name="currency"
              value={totalValues.rows[idx].currency === undefined ? defaultCurrency : totalValues.rows[idx].currency}
              onChange={handleChange(idx)}
            >
              {currencyList.map((currency: string, currencyIdx: any) => (
                <MenuItem id={currencyIdx} value={currency} key={currencyIdx.toString()}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            value={totalValues.rows[idx].amount === undefined ? 0 : totalValues.rows[idx].amount}
            InputProps={{
              inputProps: {
                min: 1,
                step: 0.01,
              },
            }}
            onChange={handleChange(idx)}
            className={classes.amountField}
            placeholder="Amount"
            type="number"
            name="amount"
            margin="dense"
            variant="outlined"
          />
          <TextField
            value={totalValues.rows[idx].comment}
            onChange={handleChange(idx)}
            className={classes.textField}
            name="comment"
            placeholder="Comment"
            margin="dense"
            variant="outlined"
          />
          <TextField
            value={totalValues.rows[idx].tags}
            onChange={handleChange(idx)}
            className={classes.textField}
            name="tags"
            placeholder="Tags"
            margin="dense"
            variant="outlined"
          />
          <TextField
            value={totalValues.rows[idx].person}
            onChange={handleChange(idx)}
            name="person"
            className={classes.textField}
            placeholder="Associate with a person"
            variant="outlined"
            margin="dense"
          />
          <span className="inline-block mt-4 mr-1">
            <input
              onClick={handleRemoveSpecificRow(idx)}
              type="image"
              src="./images/delete-20x20.jpg"
              alt="Delete button for expense panel row"
            />
          </span>
          <br />
        </div>
      ))}
    </div>
  )
}
