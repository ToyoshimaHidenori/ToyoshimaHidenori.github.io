import React      from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/App.jsx'
import Info from './components/Info.jsx'

render(
  <Router>
      <Route exact path="/" component={App}></Route>
      <Route path="/info" component={Info}></Route>
      {/* <Route path="/settings" component={Settings}></Route> */}
  </Router>
  ,
  document.querySelector('#app')
)