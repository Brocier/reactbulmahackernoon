import {combineReducers} from 'redux'
import blog from './blog/reducer.js'
import medium from './medium/reducer.js'

export const rootReducer = combineReducers({blog, medium})