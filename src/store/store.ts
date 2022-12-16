import { createStore, applyMiddleware } from 'redux'
import rootReducer from './root-reducer'
import logger from 'redux-logger'

const Store = createStore(rootReducer, applyMiddleware(logger))

export type RootState = ReturnType<typeof Store.getState>

export default Store
