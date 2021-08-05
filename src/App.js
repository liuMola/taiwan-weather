import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { AnimatePresence } from 'framer-motion';
//components
import Setting from './components/Setting';
import Loading from './components/Loading';

const MainBoard = loadable(() => import('./components/MainBoard'), {
	fallback: <div>...</div>,
});

function App() {
	const [pageLoading, setPageLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setPageLoading(false), 2000);
	}, []);

	return (
		<>
			<AnimatePresence>{pageLoading && <Loading />}</AnimatePresence>
			<div className='bg-background-img bg-cover h-full flex items-center justify-center text-dark font-roboto overscroll-none overflow-hidden'>
				<Router>
					<Switch>
						<Route exact path='/'>
							<MainBoard />
						</Route>
						<Route path='/setting'>
							<MainBoard />
							<Setting />
						</Route>
					</Switch>
				</Router>
			</div>
		</>
	);
}

export default App;
