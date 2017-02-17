import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react'

import Index from '../../../ui/containers/App';

// const chooseComponent = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('../Component/chooseProducts').default)
//   },'chooseProducts')
// }

const RouteConfig = (
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Index} />
      <Route path="index" component={Index} />
    </Route>
  </Router>
);

export default RouteConfig
