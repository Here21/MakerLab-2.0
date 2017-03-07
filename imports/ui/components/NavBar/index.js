import React from 'react'
import { Link } from 'react-router'
import './style.css'

const NavBar = ({ pathname }) => (
  <header id="header">
    <div className="inner">
      <Link to="/" className="logo">MakerLab</Link>
      <div className="login-panel">
        登录
      </div>
      <nav id="nav">
        <Link to="/home" className={pathname === 'home' ? 'active' : ''}>主页</Link>
        <Link to="/lab" className={pathname === 'lab' ? 'active' : ''}>实验室</Link>
        <Link to="/course" className={pathname === 'course' ? 'active' : ''}>课程</Link>
        <Link to="/project" className={pathname === 'project' ? 'active' : ''}>项目</Link>
      </nav>
    </div>
  </header>
)

export default NavBar
