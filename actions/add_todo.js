let indexTodo = 0
export default function addTodo(text){
	return function (dispatch) {
		dispatch({
			type: 'ADD_TODO',
			id: indexTodo++,
			text
		}) 
	}
}