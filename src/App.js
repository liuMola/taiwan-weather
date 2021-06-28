import React, { useState, useEffect } from 'react';
import { ReactComponent as RefreshIcon } from './images/refresh.svg';
import { ReactComponent as WindyVelocity } from './images/wind-velocity.svg';
import DarkorBright from './darkorBright';
import Header from './components/header';
import Temperature from './components/temperature';
import Status from './components/status';
import Footer from './components/footer';

function App() {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		let root = document.getElementsByTagName('html')[0];
		root.classList.toggle('dark');
	}, [dark]);

	return (
		<>
			<div className='bg-[#ffffff] h-full flex items-center justify-center text-dark dark:text-bright font-roboto'>
				<div className='weather-card relative min-w-[355px] bg-bright-theme dark:bg-dark-theme pt-3 pb-5 px-8'>
					<Header />
					<DarkorBright dark={dark} setDark={setDark} />
					<Temperature />
					<div className='grid grid-cols-2 grid-rows-2 gap-6 mt-10'>
						<Status>
							<WindyVelocity className='fill-current' />
						</Status>
						<Status>
							<WindyVelocity className='fill-current' />
						</Status>
						<Status>
							<WindyVelocity className='fill-current' />
						</Status>
						<Status>
							<WindyVelocity className='fill-current' />
						</Status>
					</div>
					<div className='w-full bg-dark dark:bg-bright opacity-20 h-px mt-6 mb-4'></div>
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
