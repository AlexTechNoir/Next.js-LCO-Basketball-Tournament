import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Faq({ faqRef, scroll }) {
  return (
    <SectionFaq ref={faqRef} tabIndex="0"> 
      <div>
        <h1>FAQ</h1>
        <div>
          <div>
            Q: Lorem ipsum?
          </div>
          <div>
            A: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div>
          <div>
            Q: Maybe ipsum lorem?
          </div>
          <div>
            A: Esse reiciendis, sit vitae deleniti illo vel corporis adipisci similique delectus nulla quidem quis praesentium ab consequuntur?
          </div>
        </div>
        <div>
          <div>
            Q: What about lorem being ipsum?
          </div>
          <div>
            A: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, mollitia!
          </div>
        </div>
        <div>
          <div>
            Q: When will lorem ipsum be dolor sit amet?
          </div>
          <div>
            A: Molestiae laudantium dolor odio laboriosam, vero necessitatibus recusandae saepe vel sapiente reiciendis minima alias minus laborum.
          </div>
        </div>
      </div>
      <div id="faq" onClick={scroll}>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </SectionFaq>
  )
}

const SectionFaq = styled.section`
  grid-area: 6 / 1 / 7 / 3;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  background-image: url('/img/mobileImg/faqMobile.jpg');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  color: white; 
  overflow-y: auto;
  > :first-child {
    grid-area: 1 / 1 / 2 / 2;
    align-self: start;
    padding: 1em;
    font-family: 'Timmana', sans-serif;    
    > h1 {
      display: flex;
      justify-content: center;
    }
    > div {
      margin-bottom: 1em;
      > div {
        text-shadow:
          -1px -1px 1px #000000,
          1px -1px 1px #000000,
          -1px 1px 1px #000000,
          1px 1px 1px #000000; 
      }
    }
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
  @media only screen and (min-width: 768px) {
    grid-column: 1 / 2;
    background-image: url('/img/faq.jpg');
    > :last-child {
      display: none;
    }
  }
`
