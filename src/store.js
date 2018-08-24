import { createStore,applyMiddleware } from 'redux'
import reducers from './reducers/index'
import loggerMiddleware from './utils/loggerMiddleware'
import thunk from 'redux-thunk'


let middleware = applyMiddleware(thunk,loggerMiddleware);

const store = createStore(reducers,middleware)

export default store