import React, { useEffect} from 'react'
import smoothscroll from 'smoothscroll-polyfill'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' 
config.autoAddCss = false 

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    smoothscroll.polyfill()
  },[])

  return <Component {...pageProps} />
}
