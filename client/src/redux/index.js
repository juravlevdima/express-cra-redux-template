import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createRootReducer from './reducers/rootReducer.js'

const initialState = {}

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose

const composedEnhancers = composeFunc(applyMiddleware(thunk))

const store = createStore(createRootReducer(), initialState, composedEnhancers)


export default store
