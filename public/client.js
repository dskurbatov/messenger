import React from 'react'
import ReactDOM from 'react-dom'
import { Counter } from '../components/app'
import { createStore } from 'redux'
import { reducer } from '../js/reducer'


const store = createStore(reducer)

const render = () => {
	ReactDOM.render(
		<Counter 
		value={store.getState()}
		onIncreament={() => {
			store.dispatch({type: 'INCREAMENT'})
		}}
		onDecreament={() => {
			store.dispatch({type: 'DECREAMENT'})
		}} />, 
		document.getElementById('root')
	)
}

store.subscribe(render)
render()
