import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import styled, { keyframes } from 'styled-components'
import LoginInput from 'components/login/LoginInput'
import loginActions from 'Store/Models/Login/actions'
import {
  getCredentials,
  isLoggedIn,
  isLoggingIn,
  loginFailed
} from 'Store/Models/Login/selectors'
import FaSpinner from 'react-icons/lib/fa/circle-o-notch'
import { If } from 'components/Conditional'

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`

const Spinner = styled(FaSpinner)`
  animation: ${rotate360} 2s linear infinite;
  font-size: 100px;
  color: rgba(60, 60, 60, 0.45);
`

const Alert = styled.div`
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 4px;
`

class Login extends Component {
  handleChange = data => {
    switch (data.name) {
      case 'username':
        this.props.dispatch({
          type: 'ENTER_USERNAME',
          value: data.value
        })
        break

      case 'password':
        this.props.dispatch({
          type: 'ENTER_PASSWORD',
          value: data.value
        })
        break

      default:
        return
    }
  }

  handleEnter = e => {
    //ignore everything but an enter key
    if (e.key !== 'Enter') {
      return
    }

    //nothing to do if the username or password is still blank
    if (this.props.username === '' || this.props.password === '') {
      return
    }

    this.props.dispatch(loginActions.login())
  }

  render() {
    const { isLoggingIn, isLoggedIn, loginFailed } = this.props

    //if the user is logged in there is no business in being here
    if (isLoggedIn) {
      return <Redirect to="/" />
    }

    if (isLoggingIn) {
      return <Spinner />
    }

    return (
      <div>
        <If condition={loginFailed}>
          <Alert>Login Failed</Alert>
        </If>

        <LoginInput
          type="text"
          value={this.props.username}
          name="username"
          placeholder="User Name"
          onChange={this.handleChange}
          onKeyPress={this.handleEnter}
        />

        <LoginInput
          type="password"
          value={this.props.password}
          name="password"
          placeholder="Enter Password"
          onChange={this.handleChange}
          onKeyPress={this.handleEnter}
        />
      </div>
    )
  }
}

export default connect(state => {
  const credentials = getCredentials(state)

  return {
    isLoggedIn: isLoggedIn(state),
    isLoggingIn: isLoggingIn(state),
    loginFailed: loginFailed(state),
    username: credentials.get('username'),
    password: credentials.get('password')
  }
})(Login)
