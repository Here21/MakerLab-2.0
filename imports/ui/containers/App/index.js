import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../../startup/client/actions/todo'
import NavBar from '../../components/NavBar'
import FooterBar from '../../components/FooterBar'
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
    const { location } = this.props
    console.log(location.pathname)
    return (
      <div className="container">
        <NavBar pathname={location.pathname} />
        { this.props.children }
        <FooterBar />
      </div>
    )
  }
}
