import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import LogIn from './authentication/LogIn'
import SignUp from './authentication/SignUp'
const ResetPassword = dynamic(() => import('./authentication/ResetPassword'))

export default function Authentication({ authClass, isLogInTabVisible, showLogInModal, showSingUpModal, closeAuth }) {
  const [ isResetPasswordVisible, setIsResetPasswordVisible ] = useState(false)

  const variants = {
    show: { scale: 1 },
    close: { scale: 0 }
  }

  const showResetPassword = e => {
    e.preventDefault()
    setIsResetPasswordVisible(true)
  }

  const hideResetPassword = () => {
    setIsResetPasswordVisible(false)
  }

  return (
    <DivAuthWrapper 
      className={authClass} 
      id="auth" 
      onClick={closeAuth} 
      isLogInTabVisible={isLogInTabVisible}
    >
      <motion.div variants={variants} initial={{ scale: 0 }} animate={authClass === 'visible' ? "show" : "close"}>
        <div>
          {!isResetPasswordVisible ? (
            <div>
              <Button onClick={showLogInModal}>
                Log In
              </Button>
              <Button onClick={showSingUpModal}>
                Sign Up
              </Button>
            </div>
          ) : (
            <span>Reset Password</span>
          )}
          <div>
            {!isResetPasswordVisible ? (
              isLogInTabVisible ? (
                <LogIn showResetPassword={showResetPassword} />
              ) : (
                <SignUp />
              )
            ) : (
              <ResetPassword hideResetPassword={hideResetPassword} />
            )}
          </div>
        </div>
      </motion.div>
    </DivAuthWrapper>
  )
}

const DivAuthWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  display: flex;
  justify-content: center;
  align-items: start;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  z-index: 1;
  > :first-child {
    background-color: #f8f9fa;
    margin-top: 3em;
    padding: 1.5em;
    border: solid 1px grey;
    > :first-child {
      border: solid 1px grey;
      display: flex;
      flex-direction: column;
      align-items: center;
      > :first-child {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        > button {
          width: 50%;
          cursor: pointer;
          border: none;
          padding: 0.8em 0 0.8em 0;          
          &:hover {
            background-color: #e7e7e7;
          }
        }
        > :first-child {
          opacity: ${({ isLogInTabVisible }) => isLogInTabVisible ? 1 : .5};
        }
        > :last-child {
          opacity: ${({ isLogInTabVisible }) => isLogInTabVisible ? .5 : 1};
        }
      }
      > span {
        margin-top: .8em;
      }
      > :last-child {
        padding: 1em;
      }
    }
  }
`
