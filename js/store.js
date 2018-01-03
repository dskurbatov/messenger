import { createStore, applyMiddleware } from 'redux'
import { todoApp } from './reducer'
import logger from 'redux-logger'
import thunk from '../middleware/thunk'

const store = createStore(
	todoApp, 
	{},
	applyMiddleware(logger, thunk)
)

export default store