import 'babel-polyfill'

import React from 'react'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routers from '../imports/startup/client/routers'
import configure from '../imports/startup/client/store'
import sagas from '../imports/startup/client/sagas/index'
import '../imports/startup/accounts-config.js';

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)
store.runSaga(sagas)

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <Router history={history}>
        {
          routers
        }
      </Router>
    </Provider>,
    document.getElementById('app')
  );
});
