import { createStore,combineReducers,applyMiddleware } from 'redux'
import loggedUserReducer from './reducers/loggedUserReducers'
import loggerMiddleware from './utils/loggerMiddleware'

const reducers = combineReducers({
    loggedUserState: loggedUserReducer
})
let middleware = applyMiddleware(loggerMiddleware);

const store = createStore(reducers,middleware)

export default store