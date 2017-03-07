import { Route, IndexRoute } from 'react-router'
import React from 'react'

import Index from '../../../ui/containers/App'
import Home from '../../../ui/containers/App/Home'
import Lab from '../../../ui/containers/App/Lab'
import Course from '../../../ui/containers/App/Course'
import Project from '../../../ui/containers/App/Project'

import LabPage from '../../../ui/containers/App/LabPage/index'

// const chooseComponent = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('../Component/chooseProducts').default)
//   },'chooseProducts')
// }

const RouteConfig = (
  <Route path="/" component={Index}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="lab" component={Lab} />
    <Route path="lab/:labId" component={LabPage} />
    <Route path="course" component={Course} />
    <Route path="project" component={Project} />
  </Route>
);

export default RouteConfig
