import React from 'react'
import { getVisibleTodos } from '../js/reducer'
import store from '../js/store'

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

export default class VisibleTodos extends React.Component {
	componentDidMount(){
		this.unsubscribe = store.subscribe(() => {
			this.forceUpdate()
		})
	}

	componentWillUnmount(){
		this.unsubscribe()
	}


	render(){
		const props = this.props
		const state = store.getState()

		return(
			<TodoList 
				todos={getVisibleTodos(state.todos, state.visibilityFilter)}
				onTodoClick={(id) => {
					store.dispatch({
						type: 'TOGGLE_TODO',
						id
					})
				}}
			/>
		)
	}
}