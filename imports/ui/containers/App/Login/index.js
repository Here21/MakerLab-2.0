import React, { Component } from 'react'
import { Card } from 'antd'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
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

  onHandleLogin(value) {
    console.log(value)
    Meteor.loginWithPassword(value.email, value.password, (error) => {
      if (error) console.log(error)
    })
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
    Accounts.createUser(userInfo, (error) => {
      console.log(error)
    })
    // console.log(feedback)
    // Meteor.call('user.create', userInfo, (err, res) => {
    //   console.log(err)
    //   console.log(res)
    // })
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
                  login={::this.onHandleLogin}
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
