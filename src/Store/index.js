import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import Immutable from 'immutable'

let middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger')
  const logger = createLogger({
    collapsed: true,
    stateTransformer: state => {
      if (!Immutable.Iterable.isIterable(state)) {
        console.log('ROH ROE...non immutable object passed for state')
        return state
      }

      return state.toJS()
    }
  })

  middleware = [...middleware, logger]
} else {
  //this would be a good place to add production only middleware
}

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension && process.env.NODE_ENV !== 'production'
      ? window.devToolsExtension()
      : f => f
  )
)
