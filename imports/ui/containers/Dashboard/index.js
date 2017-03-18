import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
import { Menu, Breadcrumb, Icon } from 'antd'
import './style.css'

const SubMenu = Menu.SubMenu;

export default class AsideCollapse extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      loginState: 'login',
      collapse: true,
    }
  }

  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  }

  render() {
    const collapse = this.state.collapse;
    return (
      <div className={collapse ? 'layout-aside layout-aside-collapse' : 'layout-aside'}>
        <aside className="layout-sider">
          <div className="layout-logo" />
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
            <Menu.Item key="user">
              <Icon type="user" />
              {!collapse && <span className="nav-text">个人中心</span>}
            </Menu.Item>
            <Menu.Item key="setting">
              <Icon type="setting" />
              {!collapse && <span className="nav-text">设置</span>}
            </Menu.Item>
            <Menu.Item key="laptop">
              <Icon type="laptop" />
              {!collapse && <span className="nav-text">实验室</span>}
            </Menu.Item>
            <Menu.Item key="appstore-o">
              <Icon type="appstore-o" />
              {!collapse && <span className="nav-text">课程</span>}
            </Menu.Item>
            <Menu.Item key="folder">
              <Icon type="folder" />
              {!collapse && <span className="nav-text">文件</span>}
            </Menu.Item>
          </Menu>
          <div className="aside-action" onClick={::this.onCollapseChange}>
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>
        </aside>
        <div className="layout-main">
          <div className="layout-content">
            <div style={{ height: 220 }}>
              {
                this.props.children
              }
            </div>
          </div>
          <div className="layout-footer">
            Ant Design all rights reserved © 2015 Created by Ant UED
          </div>
        </div>
      </div>
    );
  }
}
