import React from 'react'
import styled from 'styled-components'

export default function teamPlayer({ dataItem }) {
  const {
    id,
    name,
    weight,
    height,
    age,
    born,
    exp,
    pts,
    reb,
    ast,
    pie
  } = dataItem

  return (
    <DivTeamPlayer>
      <img alt="player" src={`/img/team/${id}.webp`} />
      <div>{name}</div>
      <div>
        <div>WT</div>
        <div>{weight}</div>
      </div>
      <div>
        <div>HT</div>
        <div>{height}</div>
      </div>
      <div>
        <div>AGE</div>
        <div>{age}</div>
      </div>
      <div>
        <div>BORN</div>
        <div>{born}</div>
      </div>
      <div>
        <div>EXP</div>
        <div>{exp}</div>
      </div>
      <div>
        <div>PTS</div>
        <div>{pts}</div>
      </div>
      <div>
        <div>REB</div>
        <div>{reb}</div>
      </div>
      <div>
        <div>AST</div>
        <div>{ast}</div>
      </div>
      <div>
        <div>PIE</div>
        <div>{pie}</div>
      </div>
    </DivTeamPlayer>
  )
}

const DivTeamPlayer = styled.div`
  width: auto;
  height: auto;
  display: grid;
  grid-template-rows: auto repeat(3, auto) repeat(2, auto);
  grid-template-columns: repeat(2, 130px);
  border: black 1px solid;
  font-family: 'Timmana', sans-serif;
  background-color: rgba(45, 112, 255, 0.7);
  color: rgb(255, 255, 255);
  text-shadow:
    -1px -1px 1px #000000,
    1px -1px 1px #000000,
    -1px 1px 1px #000000,
    1px 1px 1px #000000; 
  > div {
    border: black 1px solid;
    padding: 0 .5em 0 .5em;
  } 
  > img {
    border-bottom: black 1px solid;
  } 
  > :first-child {
    grid-area: 1 / 1 / 2 / 3;
  }
  > :nth-child(2) {
    grid-area: 2 / 1 / 3 / 3;
    text-align: center;
    font-size: 1.3em;
  }
  > :nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
    > :last-child {
      text-align: center;
    }
  }
  > :nth-child(4) {
    grid-area: 3 / 2 / 4 / 3;
    > :last-child {
      text-align: center;
    }
  }
  > :nth-child(5) {
    grid-area: 4 / 1 / 5 / 2;
    > :last-child {
      text-align: center;
    }
  }
  > :nth-child(6) {
    grid-area: 4 / 2 / 5 / 3;
    > :last-child {
      text-align: center;
    }
  }
  > :nth-child(7) {
    grid-area: 5 / 1 / 6 / 3;
    > :last-child {
      text-align: center;
    }
  }
  > :nth-child(8) {
    grid-area: 6 / 1 / 7 / 2;
    > :first-child, > :last-child {
      text-align: center;
    }
  }
  > :nth-child(9) {
    grid-area: 6 / 2 / 7 / 3;
    > :first-child, > :last-child {
      text-align: center;
    }
  }
  > :nth-child(10) {
    grid-area: 7 / 1 / 8 / 2;
    > :first-child, > :last-child {
      text-align: center;
    }
  }
  > :nth-child(11) {
    grid-area: 7 / 2 / 8 / 3;
    > :first-child, > :last-child {
      text-align: center;
    }
  }
`
