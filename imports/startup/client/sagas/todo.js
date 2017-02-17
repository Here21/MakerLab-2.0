import { put, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions/todo'

function* todo(action) {
  console.log('todo-saga')
  // yield put({ type: 'ADD_TODO', text: action.payload })
}

export default function* todoSaga() {
  yield takeEvery(String(actions.add), todo)
}
