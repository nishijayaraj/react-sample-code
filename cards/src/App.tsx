import React from "react";
import felix from "./images/felix.png"
import mrwhiskerson from "./images/mr-whiskerson.png"
import phoneicon from "./images/phone-icon.png"
import mailicon from "./images/mail-icon.png"
import fluffykins from "./images/fluffykins.png"
import pumpkin from "./images/pumpkin.png"

/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

function App() {
  return (
    <div className="contacts">

      <div className="contact-card">
        <img src={mrwhiskerson} />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src={phoneicon} />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src={mailicon} />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={fluffykins} />
        <h3>Fluffykins</h3>
        <div className="info-group">
          <img src={phoneicon} />
          <p>(212) 555-2345</p>
        </div>
        <div className="info-group">
          <img src={mailicon} />
          <p>fluff@me.com</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={felix} />
        <h3>Felix</h3>
        <div className="info-group">
          <img src={phoneicon} />
          <p>(212) 555-4567</p>
        </div>
        <div className="info-group">
          <img src={mailicon} />
          <p>thecat@hotmail.com</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={pumpkin} />
        <h3>Pumpkin</h3>
        <div className="info-group">
          <img src={phoneicon} />
          <p>(0800) CAT KING</p>
        </div>
        <div className="info-group">
          <img src={mailicon} />
          <p>pumpkin@scrimba.com</p>
        </div>
      </div>

    </div>
  )
}

export default App