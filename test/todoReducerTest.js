const assert = require('assert')
const deepFreeze = require('deep-freeze')
//const { combineReducers } = require('redux')

//state here a single todo
const todo = (state, action) => {
	switch(action.type){
		case 'ADD_TODO':
			return {
					id:action.id,
					text: action.text,
					complete: false
				}
		case 'TOGGLE_TODO':
			if(state.id !== action.id){
				return state
			}

			return {
				...state,
				complete: !state.complete
			}
		default:
			return state
	}
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch(action.type){
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

const todos = (state = [], action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			]
		case 'TOGGLE_TODO': 
			return state.map(t => todo(t, action)) 
		default:
			return state
	}
}

const combineReducers = (reducers) => {
	return (state = {}, action) => {
		return Object.keys(reducers).reduce((nextState, key) => {
			nextState[key] = reducers[key](state[key], action)
			return nextState
		}, {})
	}
}

const todoApp = combineReducers({
	todos,
	visibilityFilter
})

describe('add new todo', () => {
	it('returns new state array with new todo', () => {
		const stateBefore = []
		const action = {
			type: 'ADD_TODO',
			id: 0,
			text: 'Learn React'
		}

		const stateAfter = [
			{
				id:0,
				text: 'Learn React',
				complete: false
			}
		]

		deepFreeze(stateBefore)
		deepFreeze(action)
		assert.deepEqual(todos(stateBefore, action), stateAfter)
	})
})

describe('toggle todo', () => {
	it('returns new state array with complete equal to true for specify todo', () => {
		const stateBefore = [
			{
				id:0,
				text: 'Learn React',
				complete: false
			}, 
			{
				id:1,
				text:'Go Shoppling',
				complete: false
			}
		]
		const action = {
			type: 'TOGGLE_TODO',
			id:1
		}

		const stateAfter = [
			{
				id:0,
				text: 'Learn React',
				complete: false
			}, 
			{
				id:1,
				text:'Go Shoppling',
				complete: true
			}
		]

		deepFreeze(stateBefore)
		deepFreeze(action)

		assert.deepEqual(todos(stateBefore, action), stateAfter)
	})
})

describe('todoApp', () => {
	it('combines other reducer function to a single state object', () => {
		const stateAfter = {
			todos: [{
				id:0,
				text: 'Learn React',
				complete: false
			}],
			visibilityFilter: 'SHOW_ALL'
		}
		const action = {
			type: 'ADD_TODO',
			id:0,
			text: 'Learn React'
		}

		assert.deepEqual(todoApp(undefined, action), stateAfter)
	})

	it('changes only visibilityFilter', () => {
		const stateBefore = {
			todos: [{
				id:0,
				text: 'Learn React',
				complete: false
			}],
			visibilityFilter: 'SHOW_ALL'
		}

		const action = {
			type: 'SET_VISIBILITY_FILTER',
			filter: 'SHOW_COMPLETED'
		}

		const stateAfter = {
			todos: [{
				id:0,
				text: 'Learn React',
				complete: false
			}],
			visibilityFilter: 'SHOW_COMPLETED'
		}

		deepFreeze(stateBefore)
		deepFreeze(action)

		assert.deepEqual(todoApp(stateBefore, action), stateAfter)
	})
})

describe('compose()', () => {
	it('returns functions', () => {
		
	})
})
