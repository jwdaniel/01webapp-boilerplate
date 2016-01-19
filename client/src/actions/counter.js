export const SET_STATE = 'SET_STATE'
export const INC = 'INC'
export const DEC = 'DEC'
export const SAVE = 'SAVE'

export function setState(state) {
	return {
		type: SET_STATE,
		state
	}
}

export function inc() {
	return {
		type: INC
	}
}

export function dec() {
	return {
		type: DEC
	}
}

export function save(counter) {
	return {
		meta: {remote: true},
		type: SAVE,
		counter
	}
}

