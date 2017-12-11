const assert = require('assert')
const { counter } = require('../js/reducer')


describe('reducer', () => {
	it('should increament and return new state', () => {
		assert(counter(0, { type: 'INCREAMENT'}) === 1)
	})

	it('should increament and return new state', () => {
		assert(counter(1, { type: 'INCREAMENT'}) === 2)
	})

	it('should decreament and return new state', () => {
		assert(counter(2, { type: 'DECREAMENT'}) === 1)
	})

	it('should decreament and return new state', () => {
		assert(counter(1, { type: 'DECREAMENT'}) === 0)
	})

	it('should return state', () => {
		assert(counter(1, {type: 'SOMETHING'}) === 1)
	})

	it('should return initial state', () => {
		assert(counter(undefined, {}) === 0)
	})
})
