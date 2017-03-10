import React, { Component } from 'react'
import { Card } from 'antd'
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
  render() {
    return (
      <div className="login-page">
        <div className="inner">
          <Card bordered={false} className="login-page-card">
            {
              this.state.loginState === 'login' ? <LoginForm /> : <Registration />
            }
          </Card>
        </div>
      </div>
    )
  }
}