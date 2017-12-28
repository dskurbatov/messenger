import React from 'react'

const Todo = ({onClick, complete, text}) => {
	return <li 
		onClick={onClick}
		style={{textDecoration: complete ? 'line-through' : 'none'}}
	>{text}</li>
}

export const TodoList = ({todos, onTodoClick}) => {
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