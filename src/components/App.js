import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { isLoggedIn } from 'Store/Models/Login/selectors'
import CrazyOnes from 'components/CrazyOnes'
import NotFound from 'components/NotFound'

class App extends Component {
  render() {
    const { isLoggedIn } = this.props

    if (!isLoggedIn) {
      return <Redirect to="/Login" />
    }

    return (
      <Switch>
        <Route exact path="/" component={CrazyOnes} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default connect(state => {
  return {
    isLoggedIn: isLoggedIn(state)
  }
})(App)
