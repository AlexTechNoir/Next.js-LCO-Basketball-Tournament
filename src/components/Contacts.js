import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Contacts({ contactsRef, scroll, isArrowVisible }) {
  return (
    <SectionContacts ref={contactsRef} tabIndex="0">
      <div>
        Contact us:
        <ul>
          <li>Mobile: +91999999999</li>
          <li>Address: LCO Basketball Ground, 221B Baker Street, London</li>
        </ul>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4236376838426!2d-0.16062258608774546!3d51.52378926274547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acf33628211%3A0x445d7677a88322e1!2s221B%20Baker%20St%2C%20Marylebone%2C%20London%20NW1%206XE!5e0!3m2!1sen!2suk!4v1618496481844!5m2!1sen!2suk" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" title="Google map"></iframe>
      {
        !isArrowVisible ? null : (
          <div id="contacts" onClick={scroll}>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        )
      }
    </SectionContacts>
  )
}

const SectionContacts = styled.section`
  grid-row: 5 / 6;
  grid-column: 1 / 3;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  background-color: rgb(255, 199, 79);
  scroll-snap-align: start;
  > :first-child {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    font-family: 'Timmana', sans-serif;
    padding: .6em;
    > ul {
      margin-bottom: 0;
    }
  }
  > :nth-child(2) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    justify-self: stretch;
    align-self: stretch;
  }
  > #contacts {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
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
  @media only screen and (min-width: 768px) {
    grid-template-rows: auto 1fr;
    > #contacts {
      display: none;
    }
  }
`
