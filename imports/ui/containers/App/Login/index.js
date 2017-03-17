import React, { Component } from 'react'
import { Card } from 'antd'
import { Meteor } from 'meteor/meteor'
import LoginForm from '../../../components/LoginForm'
import Registration from '../../../components/RegistrationForm'

import './style.css';

export default class Login extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      loginState: 'login'
    }
  }

  onHandleLogin() {

  }

  onHandleRegistration(values) {
    const userInfo = {
      email: values.email,
      password: values.password,
      profile: {
        nickName: values.nickName,
        gender: values.gender
      }
    }
    console.log(userInfo)
    Meteor.call('user.create', userInfo, (err, res) => {
      console.log(err)
      console.log(res)
    })
  }

  onHandleTransition() {
    this.setState({
      loginState: this.state.loginState === 'login' ? 'registration' : 'login'
    })
  }

  render() {
    return (
      <div className="login-page">
        <div className="inner">
          <Card bordered={false} className="login-page-card">
            {
              this.state.loginState === 'login' ?
                <LoginForm
                  turnRegistration={::this.onHandleTransition}
                />
                :
                <Registration
                  turnLogin={::this.onHandleTransition}
                  registration={::this.onHandleRegistration}
                />
            }
          </Card>
        </div>
      </div>
    )
  }
}
