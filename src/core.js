import fs from 'fs'
import path from 'path'
import { Map } from 'immutable'

export const COUNTER_FILE = path.resolve(__dirname + '/../counter.json')
export const INITIAL_STATE = Map({counter: 0})

export function load(state) {
	let data = require(COUNTER_FILE)
	return state.set('counter', data.counter)
}

export function save(state, counter) {
	// console.log('server:save(): ', state, counter)
	let newState = state.set('counter', counter)
	fs.writeFile(COUNTER_FILE, JSON.stringify(newState, null, 4), function(err) {
		if (err) {
			console.log(err);
		} else {
			// console.log('Counter saved to ' + COUNTER_FILE);
		}
	})
	return newState
}

export function notify(state) {
	return state.set('counter', counter)
}
