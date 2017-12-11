const assert = require('assert')
const { reducer } = require('../js/reducer')


describe('reducer', () => {
	it('should increament and return new state', () => {
		assert(reducer(0, { type: 'INCREAMENT'}) === 1)
	})

	it('should increament and return new state', () => {
		assert(reducer(1, { type: 'INCREAMENT'}) === 2)
	})

	it('should decreament and return new state', () => {
		assert(reducer(2, { type: 'DECREAMENT'}) === 1)
	})

	it('should decreament and return new state', () => {
		assert(reducer(1, { type: 'DECREAMENT'}) === 0)
	})

	it('should return state', () => {
		assert(reducer(1, {type: 'SOMETHING'}) === 1)
	})

	it('should return initial state', () => {
		assert(reducer(undefined, {}) === 0)
	})
})
