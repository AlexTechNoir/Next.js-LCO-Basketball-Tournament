import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function Tournament({ tournamentRef, scroll }) {
  return (
    <SectionTournament ref={tournamentRef} tabIndex="0">
      <div>
        <Image 
          alt=""
          src="/img/tournament.webp"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          quality={100}
        />
      </div>
      <div>
        Big tournament is coming soon!
      </div>
      <div id="tournament" onClick={scroll}>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </SectionTournament>
  )
}

const SectionTournament = styled.section`
  grid-area: 2 / 1 / 3 / 3;
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
    font-family: 'Timmana', sans-serif;
    margin-top: 8em;
    color: rgb(255, 174, 0);
    justify-content: center;
    text-shadow:
      -1px -1px 4px #d400ff,
      1px -1px 4px #d400ff,
      -1px 1px 4px #d400ff,
      1px 1px 4px #d400ff; 
    font-size: 7vw;
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
    > :nth-child(2) {
      font-size: 5vw;
    }
  }
  @media only screen and (min-width: 768px) {
    > :nth-child(2) {
      margin-top: 5em;
    }
  }
  @media only screen and (min-width: 992px) {
    > :nth-child(2) {
      margin-top: 4em;
    }
  }
  @media only screen and (min-width: 1200px) {
    > :nth-child(2) {
      margin-top: 2em;
    }
  }
`
