import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Tournament({ tournamentRef, scroll }) {
  return (
    <SectionTournament ref={tournamentRef}>
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
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  background-image: url('/img/mobileImg/tournamentMobile.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  > :first-child {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
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
    > :first-child {
      font-size: 5vw;
    }
  }
  @media only screen and (min-width: 768px) {
    background-image: url('/img/tournament.jpg');
    > :first-child {
      margin-top: 5em;
    }
  }
  @media only screen and (min-width: 992px) {
    > :first-child {
      margin-top: 4em;
    }
  }
  @media only screen and (min-width: 1200px) {
    > :first-child {
      margin-top: 2em;
    }
  }
`
