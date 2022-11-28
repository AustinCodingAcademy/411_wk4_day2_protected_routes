import { createStore } from 'redux'
// Intellisense reccomends using "configureStore"
import reducers from './reducers'
import state from './state'



export default createStore(reducers, state)