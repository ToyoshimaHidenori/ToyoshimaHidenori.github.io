import React	from 'react'
import Nav		from './Nav.jsx'
import Heading	from './Heading.jsx'
import Footer	from './Footer.jsx'
import "./tailwind.css"

export default () => (
  <div class="flex flex-col min-h-screen">
	<div class="flex-grow">
	<Nav />
    <Heading />
    <Footer />
	</div>
  </div>
)