import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'
import React, { useState, useRef } from 'react'
import { data } from '../data'
import dynamic from 'next/dynamic'

import Home from '../components/Home'
const Authentication = dynamic(() => import('../components/Authentication'))
import Tournament from '../components/Tournament'
import Team from '../components/Team'
import Video from '../components/Video'
import Contacts from '../components/Contacts'
import Faq from '../components/Faq'
import AboutUs from '../components/AboutUs'

export async function getStaticProps() {
  return { props: { data } }
}

export default function Index({ data }) {
  const [ authClass, setAuthClass ] = useState('invisible')
  const [ isLogInTabVisible, setIsLogInTabVisible ] = useState(null)

  const tournamentRef = useRef(null)
  const teamRef = useRef(null)
  const videoRef = useRef(null)
  const faqRef = useRef(null)
  const contactsRef = useRef(null)
  const aboutUsRef = useRef(null)

  const scroll = e => {
    if (e.currentTarget.id === 'home') {
      tournamentRef.current.scrollIntoView()
    } else if (e.currentTarget.id === 'tournament') {
      teamRef.current.scrollIntoView()
    } else if (e.currentTarget.id === 'team') {
      videoRef.current.scrollIntoView()
    } else if (e.currentTarget.id === 'video') {
      contactsRef.current.scrollIntoView()
    } else if (e.currentTarget.id === 'contacts') {
      faqRef.current.scrollIntoView()
    } else if (e.currentTarget.id === 'faq') {
      aboutUsRef.current.scrollIntoView()
    }
  }

  const showLogInModal = () => {
    setAuthClass('visible')
    setIsLogInTabVisible(true)
  }

  const showSingUpModal = () => {
    setAuthClass('visible')
    setIsLogInTabVisible(false)
  }

  const closeAuth = e => {
    if (e.target.id === 'auth') {
      setAuthClass('invisible')
    }
  }

  return (
    <>
      <Head>
        <title>Arrange your basketball tournament! | LCO Basketball Tournament</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Have an amazing basketball tournament!" />
      </Head>

      <GlobalStyle />
      <DivGrid>
        <Home 
          scroll={scroll} 
          showLogInModal={showLogInModal} 
          showSingUpModal={showSingUpModal} 
        />
        <Authentication
          authClass={authClass} 
          isLogInTabVisible={isLogInTabVisible}
          showLogInModal={showLogInModal}
          showSingUpModal={showSingUpModal}
          closeAuth={closeAuth}
        />
        <Tournament 
          tournamentRef={tournamentRef} 
          scroll={scroll}
        />
        <Team
          teamRef={teamRef} 
          scroll={scroll} 
          data={data}
        />
        <Video
          videoRef={videoRef} 
          scroll={scroll} 
        />
        <Contacts
          contactsRef={contactsRef} 
          scroll={scroll} 
        />
        <Faq 
          faqRef={faqRef} 
          scroll={scroll}
        />
        <AboutUs aboutUsRef={aboutUsRef} />
      </DivGrid>
    </>
  )
}

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Georgia, sans-serif;
    height: 100%;
    scroll-behavior: smooth;
    background-color: #fad185; 
  }

  #__next {
    height: 100%;
  }

  @font-face {
    font-family: 'Timmana';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/timmana-v4-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Timmana'),
        url('/fonts/timmana-v4-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/timmana-v4-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/timmana-v4-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/timmana-v4-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/timmana-v4-latin-regular.svg#Timmana') format('svg'); /* Legacy iOS */
  }

  :root {
    --blackGradient: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
    --whiteGradient: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    --gutter: 20px;
  }
`

const DivGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 100vh) minmax(100vh, auto) repeat(4, 100vh);
  grid-template-columns: 50% 50%;
  > .invisible {
    visibility: hidden;
  }
  > .visible {
    visibility: visible;
  }
  @media only screen and (min-width: 768px) {
    grid-template-rows: repeat(4, 100vh) repeat(2, 50vh);
  }
`
