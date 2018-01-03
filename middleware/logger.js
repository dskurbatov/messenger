const logger = (store) => (next) => (action) => {
	console.log(`stateBefore: ${store.getState().todos}`)
	console.log(`action: ${action.type}`)
	next(action)
	console.log(`stateAftre: ${store.getState().todos}`)
}

export default logger