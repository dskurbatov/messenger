import { createStore } from 'redux'
import { todoApp } from '../js/reducer'

const store = createStore(todoApp)

export default store