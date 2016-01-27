import React from 'react'
import ReactDOM from 'react-dom'
import Router, { Route } from 'react-router'
import { Provider } from 'react-redux'
import io from 'socket.io-client'
import { Map } from 'immutable'

import App from './components/App'
import CounterContainer from './containers/CounterContainer'
import { setState } from './actions/counter'
import configureStoreWithSocket from './store'
import DevTools from './containers/DevTools'

let store
if (true) {
	const socket = io('ws://localhost:8080')
	store = configureStoreWithSocket(socket)
	socket.on('state', state => {
		console.log('[onState]: ', state)
		store.dispatch(setState(state))
	})
} else {
	store = configureStoreWithSocket(undefined)
	const initState = Map({
		counter: 10
	})
	store.dispatch(setState(initState))
}

ReactDOM.render(
	<div>
		<Provider store={store}>
			<Router>
				<Route component={App}>
					<Route path="/" component={CounterContainer} />
				</Route>
			</Router>
		</Provider>
		<DevTools store={store} />
	</div>,
	document.getElementById('app')
)
