import React from 'react';
//components
import Status from './status';
//lottie
import Lottie from 'lottie-react';
import windBrightData from '../lottie/wind-for-bright.json';
import windDarkData from '../lottie/wind-for-dark.json';
import sunBrightData from '../lottie/sun-for-bright.json';
import sunDarkData from '../lottie/sun-for-dark.json';
import rainBrightData from '../lottie/rain-for-bright.json';
import rainDarkData from '../lottie/rain-for-dark.json';
import humdBrightData from '../lottie/humd-for-bright.json';
import humdDarkData from '../lottie/humd-for-dark.json';
//store
import useStore from '../store/store';

const index = {
	wind: ['Wind velocity', 'm/s'],
	uv: ['UV Index', ''],
	pop: [`Probability of \nPrecipitation`, '%'],
	humd: ['Humidity', '%'],
};

export default function WeatherInfo() {
	let mode = document.getElementsByTagName('html')[0];
	const windDarkOrBright = () => (mode.classList.contains('dark') ? windDarkData : windBrightData);
	const sunDarkOrBright = () => (mode.classList.contains('dark') ? sunDarkData : sunBrightData);
	const rainDarkOrBright = () => (mode.classList.contains('dark') ? rainDarkData : rainBrightData);
	const humdDarkOrBright = () => (mode.classList.contains('dark') ? humdDarkData : humdBrightData);

	const windSpeed = useStore((state) => state.currentWeatherData.windSpeed);
	const uvIndex = useStore((state) => state.currentWeatherData.uvIndex);
	const pop = useStore((state) => state.forecastData.pop);
	const humd = useStore((state) => state.currentWeatherData.humidity);

	return (
		<div className='grid grid-cols-2 grid-rows-2 gap-6 mt-8'>
			<Status status={Math.round(windSpeed)} category={index.wind[0]} unit={index.wind[1]}>
				<Lottie className='w-7/12' animationData={windDarkOrBright()} />
			</Status>
			<Status status={uvIndex} category={index.uv[0]} unit={index.uv[1]}>
				<Lottie className='w-8/12' animationData={sunDarkOrBright()} />
			</Status>
			<Status status={pop} category={index.pop[0]} unit={index.pop[1]}>
				<Lottie className='w-7/12' animationData={rainDarkOrBright()} />
			</Status>
			<Status status={humd * 100} category={index.humd[0]} unit={index.humd[1]}>
				<Lottie className='w-7/12' animationData={humdDarkOrBright()} />
			</Status>
		</div>
	);
}
