import { createStore, applyMiddleware } from 'redux'
import remoteActionMiddleware from './remoteActionMiddleware'
import reducer from '../reducers'

export default function configureStoreWithSocket(socket) {
	const createStoreWithMiddleware = applyMiddleware(
		remoteActionMiddleware(socket)
	)(createStore)
	const store = createStoreWithMiddleware(reducer)

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers')
			store.replaceReducer(nextReducer)
		})
	}

	return store
}

export function configureStore() {
	return configureStoreWithSocket(undefined)
}

