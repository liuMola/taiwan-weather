import React, { useState, useEffect } from 'react';

import { ReactComponent as AirFlowIcon } from './images/airFlow.svg';
import { ReactComponent as DayCloudyIcon } from './images/day-cloudy.svg';
import { ReactComponent as LoadingIcon } from './images/loading.svg';
import { ReactComponent as RainIcon } from './images/rain.svg';
import { ReactComponent as RefreshIcon } from './images/refresh.svg';
import DarkorBright from './darkorBright';
import Header from './header';

function App() {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		let root = document.getElementsByTagName('html')[0];
		root.classList.toggle('dark');
	}, [dark]);

	return (
		<>
			<div className='bg-[#ffffff] h-full flex items-center justify-center text-dark dark:text-bright'>
				<div className='weather-card relative min-w-[360px] bg-bright-theme dark:bg-dark-theme box-border py-[30px] px-[15px]'>
					<Header />
					<DarkorBright dark={dark} setDark={setDark} />
					<div className='current-weather flex justify-between items-center mb-8'>
						<div className='temperature flex text-8xl font-light'>
							<span>23</span>
							<div className='font-normal text-[42px]'>°C</div>
						</div>
						<DayCloudyIcon />
					</div>
					<div className='airflow flex items-center text-base font-light mb-5'>
						<AirFlowIcon style={{ width: '25px', height: 'auto', marginRight: '30px' }} />
						<span>23 m/h</span>
					</div>
					<div className='rain flex items-center text-base font-light '>
						<RainIcon style={{ width: '25px', height: 'auto', marginRight: '30px' }} />
						<span>48%</span>
					</div>
					<div className='refresh absolute right-4 bottom-4 text-xs inline-flex items-end '>
						<span>Last updated: 12:03 AM</span>
						<RefreshIcon style={{ width: '15px', height: '15px', marginLeft: '10px', cursor: 'pointer' }} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
