import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Video({ videoRef, scroll }) {
  return (
    <SectionVideo ref={videoRef} tabIndex="0">
      <div>
        <iframe src="https://www.youtube-nocookie.com/embed/ivbSBxTzCac" title="YouTube video" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div id="video" onClick={scroll}>        
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </SectionVideo>
  )
}

const SectionVideo = styled.section`
  grid-row: 4 / 5;
  grid-column: 1 / 3;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  > :first-child {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: start;
    padding: 0 0 50% 0;
    > iframe {
      position: absolute;
      width: 100%;
      height: 92%;
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
    height: 8%;
    background-color: black;
    font-size: 2rem;
    cursor: pointer;
    > svg {
      color: white;
    }
    &:hover {
      background-color: white;
      > svg {
        color: black;
      }
    }
  }
`
