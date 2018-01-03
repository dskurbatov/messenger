import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import TodoApp from '../components/app'
import React from 'react'


const Root = ({ store }) => {
	return (
		<Provider store={store}>
			<Router>
				<Route path="/:filter?" component={TodoApp}></Route>
			</Router>
		</Provider>
	)
}

export default Root