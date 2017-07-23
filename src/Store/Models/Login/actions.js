import credentials from './credentials'
import { getCredentials } from './selectors'

export default {
  login() {
    return (dispatch, getState) => {
      //step one mark our state as processing Login
      dispatch({
        type: 'PROCESSING_LOGIN'
      })

      const loginCredentials = getCredentials(getState())

      //now lets fake a network request with setTimeout
      setTimeout(function() {
        const username = loginCredentials.get('username')
        const password = loginCredentials.get('password')

        const user = credentials.find(function(user) {
          return username === user.username && password === user.password
        })

        if (user) {
          return dispatch({
            type: 'USER_LOGIN',
            user
          })
        }

        dispatch({
          type: 'FAILED_LOGIN'
        })
      }, 1500)
    }
  },

  updateCredentials(field, value) {
    console.log({ field, value })
  }
}
