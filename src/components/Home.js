import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Home({ scroll, showLogInModal, showSingUpModal }) {
  const [ taglineClass, setTaglineClass ] = useState('hidden')

  return (
    <DivHome>
      <div>
        <a href="/#">
          <picture>
            <source srcSet="/img/logo.webp" type="image/webp"></source>
            <source srcSet="/img/logo.jpg" type="image/jpg"></source>
            <img src="/img/logo.jpg" alt="LCO logo" />
          </picture>          
        </a>
        <div>
          <button type="button" onClick={showLogInModal}>Log In</button>
          <button type="button" onClick={showSingUpModal}>Sing Up</button>
        </div>
      </div>
      <div>
        <div>
          Go fight for your team!
        </div>
        <div>
          Have an amazing basketball tournament!
        </div>
      </div>
      <div id="home" onClick={scroll}>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </DivHome>
  )
}

const DivHome = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  background-image: url('/img/mobileImg/homeMobile.webp');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  > :first-child {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: start;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    > a > picture > img {
      width: 25vw;
      height: 25vw;
    }
    > div {
      margin: 1em 1em 0 0;
      > button {        
        background-color: rgba(255, 174, 0, 0.8);
        border-radius: 0 0 30% 30%;
        border: none;
        cursor: pointer;
        font-family: 'Timmana', sans-serif;
        &:hover {
          border-bottom: #d400ff 3px solid;
        }
      }
    }
  }
  > :nth-child(2) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: center;
    justify-self: center;
    > :first-child {
      font-family: 'Timmana', sans-serif;
      font-size: 10vw;
      color: rgb(255, 174, 0);
      text-align: center;
      text-shadow:
        -1px -1px 4px #d400ff,
        1px -1px 4px #d400ff,
        -1px 1px 4px #d400ff,
        1px 1px 4px #d400ff; 
    }
    > :last-child {
      border-top: #d400ff 3px solid;
      font-size: 6vw;
      color: #d400ff;
      font-family: 'Timmana', sans-serif;
      background-color: rgba(255, 174, 0, 0.8);
      text-align: center;
      border-radius: 0 0 40% 40%;
    }
    > .hidden {
      visibility: hidden;
    }
  }
  > :last-child {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: end;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3em;
    background: var(--blackGradient);
    cursor: pointer;
    > i {
      color: white;
    }
    &:hover {
      background: var(--whiteGradient);
      > i {
        color: black;
      }
    }
  }
  @media only screen and (min-width: 600px) {
    > :first-child {
      > a > picture > img {
        width: 15vw;
        height: 15vw;
      }
    }
    > :nth-child(2) {
      > :first-child {
        font-size: 7vw;
      }
      > :last-child {
        font-size: 5vw;
      }
    } 
  }
  @media only screen and (min-width: 768px) {
    background-image: url('/img/home.webp');
  }
  @media only screen and (min-width: 992px) {
    > :first-child {
      > a > picture > img {
        width: 150px;
        height: 150px;
      }
    }
    > :nth-child(2) {
      > :first-child {
        font-size: 5vw;
      }
      > :last-child {
        font-size: 3vw;
      }
    } 
  }
`
