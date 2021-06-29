import React from 'react';

import Status from './status';
//lottie
import Lottie from 'lottie-react';
import windBrightData from '../lottie/wind-for-bright.json';
import windDarkData from '../lottie/wind-for-dark.json';

export default function WeatherInfo() {
	let mode = document.getElementsByTagName('html')[0];
	const darkOrBright = () => (mode.classList.contains('dark') ? windDarkData : windBrightData);

	return (
		<div className='grid grid-cols-2 grid-rows-2 gap-6 mt-10'>
			<Status>
				<Lottie className='w-7/12' animationData={darkOrBright()} />
			</Status>
			<Status>
				<Lottie className='w-7/12' animationData={darkOrBright()} />
			</Status>
			<Status>
				<Lottie className='w-7/12' animationData={darkOrBright()} />
			</Status>
			<Status>
				<Lottie className='w-7/12' animationData={darkOrBright()} />
			</Status>
		</div>
	);
}
