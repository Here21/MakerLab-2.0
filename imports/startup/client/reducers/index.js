import { combineReducers } from 'redux'
import { reducer as reduxAsyncConnect } from 'redux-connect'
import { routerReducer as routing } from 'react-router-redux'
import todos from './todo'

export default combineReducers({
  reduxAsyncConnect,
  routing,
  todos
})
