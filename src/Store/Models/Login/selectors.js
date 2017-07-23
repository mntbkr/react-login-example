export const isLoggedIn = state => {
  return !!state.getIn(['Login', 'loggedIn'], false)
}

export const isLoggingIn = state => {
  return !!state.getIn(['Login', 'loggingIn'], false)
}

export const loginFailed = state => {
  return !!state.getIn(['Login', 'loginFailed'], false)
}

export const getCredentials = state => {
  return state.getIn(['Login', 'credentials'])
}

export const getAuthUser = state => {
  return state.getIn(['Login', 'authUser'])
}
