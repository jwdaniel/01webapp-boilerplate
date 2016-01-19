import { List, Map } from 'immutable'
import { expect } from 'chai'

import { load, save } from '../src/core'

describe('core', () => {

	describe('load()', () => {
		it('loading the latest counter from file', () => {
			const state = Map();
			const nextState = load(state);
			expect(nextState).to.equal(Map({
				counter: 15
			}));
		});
	});

	describe('save()', () => {
		it('saving {counter: 15} to file', () => {
			const state = Map({
				counter: 1
			})
			const nextState = save(state, 15)
			expect(nextState).to.equal(Map({
				counter: 15
			}))
		})
	})

});
