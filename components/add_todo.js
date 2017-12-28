import React from 'react'

export const AddTodo = ({ onAddTodo }) => {
	let input
	return (
		<div>
			<input ref={node => input = node}/>
			<button onClick={() => {
				onAddTodo(input.value)
				input.value = ''
			}}>
				Add Todo
			</button>
		</div>	
	)
}
