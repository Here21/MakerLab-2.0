import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
// import * as api from 'utils/api';
import * as actions from '../actions/auth';

function* login(action) {
  try {
    // const auth = yield call(api.login, action.payload);
    // yield put({ type: String(actions.loginSucceeded), payload: auth });
    console.log('here!');
  } catch (e) {
    yield put({ type: String(actions.loginFailed), payload: e.message });
  }
}

export default function* authSaga() {
  yield* takeEvery(String(actions.loginRequested), login);
}
