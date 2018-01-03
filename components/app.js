import React from 'react'
import Footer from '../components/filters'
import AddTodo from '../components/add_todo'
import VisibleTodos from '../components/todo_list'


const TodoApp = ({ match: { params } }) => {
	return (
		<div>
			<AddTodo />
			<VisibleTodos filter={params.filter || 'SHOW_ALL'}/>
			<Footer />
		</div>
	)
}

export default TodoApp