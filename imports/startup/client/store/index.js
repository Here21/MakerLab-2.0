import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../reducers';

export default function configure (initialState) {
  const create = (typeof window !== 'undefined' && window.devToolsExtension)
    ? window.devToolsExtension()(createStore)
    : createStore;

  const sagaMiddleware = createSagaMiddleware();
  const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(create);
  const store = createStoreWithMiddleware(rootReducer, initialState);

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
