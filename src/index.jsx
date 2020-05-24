import React      from 'react'
import ReactDOM from 'react-dom'

import App from './components/App.jsx'

// render(
//   <App />,
//   document.querySelector('#app')
// )
const target = document.querySelector('#app');
ReactDOM.render(<App/>, target);