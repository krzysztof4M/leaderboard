import { createStore, compose, applyMiddleware, } from 'redux'
import rootReducer from './rootReducer'
import { persistMiddleware } from './middlewares'

const initialState = {
  main: {
    data: JSON.parse(localStorage.getItem('leaderboardData')) || [],
    filterDate: null
  },
}

const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(persistMiddleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store
