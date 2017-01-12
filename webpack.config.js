const webpack = require('webpack');

module.exports = {  
	cache: true,
	debug: true,
	devtool: 'source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		// Ractive
		// './src/ractive/app.js'
		// React
		// './src/react/index.jsx'
		// Riot
		'./src/riot/main.js'
	],
	module: {
		preLoaders: [{
			test: /\.tag$/,
			exclude: /node_modules/,
			loader: 'riotjs',
			query: { type: 'none' }
		}],
		loaders: [{
			test: /\.js|tag$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015']
			}
		}, {
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: { presets: ['es2015', 'react'] }
		}, {
			test: /\.html$/,
			exclude: '/node_modules/',
			loader: 'html'
		}, {
			test: /\.css$/,
			exclude: '/node_modules/',
			loader: 'style!css'
		},
		{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
		{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
		{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
		{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
		{ test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader : 'file' }]
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.tag']
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({riot: 'riot'})
	]
};
