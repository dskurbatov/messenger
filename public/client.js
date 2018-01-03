import React from 'react'
import ReactDOM from 'react-dom'
import store from '../js/store'
import Root from '../components/root'

ReactDOM.render(
	<Root store={store} />, 
	document.getElementById('root')
)