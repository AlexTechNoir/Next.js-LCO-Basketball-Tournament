import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function ResetPassword({ hideResetPassword }) {
  return (
    <ResetPasswordDiv>
      <button onClick={hideResetPassword}>
        <FontAwesomeIcon icon={faArrowLeft} /> Go Back
      </button>
      <form>
        <TextField label="Enter your email" type="email" required />
        <Button variant="outlined" type="submit">Send New Password</Button>
      </form>
    </ResetPasswordDiv>
  )
}

const ResetPasswordDiv = styled.div`
  > button {
    background-color: #f8f9fa;
    cursor: pointer;
    border: none;
    border-radius: 15px;
    &:hover {
      background-color: #e7e7e7;
    }
  }
  > form {
    display: flex;
    flex-direction: column;
    > label {
      display: flex;
      flex-direction: column;
      > input {
        margin-top: 0.5em;
        padding: 0 0.2em 0 0.2em;
      }
    }
    > button {
      margin-top: 1em;
    }
  }
`
