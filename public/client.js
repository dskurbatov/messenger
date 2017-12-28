import React from 'react'
import ReactDOM from 'react-dom'
import { Footer } from '../components/filters'
import { AddTodo } from '../components/add_todo'
import { TodoList } from '../components/todo_list'
import { createStore } from 'redux'
import { todoApp, getVisibleTodos } from '../js/reducer'

const store = createStore(todoApp)

let indexTodo = 0
const TodoApp = ({todos, visibilityFilter}) => {
	const visibleTodos = getVisibleTodos(todos, visibilityFilter)
	return (
		<div>
			<AddTodo
				onAddTodo={text => 
					store.dispatch({
						type: 'ADD_TODO',
						id: indexTodo++,
						text
					})
				}
			/>
			<TodoList
				todos={visibleTodos}
				onTodoClick={id => 
					store.dispatch({
						type: 'TOGGLE_TODO',
						id
					})
				}
			/>
			<Footer 
				visibilityFilter={visibilityFilter}
				onFilterClick={filter => store.dispatch({
					type: 'SET_VISIBILITY_FILTER',
					filter	
				})}
			/>
		</div>
	)
}

const render = () => {
	ReactDOM.render(
		<TodoApp {...store.getState()} />, 
		document.getElementById('root')
	)
}

store.subscribe(render)
render()
