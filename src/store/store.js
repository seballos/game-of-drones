import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory'

import rootReducer from '../reducers'

export const history = createHistory()
const middleware = routerMiddleware(history)
const defaultState = {}

const logger = createLogger({
  level: 'info',
  collapsed: true,
  colors: {
    // Colombian Flag Rules!!!
    prevState: () => '#fcd116',
    action: () => '#003893',
    nextState: () => '#ce1126',
  },
})

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  rootReducer,
  defaultState,
  compose(
    applyMiddleware(middleware),
    applyMiddleware(logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store
