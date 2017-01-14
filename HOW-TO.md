# The four R's: Creating a multi-framework component project with Webpack

Now you too can recreate this example step-by-step using this handy how-to guide. I'm assuming you have `node`, `npm` installed to a fairly decent level. Anything that doesn't work when ran, should, in all likelihood, work if you install the command globally; for instance, `webpack-dev-server`. I'm also not going to cover setting up the linter, mainly because many other tutorials would serve you far better for this. Similarly, I'm not going to cover [yarn](https://github.com/yarnpkg/yarn); although I recommend it for keeping your dependencies sane, the inherent downside of this is large `yarn.lock` file changes in commits when the dependencies are updated. Let us begin.

## Initial setup (Installing dependencies)

Firstly, you're going to want to create a standard `package.json` file, usually through running `npm init`. It's probably worth adding a `.gitignore` file for our node modules etc. Answer the questions in any fashion of your choosing... for now. We're now going to install our dependencies (strictly speaking, devDependencies). To do this, you should run the following commands in the necessary location. I've split them into groups of related packages, but this is purely for aesthetic and explanatory purposes. You can create a megalithic command if you desire!

	npm install ractive --save-dev
	npm install classnames react react-dom react-redux --save-dev
	npm install riot --save-dev
	npm install immutable react-redux redux --save-dev
	npm install babel babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
	npm install webpack webpack-dev-server --save-dev
	npm install bootstrap --save-dev
	npm install css-loader file-loader html-loader raw-loader riotjs-loader style-loader url-loader --save-dev

I imagine these commands can be run in any order, but I've put them in what seems the most intuitive to me. The first four deal with our four R's, respectively [Ractive](https://github.com/ractivejs/ractive), [React](https://github.com/facebook/react), [Riot](https://github.com/riot/riot), and [Redux](https://github.com/reactjs/redux). The first three are frameworks for writing view components, whilst the last is a store for state management. (If you're here, you probably already knew that!)

After this, we install Babel and assorted plugins to allow us to use .jsx in our React files and ES6 language features throughout. Then there are the webpack installations, bootstrap for styling, and finally the loaders for the various filetypes that we are going to need to configure in webpack.

On testing this tutorial, I encountered a few issues with peer dependencies. If this persists, then you may have to resort to the values in my `package.json` file.

## Hello Webpack! (Getting something running)

Now, we're going to ignore virtually all of our hard-earned dependencies and get a simple 'Hello World!' style application running using [webpack-dev-server](https://github.com/webpack/webpack-dev-server). You're going to do a few more things here than in the previous section.

### Create folders and files

1. Create a `dist` folder in the root directory and add an `index.html` file to it.
2. Create a `src` folder in the root directory and add an `app.js` file to it. This file is only temporary for this step and will be removed when we start using our view component libraries.
3. Create a `webpack.config.js` file in the root directory.

### dist/index.html

In this file, you're going to want to write the following code.

	<html>  
		<head>
			<meta charset='UTF-8'>
			<title></title>
		</head>
		<body>
			<script src='bundle.js'></script>
		</body>
	</html>

As you can see, pretty self-explanatory.

### src/app.js

Here, you're going to want to add the line `document.write("Hello Webpack!");`, and that's it.

### webpack.config.js

This is, as expected, a bit more complicated than the previous two files. I'm here for you as ever though.

	const webpack = require('webpack');

	module.exports = {  
		cache: true,
		debug: true,
		devtool: 'source-map',
		entry: [
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/only-dev-server',
			'./src/app',
		],
		module: {
			loaders: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}, {
				test: /\.html$/,
				exclude: '/node_modules/',
				loader: 'html-loader'
			}, {
				test: /\.css$/,
				exclude: '/node_modules/',
				loader: 'style-loader!css-loader'
			},
			{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
			{ test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader : 'file-loader' }]
		},
		output: {
			path: __dirname + '/dist',
			publicPath: '/',
			filename: 'bundle.js'
		},
		resolve: {
			extensions: ['*', '.js']
		},
		devServer: {
			contentBase: './dist',
			hot: true
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	};

There's a lot to explore here.

If you want to use developer tools, the devtool setting 'source-map' gives you access to your original files from within the generated `bundle.js` file.

Entry sets, perhaps unsurprisingly, our entry points for generating our final javascript file. We're going to look a lot into this later when running diffferent frameworks which should make it easier to understand.

Module contains our loaders, which describe how to deal with different file types with in the source code. The last five settings are purely for loading bootstrap and have nothing to do with the underlying functionality of our application.

Output sets the output destination for our generated file.

Resolve allows to ignore the specified file extensions when we import external code into our files.

Most of the rest is my general webpack boilerplate. On testing this tutorial myself, updates to webpack caused me to change a few values in this file. A quick google search of the error messages was enough to get me going again though!

### Running the app

Now, if you run the command `webpack-dev-server` in the root directory and head [here](http://localhost:8080/), you'll see the 'Hello Webpack!' app up and running. Excitingly, you can change the text in our `src/app.js` file and see it change in our app!

## Hello Ractive!

Let's get Ractive. Create a folder in `src` called `ractive` and we'll add the following files.

### app.html

	<div class='container'>
		<NameInput value='{{name}}' />
		<p>
			Ractive: {{name}}
		</p>
	</div>

### app.js

	import Ractive from 'ractive';

	import 'bootstrap/dist/css/bootstrap.css';

	import template from './app.html';

	import NameInput from './components/NameInput';

	let App = new Ractive({  
		el: '#ractive',
		template,
		components: {
			NameInput
		},
		data: {
			name: 'Your name goes here'
		}
	});

	export default App;

### components/NameInput.js

	import Ractive from 'ractive';

	import template from './views/name-input.html';

	let NameInput = Ractive.extend({
		template
	});

	export default NameInput;

### components/views/name-input.html

	<input type='text' value='{{value}}' />

Now add the line `<div id='ractive'></div>` above the line `<script src='bundle.js'></script>` in `dist/index.html`, and change the line './src/app' to './src/ractive/app' in `webpack.config.js`. You can delete the `src/app.js` file now aswell, unless you're a melancholic romantic. Run `webpack-dev-server` again, and you should have your first Ractive component.

## Hello React!

Now for React. Create a folder in `src` called `react` and add the following files.

### AppContainer.jsx

	import React, { Component } from 'react';

	import NameInput from './components/NameInput';

	class App extends Component {
		render() {
			return <div className='container'>
				<NameInput value='I cannot move' />
				<p>
					React: Not updating here
				</p>
			</div>
		};
	};

	export default App;

### index.jsx

	import React from 'react';
	import ReactDOM from 'react-dom';

	import 'bootstrap/dist/css/bootstrap.css';

	import AppContainer from './AppContainer';

	ReactDOM.render(
		<AppContainer />,
		document.getElementById('react')
	);

### components/NameInput.jsx

	import React, { Component } from 'react';

	export default class NameInput extends Component {
		constructor(props) {
			super(props);
			this.shouldComponentUpdate = (nextProps, nextState) => {
				return this.props.value !== nextProps.value;
			};
		};
		render() {
			return <input type='text' value={this.props.value} />
		};
	};

Now add the line `<div id='react'></div>` in a similar vein as before. Comment out the previously added line in `webpack.config.js` and add './src/react/index' below it. Additionally, you're going to want to add '.jsx' to the extensions in that file and also a loader for React.

		test: /\.jsx?$/,
		exclude: /node_modules/,
		loader: 'babel-loader',
		query: { presets: ['es2015', 'react'] }

Run the app again and you should have a React component. It is a rather useless one, I'm afraid.

## Hello Riot!

Last, but certainly not least, we go a little bit crazy with Riot. Create an aptly named directory once again, and prepare to work your CV.

### main.js

	import * as riot from 'riot';

	import 'bootstrap/dist/css/bootstrap.css';

	import './riot-app';

	document.addEventListener('DOMContentLoaded', () => {
		riot.mount('riot-app', undefined);
	});

### riot-app.tag

	import './tags/name-input';

	<riot-app>
		<div class='container'>
			<name-input value={'I can move'} />
			<p>
				Riot: Not updating here
			</p>
		</div>

		<script>

		</script>

	</riot-app>

### tags/name-input.tag

	<name-input>

		<input type='text' value={this.opts.value} />

		<script>

		</script>

	</name-input>

This time, in a shocking break from tradition, you're going to want to add '<riot-app></riot-app>' to the `dist/index.html` file. The entry point is './src/riot/main'. Similarly, add `.tag` to the extensions and we're going to need a funky preloader.

	rules: [{
		test: /\.tag$/,
		exclude: /node_modules/,
		enforce: 'pre',
		loader: 'riotjs-loader',
		query: { type: 'none' }
	}],

Put this above the loaders property in module and add |.tag to the check for js file in the loaders. Finally, add `new webpack.ProvidePlugin({riot: 'riot'})` to the plugins.

Run `webpack-dev-server` again, and you have your first Riot component.

## Three's a crowd: running all three frameworks simultaneously

I'll leave this as an intellectual exercise for the reader. It shouldn't take long if you've been reading correctly :)

## Hook a duck (Connecting it all together)

That's it for now! I'm sure there's much better tutorials around for connecting up a redux store to each of the frameworks, and my bootstraping leaves a lot to be desired. Congratulation on your first multi-framework component application :)
