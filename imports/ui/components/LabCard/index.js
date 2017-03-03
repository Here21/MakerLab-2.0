import React from 'react'
import { Card } from 'antd'

const LabCard = ({ user }) => {
  return (
    <Card loading style={{ width: 393, height: 420 }} bodyStyle={{ padding: 0 }}>
      <div className="custom-image">
        <img alt="example" width="100%" height="208px" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
      </div>
      <div className="custom-card">
        <img src="" width="54px" height="54px" alt="avatar" />
        <p className="username">Martin</p>
        <p className="user-introduce">移动互联网大赛金牌指导教师，ACM社团唯一指导教师</p>
        <p className="user-moto">座右铭座右铭座右铭座右铭座右铭座右铭座右铭座右铭座右铭座右铭座右铭座右铭座右铭座右铭座右铭</p>
        <div className="lab-state">描述描述描述</div>
      </div>
    </Card>
  )
}

export default LabCard
