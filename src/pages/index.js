import Head from 'next/head'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DivGrid>

      </DivGrid>
    </>
  )
}

const DivGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 100vh) minmax(100vh, auto) repeat(4, 100vh);
  grid-template-columns: 50% 50%;
`
