import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './rootReducer'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import {initSagas} from './rootSaga.js'

const sagaMiddleware = createSagaMiddleware()

export function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, reduxImmutableStateInvariant())))
  initSagas(sagaMiddleware)
  return store
}