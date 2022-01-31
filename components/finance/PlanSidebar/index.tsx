import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles(() => ({
  amount: {
    backgroundColor: 'beige',
    minWidth: '390px',
    marginTop: '5px',
    height: 'fit-content',
  },
  para: {
    height: '40px',
    marginTop: '-0.5px',
    color: '#261919',
    '&:hover': {
      backgroundColor: '#81816d',
      cursor: 'pointer',
    },
  },
  income: {
    marginTop: '45px',
    color: '#261919',
  },
  main: {
    display: 'grid',
    height: 'fit-content',
  },
}))

function PlanSidebar() {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <p className={classes.income}>Income/Expense</p>
      <div className={classes.amount}>
        <p className={classes.para}>Income</p>
        <p className={classes.para}>Taxes</p>
        <p className={classes.para}>Grocery</p>
        <p className={classes.para}>House Rent</p>
        <p className={classes.para}>Bills and EMI</p>
        <p className={classes.para}>Travel and Vacation</p>
        <p className={classes.para}>Entertainment</p>
        <p className={classes.para}>Eat out</p>
        <p className={classes.para}>Fitness, Leisure and Hobby</p>
        <p className={classes.para}>Health and Medicine</p>
        <p className={classes.para}>Domestic and Household</p>
        <p className={classes.para}>Community and Festivals</p>
        <p className={classes.para}>Clothing and Grooming</p>
        <p className={classes.para}>Business and Profession</p>
        <p className={classes.para}>Others</p>
      </div>
    </div>
  )
}

export default PlanSidebar
