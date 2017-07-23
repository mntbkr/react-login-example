import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import store from 'Store/index'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Login from 'components/login/Login'
import App from 'components/App'
import Background from 'components/Background'

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Background />
            <Switch>
              <Route path="/Login" component={Login} />
              <Route component={App} />
            </Switch>
          </Container>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))
