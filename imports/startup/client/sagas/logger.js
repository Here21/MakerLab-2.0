import { select, takeEvery } from 'redux-saga/effects'

function* logger(action) {
  const newState = yield select()
  console.log('received action: ', action)
  console.log('state become: ', newState)
}

export default function* loggerSaga() {
  console.log('logger')
  yield takeEvery('*', logger)
}
