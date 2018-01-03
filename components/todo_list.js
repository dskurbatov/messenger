import React from 'react'
import { getVisibleTodos } from '../js/reducer'
import { connect } from 'react-redux'
import toggleTodo from '../actions/toggle_todo'

const Todo = ({onClick, complete, text}) => {
	return( 
		<li 
			onClick={onClick}
			style={{textDecoration: complete ? 'line-through' : 'none'}}
		>
		{text}
		</li>
	)
}

const TodoList = ({todos, onTodoClick}) => {
	return (
		<ul>
			{todos.map(t => 
				<Todo 
					key={t.id}
					{...t}
					onClick={() => onTodoClick(t.id)}	
				/>
			)}
		</ul>
	)
}

const mapStateToProps = (state) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
