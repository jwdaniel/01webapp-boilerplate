import { Map, fromJS } from 'immutable'
import { expect } from 'chai'

import configreStore from '../src/store'

describe('store', () => {

	it('init the store', () => {
		const store = configreStore()
		expect(store.getState()).to.equal(Map({
			counter: 0
		}))
	})

	it('init with the LOAD action', () => {
		const store = configreStore()
		store.dispatch({
			type: 'LOAD'
		})
		expect(store.getState()).to.equal(fromJS({
			counter: 15
		}))
	})

})
