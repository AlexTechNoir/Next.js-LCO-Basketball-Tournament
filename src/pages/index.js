import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'
import React, { useState } from 'react'

import Home from '../components/Home'
import Authentication from '../components/Authentication'
import Tournament from '../components/Tournament'
import Team from '../components/Team'
import Video from '../components/Video'
import Contacts from '../components/Contacts'
import Faq from '../components/Faq'
import AboutUs from '../components/AboutUs'

export default function Index() {
  const [ authClass, setAuthClass ] = useState('invisible')
  const [ isLogInTabVisible, setIsLogInTabVisible ] = useState(null)

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
        <Authentication />
        <Tournament />
        <Team />
        <Video />
        <Contacts />
        <Faq />
        <AboutUs />
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
    background-color: #e9e9e9; 
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
`

const DivGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 100vh) minmax(100vh, auto) repeat(4, 100vh);
  grid-template-columns: 50% 50%;
`
