const assert = require('assert')
const deepFreeze = require('deep-freeze')

const addCounter = (list) => {
	return [...list, 0]
}

const removeCounter = (list, index) => {
	return [
		...list.slice(0, index),
		...list.slice(index + 1)
	]
}

const increamentCounter = (list, index) => {
	return [
		...list.slice(0, index),
		list[index] + 1,
		...list.slice(index + 1)
	]
}

describe('addCounter', () => {
	it('returns new array with last value as 0', () => {
		const beforeList = [1, 1]
		const afterList = [1, 1, 0]

		deepFreeze(beforeList)
		assert.deepEqual(addCounter(beforeList), afterList)
	})
})

describe('removeCounter', () => {
	it('returns new array without specify counter', () => {
		const beforeList = [1, 0, 1]
		const afterList = [1, 1]

		deepFreeze(beforeList)
		assert.deepEqual(removeCounter(beforeList, 1), afterList)
	})
})

describe('increamentCounter', () => {
	it('returns new array with increamented value at specify index', () => {
		const beforeList = [1, 0, 1]
		const afterList = [1, 1, 1]

		deepFreeze(beforeList)
		assert.deepEqual(increamentCounter(beforeList, 1), afterList)
	})
})