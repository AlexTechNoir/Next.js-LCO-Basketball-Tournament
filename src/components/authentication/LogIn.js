import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

export default function LogIn({ showResetPassword }) {
  return (
    <>
      <LogInForm>
        <TextField label="Email" type="email" required />
        <TextField label="Password" type="password" required />
        <FormControlLabel 
          control={<Checkbox color="primary" />}
          label="Remember me"          
        />
        <Button variant="outlined" type="submit">Submit</Button>
      </LogInForm>
      <hr />
      <StyledLink>   
        <Link href="/">
          <a className="dropdown-item badge badge-light" onClick={showResetPassword}>
            <Button>Forgot Password?</Button>          
          </a>
        </Link>
      </StyledLink>   
    </>
  )
}

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  > :last-child {
    margin-top: 0.5em;
  }
`

const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  > a {
    text-decoration: none;
    > button {
      font-weight: bold;
    }    
  }
`
