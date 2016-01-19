import express from 'express'
import http from 'http'
import path from 'path'
import ws from 'socket.io'

export const serverPort = 8080
export const app = express()
export const httpServer = http.Server(app)
export const io = ws.listen(httpServer)

export default function startServer(store) {
	app.disable('x-powered-by');
	app.use(function(req, res, next) {
		res.setHeader('Access-Control-Allow-Origin', 'http://' + req.headers.host)
		res.setHeader('Access-Control-Allow-Credentials', true)
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
		next()
	})
	app.get("/", function(req, res) {
		res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'))
	})
	httpServer.listen(serverPort, '0.0.0.0')
	// io.set('origins', '*:*')

	if (store) {
		store.subscribe(
			() => {
				console.log('Sending the new state to all clients...')
				console.log(store.getState())
				io.emit('state', store.getState())
			}
		)
		io.on('connection', (socket) => {
			socket.emit('state', store.getState())
			socket.on('action', store.dispatch.bind(store))
		})
	}
}

