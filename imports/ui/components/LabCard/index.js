import React from 'react'
import { Card } from 'antd'
import './style.css'

const LabCard = ({ user }) => (
  <Card style={{ width: 393, height: 420, margin: '6px 0px' }} bodyStyle={{ padding: 0 }}>
    <div className="lab-card-image">
      <img alt="example" width="100%" height="208px" src="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png" />
    </div>
    <div className="lab-card-content">
      <img className="avatar" src="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png" alt="avatar" />
      <p className="username">Martin</p>
      <p className="user-feature">职位特色：移动互联网大赛金牌指导教师，ACM社团唯一指导教师</p>
      <p className="user-introduce">个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述个人描述</p>
      <div className="lab-state">描述描述描述</div>
    </div>
  </Card>
)


export default LabCard
