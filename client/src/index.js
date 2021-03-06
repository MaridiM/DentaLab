import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import 'utils/language/i18n' // import config to translate,  using i18next 
import { App } from 'pages'

import 'styles/index.sass'

ReactDOM.render(
  <Router>
      <App />
  </Router>, 
  document.getElementById('root')
);