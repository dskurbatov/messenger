import React from 'react'
import store from '../js/store'

let indexTodo = 0
export const AddTodo = () => {
	let input
	return (
		<div>
			<input ref={node => input = node}/>
			<button onClick={() => {
				store.dispatch({
					type: 'ADD_TODO',
					id: indexTodo++,
					text: input.value
				})
				input.value = ''
			}}>
				Add Todo
			</button>
		</div>	
	)
}
