import React from 'react'
import { Card } from 'antd'
import './style.css'

const LabCard = ({ user }) => {
  return (
    <Card style={{ width: 393, height: 420 }} bodyStyle={{ padding: 0 }}>
      <div className="card-image">
        <img alt="example" width="100%" height="208px" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
      </div>
      <div className="card-content">
        <img className="avatar" src="" alt="avatar" />
        <p className="username">Martin</p>
        <p className="user-introduce">移动互联网大赛金牌指导教师，ACM社团唯一指导教师</p>
        <p className="user-moto">座右铭座右铭座右铭座右铭座右铭座右铭座右铭座右铭座右铭座右铭座右铭座右铭座右铭座右铭座右铭</p>
        <div className="lab-state">描述描述描述</div>
      </div>
    </Card>
  )
}

export default LabCard
