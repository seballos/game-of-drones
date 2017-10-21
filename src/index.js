import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Link } from 'react-router'

render((
  <Router history={browserHistory}>
  </Router>
), document.getElementById('root'))

