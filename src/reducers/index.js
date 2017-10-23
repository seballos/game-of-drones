import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux' // we need this for react-router

import players from './players'
import rounds from './rounds'

const rootReducer = combineReducers({players, rounds, router: routerReducer})

export default rootReducer
