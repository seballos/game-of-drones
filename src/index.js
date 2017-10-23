import React from 'react'
import { render } from 'react-dom'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

import store, { history } from './store/store'

import App from './components/App'
import InitialScreen from './components/InitialScreen'
import Round from './components/Round'
import WinnerScreen from './components/WinnerScreen'

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route
          exact
          path="/"
          render={() => (
             <App>
              <InitialScreen />
            </App>
          )}
        />
        <Route
          path="/round"
          render={() => {
            return (
              <App>
                <Round />
              </App>
            )
          }}/>
        <Route
          path="/winner"
          render={() => (
            <App>
              <WinnerScreen />
            </App>
          )}
        />
      </div>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))

