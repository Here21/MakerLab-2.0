import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import React from 'react'

import Index from '../../../ui/containers/App'
import Home from '../../../ui/containers/App/Home'
import Lab from '../../../ui/containers/App/Lab'
import Course from '../../../ui/containers/App/Course'
import Project from '../../../ui/containers/App/Project'

// const chooseComponent = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('../Component/chooseProducts').default)
//   },'chooseProducts')
// }

const RouteConfig = (
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Home} />
      <Route path="/" component={Home} />
      <Route path="lab" component={Lab} />
      <Route path="course" component={Course} />
      <Route path="project" component={Project} />
    </Route>
  </Router>
);

export default RouteConfig
