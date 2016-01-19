import {INITIAL_STATE, load, save, notify} from './core'

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
	case 'LOAD':
		return load(state)
	case 'SAVE':
		return save(state, action.counter)
	case 'NOTIFY':
		return notify(state)
	}
	return state
}

