import React	from 'react'
import Nav		from './Nav.jsx'
import Heading	from './Heading.jsx'
import Skills	from './Skills.jsx'
import Histories from './Histories.jsx'
import Portfolio from './Portfolio.jsx'
import Footer	from './Footer.jsx'
import "./tailwind.css"


export default () => (
  <div class="flex flex-col min-h-screen">
    <div class="flex-grow">
      <Nav />
      <Heading />
      <Skills />
      <Histories />
      {/* <Portfolio /> */}
      <Footer />
    </div>
  </div>
)