import React from 'react'
import styled from 'styled-components'

export default function AboutUs({ aboutUsRef }) {
  return (
    <SectionAboutUs ref={aboutUsRef}>
      <div>
        <h1>About Us</h1>
        <div>
          <img src='/img/logo.webp' alt="LCO logo" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corporis culpa eligendi atque, expedita ipsa voluptas ullam deleniti labore quidem, vero nostrum molestiae numquam eaque? Id deserunt officia distinctio sapiente? Et alias exercitationem eligendi animi perspiciatis architecto, nihil provident, modi accusamus dolor ducimus porro repudiandae quas vero!
        </div>
      </div>
      <div></div>
    </SectionAboutUs>
  )
}

const SectionAboutUs = styled.section`
  grid-area: 7 / 1 / 8 / 3;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 100%;
  background-color: rgb(255, 223, 79);
  > :first-child {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: column;
    font-family: 'Timmana', sans-serif;
    padding: 1em;    
    > :first-child {
      text-align: center;
      text-shadow:
        -1px -1px 3px #d400ff,
        1px -1px 3px #d400ff,
        -1px 1px 3px #d400ff,
        1px 1px 3px #d400ff; 
      font-size: 10vw;
      color: rgb(255, 174, 0);
      margin: 0;
    }
    > :last-child > img {
      float: left;
      width: 100px;
      height: 100px;
    }
  }
  > :last-child {
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url('/img/aboutus.jpg');
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
  }
  @media only screen and (min-width: 600px) {
    > :first-child > :first-child {
      font-size: 8vw;
    }
  }
  @media only screen and (min-width: 768px) {
    grid-area: 6 / 2 / 7 / 3;
    > :first-child > :first-child {
      font-size: 6vw;
    }
  }
  @media only screen and (min-width: 992px) {
    > :first-child > :first-child {
      font-size: 4vw;
    }
  }
  @media only screen and (min-width: 1200px) {
    > :first-child > :first-child {
      font-size: 48px;
    }
  }
`
