import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { data } from '../data'
import Image from 'next/image'

import TeamPlayer from './team/teamPlayer'

export default function Team({ teamRef, scroll, data }) {
  return (
    <SectionTeam ref={teamRef}>
      <div>
        <Image 
          alt=""
          src="/img/team.webp"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          quality={100}
        />
      </div>
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
    </SectionTeam>
  )
}

const SectionTeam = styled.section`
  grid-area: 3 / 1 / 4 / 3;
  /* background-image: url('/img/mobileImg/teamMobile.jpg');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;    */
  overflow-y: auto; 
  position: relative;
  > :first-child {
    position: absolute;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    z-index: -1;
  }
  > :nth-child(2) {   
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
  > :nth-child(3) {
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
      font-size: 8vw;
    }
  }
  @media only screen and (min-width: 768px) {
    /* background-image: url('/img/team.jpg'); */
  }
  @media only screen and (max-width: 992px) {
    > :nth-child(2) {
      margin-top: 0;
    }
    > :nth-child(3) {
      margin: 0 0 calc(-.5 * var(--gutter)) 0;
      height: 88vh;
      &:before, :after {
        content: '';
      }
    }
  }
  @media only screen and (min-width: 992px) {
    > :nth-child(2) {
      font-size: 6vw;
    }
    > :nth-child(3) {
      grid-template-columns: repeat(auto-fit, 260px);
      justify-content: center;	
      overflow-x: hidden;
    }
  }
  @media only screen and (min-width: 1200px) {
    > :nth-child(2) {
      font-size: 4vw;
    }
  }
`
