import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import configureStore from './store'
import startServer, { app, io } from './server'

const store = configureStore()
startServer(store)

var webpackConfig = require('../client/webpack.config')
var compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

store.dispatch({
	type: 'LOAD'
})
