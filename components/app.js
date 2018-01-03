import React from 'react'
import Footer from '../components/filters'
import AddTodo from '../components/add_todo'
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

export default TodoApp