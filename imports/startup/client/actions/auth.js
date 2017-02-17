import { createAction } from 'redux-actions'

export const loginRequested = createAction('auth/LOGIN_REQUESTED')
export const loginSucceeded = createAction('auth/LOGIN_SUCCEEDED')
export const loginFailed = createAction('auth/LOGIN_FAILED')
