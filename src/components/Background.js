import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { isLoggedIn } from 'Store/Models/Login/selectors'

const Styles = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  background-image: url('/golden_gate.jpg');
  background-size: cover;
  background-position: center center;
  filter: ${props => (props.isLoggedIn ? 'blur(0px)' : 'blur(5px)')};
`

class BackGround extends React.Component {
  render() {
    const { isLoggedIn } = this.props
    console.log({ isLoggedIn })
    return <Styles isLoggedIn={isLoggedIn} />
  }
}

export default connect(state => {
  return {
    isLoggedIn: isLoggedIn(state)
  }
})(BackGround)
