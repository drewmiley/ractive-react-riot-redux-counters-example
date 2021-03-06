# ractive-react-riot-redux-counters-example

Ractive React Riot & Redux Counters Example. Also utilises bootstrap, babel, immutable, and webpack.

## Running the app

To start the development server with hot reloading enabled, simply run

```
npm start
```

## Folder structure

	+-- ractive
	|	app.html
	|	app.js
	|	+-- components
	|	|	CounterLabel.js
	|	|	EventButton.js
	|	|	+-- views
	|	|	|	counter-label.html
	|	|	|	event-button.html
	+-- react
	|	AppContainer.jsx
	|	index.jsx
	|	+-- components
	|	|	CounterLabel.jsx
	|	|	EventButton.jsx
	+-- redux
	|	counters.js
	|	store.js
	+-- riot
	|	main.js
	|	riot-app.tag
	|	+-- tags
	|	|	counter-label.tag
	|	|	event-button.tag

## Deploying the app

To deploy the app to gh-pages, there are a couple of steps to follow.

1. Run `webpack` command. This will create a `bundle.js` and `bundle.js.map` file in the dist folder.
2. Delete everything except dist folder.
3. Empty contents of dist folder to root directory.
4. Commit and push to gh-pages.

