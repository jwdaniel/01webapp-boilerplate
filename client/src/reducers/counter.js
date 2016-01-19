import { Map } from 'immutable'
import { SET_STATE, INC, DEC, SAVE } from '../actions/counter'

function setState(state, newState) {
	return state.merge(newState)
}

function inc(state) {
	const counter = state.get('counter')
	if (counter) {
		return state.set('counter', counter + 1)
	} else {
		return state.set('counter', 1)
	}
}

function dec(state) {
	const counter = state.get('counter')
	if (counter) {
		return state.set('counter', counter - 1)
	} else {
		return state.set('counter', -1)
	}
}

function save(state, counter) {
	// console.log('reducer[counter]: save(): ', counter)
	return state
}

export default function counter(state = Map({counter: 5}), action) {
	switch (action.type) {
	case SET_STATE:
		return setState(state, action.state)
	case INC:
		return inc(state)
	case DEC:
		return dec(state)
	case SAVE:
		return save(state, action.counter)
	default:
		return state
	}
}

