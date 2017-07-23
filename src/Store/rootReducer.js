import { Map } from 'immutable'
import LoginReducer from './Models/Login/reducer'

const initialState = new Map()

export default function(state = initialState, action) {
  state = state.set('Login', LoginReducer(state.get('Login'), action))

  return state
}
