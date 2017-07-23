import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FaTimesCircle from 'react-icons/lib/fa/times-circle'

const Container = styled.div`position: relative;`

const Input = styled.input`
  border-radius: 3px;
  background-color: #fff;
  color: #333;
  opacity: 0.6;
  padding: 5px;
  height: 15px;
  width: 200px;
  border: 0;
  clear: both;
  margin-top: 7px;

  &:focus {
    outline: none;
  }
`

const ClearInput = styled.span`
  display: ${({ show }) => (show ? 'none' : 'block')};
  position: absolute;
  right: 5px;
  top: 9px;
  color: rgba(0, 0, 0, 0.14);

  &:hover {
    color: #fff;
  }
`

export default class LoginInput extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  clearInput = () => {
    this.props.onChange({
      name: this.props.name,
      value: ''
    })
  }

  handleChange = e => {
    this.props.onChange({
      name: this.props.name,
      value: e.target.value
    })
  }

  render() {
    return (
      <Container>
        <Input
          type={this.props.type}
          value={this.props.value}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          onKeyPress={this.props.onKeyPress}
        />
        <ClearInput onClick={this.clearInput} show={this.props.value === ''}>
          <FaTimesCircle />
        </ClearInput>
      </Container>
    )
  }
}
