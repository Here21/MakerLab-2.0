import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../../startup/client/actions/todo'
import NavBar from '../../components/NavBar'
import './style.css'

@connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  })
)

export default class App extends Component {
  handleButton() {
    this.props.actions.add({ text: 'button is click' })
  }

  render() {
    return (
      <div className={'test'}>
        <NavBar />
        Hello
        <button onClick={::this.handleButton}>BUTTON</button>
      </div>
    )
  }
}
