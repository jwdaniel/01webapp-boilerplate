export default socket => store => next => action => {
	console.log('[remoteActionMiddleware]: ', action)
	if (typeof socket !== 'undefined') {
		if (action.meta && action.meta.remote) {
			socket.emit('action', action)
		}
	}
	return next(action)
}
