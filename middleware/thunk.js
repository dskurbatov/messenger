export default function thunk (store) {
	return function (next) {
		return function (action) {
			if(typeof action === 'function') {
				return action(next)
			}

			return next(action)
		}
	}
}