import { fork } from 'redux-saga/effects'
import loggerSaga from './logger'
import todoSaga from './todo'

export default function* rootSaga() {
  yield [
    fork(loggerSaga),
    fork(todoSaga)
  ]
}
