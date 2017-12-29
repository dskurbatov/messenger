import React from 'react'
import ReactDOM from 'react-dom'
import { Footer } from '../components/filters'
import { AddTodo } from '../components/add_todo'
import VisibleTodos from '../components/todo_list'

const TodoApp = () => {
	return (
		<div>
			<AddTodo />
			<VisibleTodos />
			<Footer />
		</div>
	)
}

ReactDOM.render(
	<TodoApp />, 
	document.getElementById('root')
)