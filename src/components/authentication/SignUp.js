import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function SignUp() {
  return (
    <SignUpForm>
      <TextField label="Email" type="email" required />
      <TextField label="Name" type="text" required />
      <TextField label="Password" type="password" required />
      <TextField label="Confirm password" type="password" required />
      <Button variant="outlined" type="submit">Submit</Button>
    </SignUpForm>
  )
}

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  > :last-child {
    margin-top: 1em;
  }
`
