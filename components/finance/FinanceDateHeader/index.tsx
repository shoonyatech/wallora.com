import { Button } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'

function createData(date: string, value: number) {
  return { date, value }
}

const useStyles = makeStyles(() =>
  createStyles({
    todayHeader: {
      borderRadius: 0,
      color: 'white',
      margin: 'auto',
      width: '10.15rem',
      background: '#255d6d',
      '&:hover': {
        background: '#255d6d',
      },
    },
    dateHeader: {
      borderRadius: 0,
      color: 'white',
      margin: 'auto',
      width: '10.15rem',
      background: '#389bb7',
      '&:hover': {
        background: '#389bb7',
      },
    },
    values: {
      borderRadius: 0,
      margin: 'auto',
      width: '10.15rem',
      background: '#ffd2ad',
      '&:hover': {
        background: '#ffd2ad',
      },
    },
  })
)

export default function FinanceDateHeader({ left, right }: any) {
  const classes = useStyles()
  const today = new Date()
  const dates = []
  for (let i = left; i < right; i += 1) {
    const newDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i)
    dates.push(createData(newDate.toDateString(), i))
  }

  return (
    <div className="ml-96 inline-block">
      {dates.map((x) => {
        const newStyle = today.toString().includes(x.date) === true ? classes.todayHeader : classes.dateHeader
        return (
          <Button disableRipple key={x.value} size="medium" variant="contained" className={newStyle}>
            {x.date}
          </Button>
        )
      })}
      <br />
      {dates.map((x) => (
        <Button disableRipple key={x.value} size="medium" variant="contained" className={classes.values}>
          {x.value}
        </Button>
      ))}
    </div>
  )
}
