import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  loggedIn: false,
  loggingIn: false,
  authUser: false,
  loginFailed: false,
  credentials: {
    username: '',
    password: ''
  }
})

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ENTER_USERNAME':
      return state.setIn(['credentials', 'username'], action.value)

    case 'ENTER_PASSWORD':
      return state.setIn(['credentials', 'password'], action.value)

    case 'PROCESSING_LOGIN':
      return state.set('loggingIn', true)

    case 'USER_LOGIN':
      //reset state to initial
      state = initialState

      //flag state as being loggedIn
      state = state.set('loggedIn', true)

      state = state.set('authUser', action.user)

      return state

    case 'FAILED_LOGIN':
      state = state.set('loggingIn', false)

      state = state.set('loginFailed', true)

      return state

    case 'USER_LOGOUT':
      return initialState

    default:
      return state
  }
}
