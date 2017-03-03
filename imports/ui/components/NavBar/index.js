import React from 'react'
import { Link } from 'react-router'
import './style.css'

const NavBar = () => (
  <header id="header">
    <div className="inner">
      <Link to="/" className="logo">MakerLab</Link>
      <div className="login-panel">
        登录
      </div>
      <nav id="nav">
        <Link to="/">主页</Link>
        <Link to="lab">实验室</Link>
        <Link to="course">课程</Link>
        <Link to="project">项目</Link>
      </nav>
    </div>
  </header>
)

export default NavBar
