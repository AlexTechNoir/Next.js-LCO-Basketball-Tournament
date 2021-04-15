import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Home({ scroll, showLogInModal, showSingUpModal }) {
  return (
    <MainHome>
      <div>
        <Image 
          alt=""
          src="/img/home.webp"
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
          quality={75}
        />
      </div>
      <div>
        <Link href="/">
          <a>
            <picture>
              <source srcSet="/img/logo.webp" type="image/webp"></source>
              <img src="/img/logo.jpg" alt="LCO logo" />
            </picture> 
          </a>
        </Link>
        <div>
          <button type="button" onClick={showLogInModal}>Log In</button>
          <button type="button" onClick={showSingUpModal}>Sing Up</button>
        </div>
      </div>
      <div>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 1.5 }}} tabindex="0">
          Go fight for your team!
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -1500 }} animate={{ opacity: 1, x: 0, transition: { delay: 2.5 }}} tabindex="0">
          Have an amazing basketball tournament!
        </motion.div>
      </div>
      <div id="home" onClick={scroll}>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </MainHome>
  )
}

const MainHome = styled.main`
  grid-area: 1 / 1 / 2 / 3;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  > :first-child {
    position: absolute;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    z-index: -1;
  }
  > :nth-child(2) {
    grid-area: 1 / 1 / 2 / 2;
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
  > :nth-child(3) {
    grid-area: 1 / 1 / 2 / 2;
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
    grid-area: 1 / 1 / 2 / 2;
    align-self: end;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3em;
    background: var(--blackGradient);
    cursor: pointer;
    > svg {
      color: white;
    }
    &:hover {
      background: var(--whiteGradient);
      > svg {
        color: black;
      }
    }
  }
  @media only screen and (min-width: 600px) {
    > :nth-child(2) > a > picture > img {
      width: 15vw;
      height: 15vw;
    }
    > :nth-child(3) {
      > :first-child {
        font-size: 7vw;
      }
      > :last-child {
        font-size: 5vw;
      }
    } 
  }
  @media only screen and (min-width: 992px) {
    > :nth-child(2) > a > picture > img {
      width: 150px;
      height: 150px;      
    }
    > :nth-child(3) {
      > :first-child {
        font-size: 5vw;
      }
      > :last-child {
        font-size: 3vw;
      }
    } 
  }
`
