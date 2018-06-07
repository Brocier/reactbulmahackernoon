import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './rootReducer'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import intitialState from './intitialState';

export function configureStore() {
  return createStore(rootReducer, intitialState, composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant())))
}
