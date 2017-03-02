import React from 'react'
import './style.css'

const NavBar = () => (
  <header id="header">
    <div className="inner">
      <a href="/" className="logo">Theory</a>
      <div className="login-panel">
        登录
      </div>
      <nav id="nav">
        <a href="#">主页</a>
        <a href="#">实验室</a>
        <a href="#">课程</a>
        <a href="#">项目</a>
      </nav>
    </div>
  </header>
)

export default NavBar
