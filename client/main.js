import 'babel-polyfill'

import React from 'react'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import routers from '../imports/startup/client/routers'
// import App from '../imports/ui/containers/App'
import configure from '../imports/startup/client/store'
import sagas from '../imports/startup/client/sagas/index'

const store = configure()
store.runSaga(sagas)

Meteor.startup(() => {
  render(
    <Provider store={store}>
      {
        routers
      }
    </Provider>,
    document.getElementById('app')
  );
});
