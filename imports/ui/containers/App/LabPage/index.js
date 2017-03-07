import React, { Component } from 'react'
import BusinessCard from '../../../components/BusinessCard'
import './style.css';

export default class LabPage extends Component {
  render() {
    return (
      <div className="lab-secondary-page">
        <div className="lab-page-bg">
          <div className="lab-page-brief">
            <h1>移动互联网</h1>
            <h2>探索移动互联网的最新技术与最佳实践</h2>
            <h3>Created by Martin</h3>
          </div>
          <img alt="example" width="100%" height="624px" src="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png" />
        </div>
        <BusinessCard />
        <div className="inner">
          nimenhao
        </div>
      </div>
    )
  }
}
