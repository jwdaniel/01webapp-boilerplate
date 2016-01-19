import { Map, fromJS } from 'immutable'
import { expect } from 'chai'

import reducer from '../src/reducer'

describe('reducer', () => {

	it('with the LOAD action', () => {
		const state = Map()
		const action = {type: 'LOAD'}
		const nextState = reducer(state, action)

		expect(nextState).to.equal(fromJS({
			counter: 15
		}))
	})

	it('with the SAVE action', () => {
		const state = fromJS({
			counter: 1
		})
		const action = {type: 'SAVE', counter: 15}
		const nextState = reducer(state, action)

		expect(nextState).to.equal(fromJS({
			counter: 15
		}))
	})

})

