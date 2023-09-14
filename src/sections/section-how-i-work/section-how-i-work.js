import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faBullhorn, faBullseye } from '@fortawesome/free-solid-svg-icons'
import './section-how-i-work.css'

function SectionHowIWork() {
  return (
    <div id="how-i-work" className="section section-how-i-work">
      <h2>How we work</h2>
      <h4><FontAwesomeIcon icon={faBullhorn} /> Effective and transparent communication</h4>
      <p>
        Many developers fall into trap of just writing code. But what they often forget is asking the right questions 
        early on  and solving a problem with prompt communication.
        Throughout our experience we learned how to shave off weeks and even months of unnecessary work with transparent and effective communication.
      </p>
      <hr/>
      <h4><FontAwesomeIcon icon={faBullseye} /> Pragmatic with business goals in mind</h4>
      <p>
        Our goal is to help you build a successful business, and every online business needs to move fast while ensuring code quality.
        We can quickly grok the perfect balance and develop your product with speed and stability.
      </p>
      <hr/>
      <h4><FontAwesomeIcon icon={faClock} /> I won't waste your time</h4>
      <p>
        We are a team of self-managed contributors who can mold into your processes very quickly, so we don't need a lot of hand holding. We know when to ask for permission and when to 
        make decisions independently.
      </p>
      <hr/>
      <h4><FontAwesomeIcon icon={faHandshake} /> Flexible and risk free engagement</h4>
      <p>
        Hiring new talent is a great challenge and even bigger risk. We prefer to have happy clients who choose to work with us on a daily basis.
        In order to do that we prefer signing flexible contracts which you can terminate at any time. Not that you will need to 
        <span className="smiley" role="img" aria-label="smiley">🙂</span>
      </p>
    </div>
  );
}

export default SectionHowIWork;
