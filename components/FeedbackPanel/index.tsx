import { Box, Button, TextField } from '@material-ui/core'
import React, { FormEvent, useState } from 'react'

function FeedbackPanel() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    feedbackText: '',
  })

  const set =
    (name: string) =>
    ({
      target: { value },
    }: {
      target: {
        value: string
      }
    }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }))
    }

  const saveFormData = async () => {
    const urlLink = `${process.env.WALLORA_BACKEND_SUBMIT_FEEDBACK}?firstName=${values.firstName}&lastName=${values.lastName}&email=${values.email}&feedback=${values.feedbackText}`

    const response = await fetch(urlLink, {
      method: 'GET',
    })

    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`)
    }
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault() // Prevent default submission

    if (values.feedbackText === null || values.feedbackText === '' || values.feedbackText.length === 1) {
      alert('Please enter your feedback text.')
      return
    }

    try {
      await saveFormData()
      alert('We have received your feedback. Thanks for reaching out!')
      setValues({
        firstName: '',
        lastName: '',
        email: '',
        feedbackText: '',
      })
    } catch (e) {
      alert(`Feedback submission failed with '${e.message}'! Tray again later.`)
    }
  }

  return (
    <form onSubmit={onSubmit} className="bg-secondary p-6 shadow-fbpanel box-border leading-normal text-xl">
      <Box className="flex">
        <TextField
          value={values.firstName}
          variant="filled"
          className="bg-white rounded  flex-grow "
          onChange={set('firstName')}
          label="First Name"
        />

        <TextField
          value={values.lastName}
          className="bg-white rounded  flex-grow "
          variant="filled"
          onChange={set('lastName')}
          label="Last Name"
        />
      </Box>
      <TextField
        value={values.email}
        variant="filled"
        className="bg-white w-full rounded"
        label="Email"
        onChange={set('email')}
      />

      <TextField
        multiline
        rows={6}
        value={values.feedbackText}
        onChange={set('feedbackText')}
        label="Feedback"
        variant="filled"
        className="bg-white p-2 mb-2 w-full"
      />
      <Box mt={2}>
        <Button size="large" type="submit" variant="contained" color="primary">
          Send
        </Button>
      </Box>
    </form>
  )
}

export default FeedbackPanel
