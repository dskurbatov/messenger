import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import TodoApp from '../components/app'
import store from '../js/store'


ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>, 
	document.getElementById('root')
)