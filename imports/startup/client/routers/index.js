import { Route, IndexRoute } from 'react-router'
import React from 'react'

import Index from '../../../ui/containers/App'
import Home from '../../../ui/containers/App/Home'
import Lab from '../../../ui/containers/App/Lab'
import Course from '../../../ui/containers/App/Course'
import Project from '../../../ui/containers/App/Project'
import Login from '../../../ui/containers/App/Login'

import SecondaryPage from '../../../ui/containers/App/SecondaryPage'

// const chooseComponent = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('../Component/chooseProducts').default)
//   },'chooseProducts')
// }

const RouteConfig = (
  <Route path="/" component={Index}>
    <IndexRoute component={Home} />
    <Route path="/" component={Home} />
    <Route path="lab" component={Lab} />
    <Route path="course" component={Course} />
    <Route path="project" component={Project} />
    <Route path="login" component={Login} />
    <Route path="lab/:labId" component={SecondaryPage} />
    <Route path="course/:courseId" component={SecondaryPage} />
    <Route path="project/:projectId" component={SecondaryPage} />
  </Route>
);

export default RouteConfig
