import React from 'react'

export const Counter = ({ value, onIncreament, onDecreament }) => {
	return (
		<div>
			<h1>{value}</h1>
			<button onClick={onIncreament}>+</button>
			<button onClick={onDecreament}>-</button>
		</div>)
}




