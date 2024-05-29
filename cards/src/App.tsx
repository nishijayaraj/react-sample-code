import React from "react";
import Contact from "./Contact";
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
      <Contact img="./images/mr-whiskerson.png" name="Mr. Whiskerson"
        phone="(212) 555-1234" email="mr.whiskaz@catnap.meow" />

      <Contact img="./images/fluffykins.png" name="Fluffykins"
        phone="212) 555-2345" email="fluff@me.com" />

      <Contact img="./images/felix.png" name="Mr. Whiskerson"
        phone="(212) 555-1234" email="thecat@hotmail.com" />

      <Contact img="./images/pumpkin.png" name="Pumpkin"
        phone="(0800) CAT KING" email="pumpkin@scrimba.com" />

    </div>
  )
}

export default App