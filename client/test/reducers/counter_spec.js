import { List, Map, fromJS } from 'immutable'
import { expect } from 'chai'

import reducer from '../../src/reducers/counter'

describe('reducers[counter]', () => {

	it('SET_STATE', () => {
		const initState = Map()
		const action = {
			type: 'SET_STATE',
			state: Map({
				counter: 100
			})
		}
		const nextState = reducer(initState, action)

		expect(nextState).to.equal(fromJS({
			counter: 100
		}))
	})

	it('SET_STATE with plain JS payload', () => {
		const initState = Map()
		const action = {
			type: 'SET_STATE',
			state: {
				counter: 100
			}
		}
		const nextState = reducer(initState, action)

		expect(nextState).to.equal(fromJS({
			counter: 100
		}))
	})

	it('SET_STATE without init state', () => {
		const action = {
			type: 'SET_STATE',
			state: {
				counter: 100
			}
		}
		const nextState = reducer(undefined, action)

		expect(nextState).to.equal(fromJS({
			counter: 100
		}))
	})

	it('INC', () => {
		const state = fromJS({
			counter: 100
		})
		const action = {type: 'INC'}
		const nextState = reducer(state, action)

		expect(nextState).to.equal(fromJS({
			counter: 101
		}))
	})

	it('DEC', () => {
		const state = fromJS({
			counter: 100
		})
		const action = {type: 'DEC'}
		const nextState = reducer(state, action)

		expect(nextState).to.equal(fromJS({
			counter: 99
		}))
	})

	it('SAVE', () => {
		const state = fromJS({
			counter: 100
		})
		const action = {type: 'SAVE'}
		const nextState = reducer(state, action)

		expect(nextState).to.equal(fromJS({
			counter: 100
		}))
	})

})

