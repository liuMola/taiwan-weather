import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import MainBoard from './components/MainBoard';

import Loading from './components/Loading';

import whyDidYouRender from '@welldone-software/why-did-you-render';
whyDidYouRender(React, {
	onlyLogs: true,
	titleColor: 'green',
	diffNameColor: 'aqua',
	trackAllPureComponents: true,
});

const Setting = lazy(() => import('./components/Setting'));

function App() {
	return (
		<>
			{/* <Loading /> */}
			<div className='bg-background-img bg-cover h-full flex items-center justify-center text-dark font-roboto overscroll-none overflow-hidden'>
				<Router>
					<Switch>
						<Route exact path='/'>
							<MainBoard />
						</Route>
						<Route path='/setting'>
							<MainBoard />
							<Suspense fallback={<div>Loading...</div>}>
								<Setting />
							</Suspense>
						</Route>
					</Switch>
				</Router>
			</div>
		</>
	);
}

export default App;
