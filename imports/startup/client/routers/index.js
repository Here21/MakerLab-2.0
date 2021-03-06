import { Route, IndexRoute } from 'react-router'
import React from 'react'

import App from '../../../ui/containers/App'
import Home from '../../../ui/containers/App/Home'
import Lab from '../../../ui/containers/App/Lab'
import Course from '../../../ui/containers/App/Course'
import Project from '../../../ui/containers/App/Project'
import Login from '../../../ui/containers/App/Login'
import SecondaryPage from '../../../ui/containers/App/SecondaryPage'

import Dashboard from '../../../ui/containers/Dashboard'
import Me from '../../../ui/containers/Dashboard/Me'
import MyLab from '../../../ui/containers/Dashboard/MyLab'
import MyCourse from '../../../ui/containers/Dashboard/MyCourse'


// const chooseComponent = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('../Component/chooseProducts').default)
//   },'chooseProducts')
// }

export const baseRoute = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/" component={Home} />
    <Route path="/lab" component={Lab} />
    <Route path="/course" component={Course} />
    <Route path="/project" component={Project} />
    <Route path="/login" component={Login} />
    <Route path="/lab/:labId" component={SecondaryPage} />
    <Route path="/course/:courseId" component={SecondaryPage} />
    <Route path="/project/:projectId" component={SecondaryPage} />
  </Route>
)

export const dashboardRoute = (
  <Route path="/dashboard" component={Dashboard}>
    <IndexRoute component={Me} />
    <Route path="/dashboard/me" component={Me} />
    <Route path="/dashboard/lab" component={MyLab} />
    <Route path="/dashboard/course" component={MyCourse} />
  </Route>
)


// export default { RouteConfig, dashboardRoute }
// export default RouteConfig
