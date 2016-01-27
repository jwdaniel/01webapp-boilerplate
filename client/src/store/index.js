import { createStore, applyMiddleware, compose } from 'redux'
import remoteActionMiddleware from './remoteActionMiddleware'
import reducer from '../reducers'
import DevTools from '../containers/DevTools'

export default function configureStoreWithSocket(socket) {
	const createStoreWithMiddleware = compose(
		applyMiddleware(remoteActionMiddleware(socket)),
		DevTools.instrument()
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

