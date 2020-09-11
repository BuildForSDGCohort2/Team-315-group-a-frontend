import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Explore from './components/Explore/Explore';
import About from './components/About/About';

const Router = () => {
	return (
		<BrowserRouter>
			<main>
				<Switch>
					<Route path="/" component={App} exact={true} />
					<Route path="/explore" component={Explore} />
					<Route path="/about" component={About} />
				</Switch>
			</main>
		</BrowserRouter>
	);
};

export default Router;
