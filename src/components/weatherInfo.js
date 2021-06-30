import React from 'react';

import Status from './status';
//lottie
import Lottie from 'lottie-react';
import windBrightData from '../lottie/wind-for-bright.json';
import windDarkData from '../lottie/wind-for-dark.json';
import sunBrightData from '../lottie/sun-for-bright.json';
import sunDarkData from '../lottie/sun-for-dark.json';
import rainBrightData from '../lottie/rain-for-bright.json';
import rainDarkData from '../lottie/rain-for-dark.json';
//store
import useStore from '../store/store';

const index = {
	wind: ['Wind velocity', 'm/s'],
	uv: ['UV Index', ''],
	pop: ['Probability of \nPrecipitation', '%'],
	sth: ['something', '%'],
};

export default function WeatherInfo() {
	let mode = document.getElementsByTagName('html')[0];
	const windDarkOrBright = () => (mode.classList.contains('dark') ? windDarkData : windBrightData);
	const sunDarkOrBright = () => (mode.classList.contains('dark') ? sunDarkData : sunBrightData);
	const rainDarkOrBright = () => (mode.classList.contains('dark') ? rainDarkData : rainBrightData);

	const windSpeed = useStore((state) => state.weatherData.windSpeed);
	const temperature = useStore((state) => state.weatherData.temperature);
	const uvIndex = useStore((state) => state.weatherData.uvIndex);

	return (
		<div className='grid grid-cols-2 grid-rows-2 gap-6 mt-10'>
			<Status status={Math.round(windSpeed)} category={index.wind[0]} unit={index.wind[1]}>
				<Lottie className='w-7/12' animationData={windDarkOrBright()} />
			</Status>
			<Status status={uvIndex} category={index.uv[0]} unit={index.uv[1]}>
				<Lottie className='w-8/12' animationData={sunDarkOrBright()} />
			</Status>
			<Status status={uvIndex} category={index.pop[0]} unit={index.pop[1]}>
				<Lottie className='w-7/12' animationData={rainDarkOrBright()} />
			</Status>
			<Status category={index.sth[0]} unit={index.sth[1]}>
				<Lottie className='w-7/12' animationData={windDarkOrBright()} />
			</Status>
		</div>
	);
}
