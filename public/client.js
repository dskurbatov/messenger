//const { createStore } = require('redux')
//const { counter } = require('../js/reducer')
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/app'

const Hello = (props) => {
	return <h1>{props.hello}</h1> 
}

ReactDOM.render(<Hello hello="HEY"/>, document.getElementById('root'))