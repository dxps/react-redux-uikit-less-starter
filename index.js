import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './app/app';
import Home from './app/components/home';
import SignIn from './app/components/auth/signin';
import About from './app/components/about';

import reducers from './app/reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers);

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="signin" component={SignIn} />
				<Route path="about" component={About} />
			</Route>
		</Router>
	</Provider>
	, document.getElementById("app")
);
