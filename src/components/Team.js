import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { data } from '../data'

import TeamPlayer from './team/teamPlayer'

export default function Team({ teamRef, scroll, data }) {
  return (
    <DivTeam ref={teamRef}>
      <h2>Team</h2>
      <div>
        {
          data.map(dataItem => {
            return <TeamPlayer key={dataItem.id} dataItem={dataItem} />
          })
        }
      </div>
      <div id="team" onClick={scroll}>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </DivTeam>
  )
}

const DivTeam = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / 3;
  background-image: url('/img/mobileImg/teamMobile.webp');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;   
  overflow-y: auto; 
  position: relative;
  > :first-child {   
    height: 6vh;
    margin-bottom: 0;
    font-family: 'Timmana', sans-serif;
    font-size: 10vw;
    text-align: center;
    color: rgb(255, 174, 0);
    text-shadow:
      -1px -1px 4px #d400ff,
      1px -1px 4px #d400ff,
      -1px 1px 4px #d400ff,
      1px 1px 4px #d400ff; 
  }
  > :nth-child(2) {
    height: 75vh;
    display: grid;
    grid-gap: calc(var(--gutter) / 2);
    grid-template-columns: 10px repeat(${data.length}, 260px) 10px;
    grid-template-rows: 497px;
    overflow-x: auto;
    padding-bottom: calc(.75 * var(--gutter));
    margin: 5vh 0 calc(-.5 * var(--gutter)) 0;
  }
  > :last-child {
    height: 6vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3em;
    background: var(--blackGradient);
    z-index: 1;
    cursor: pointer;
    position: absolute;
    bottom: 0;
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
      font-size: 8vw;
    }
  }
  @media only screen and (min-width: 768px) {
    background-image: url('/img/team.webp');
  }
  @media only screen and (max-width: 992px) {
    > :first-child {
      margin-top: 0;
    }
    > :nth-child(2) {
      margin: 0 0 calc(-.5 * var(--gutter)) 0;
      height: 88vh;
      &:before, :after {
        content: '';
      }
    }
  }
  @media only screen and (min-width: 992px) {
    > :first-child {
      font-size: 6vw;
    }
    > :nth-child(2) {
      grid-template-columns: repeat(auto-fit, 260px);
      justify-content: center;	
      overflow-x: hidden;
    }
  }
  @media only screen and (min-width: 1200px) {
    > :first-child {
      font-size: 4vw;
    }
  }
`
