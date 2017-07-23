import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAuthUser } from 'Store/Models/Login/selectors'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  background-color: hsla(0, 0%, 100%, 0.85);
  padding: 50px;
  max-width: 75%;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 10px;
    margin: 25px;
  }
`

const Center = styled.div`text-align: center;`

const LogoutButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`

class App extends Component {
  handleLogout = e => {
    this.props.dispatch({
      type: 'USER_LOGOUT'
    })
  }

  render() {
    const { user } = this.props

    return (
      <Container>
        <LogoutButton onClick={this.handleLogout}>Logout</LogoutButton>
        <Center>
          <img src={user.avatar} alt="presentation" />
        </Center>
        <Center>
          <h2>
            Welcome {user.first_name} {user.last_name}
          </h2>
        </Center>
        Here&lsquo;s to the crazy ones. The misfits. The rebels. The
        troublemakers. The round pegs in the square holes. The ones who see
        things differently. They&lsquo;re not fond of rules. And they have no
        respect for the status quo. You can quote them, disagree with them,
        glorify or vilify them. About the only thing you can&lsquo;t do is
        ignore them. Because they change things. They push the human race
        forward. And while some may see them as the crazy ones, we see genius.
        Because the people who are crazy enough to think they can change the
        world, are the ones who do.
      </Container>
    )
  }
}

export default connect(state => {
  return {
    user: getAuthUser(state)
  }
})(App)
