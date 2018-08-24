import { combineReducers } from 'redux'
import loggedUserReducer from './loggedUserReducers'

export default combineReducers({
    loggedUserState: loggedUserReducer
})