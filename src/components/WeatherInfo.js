import React from 'react';
//components
//lottie
import Lottie from 'lottie-react';
import windDarkData from '../lottie/wind-for-dark.json';

import rainDarkData from '../lottie/rain-for-dark.json';

import humdDarkData from '../lottie/humd-for-dark.json';
//store
import useStore from '../store/store';

export default function WeatherInfo() {
	const windSpeed = useStore((state) => state.weatherData.windSpeed);
	const pop = useStore((state) => state.weatherData.pop);
	const humd = useStore((state) => state.weatherData.humidity);

	function calcHumd(num) {
		return Number.parseFloat(num).toFixed(2) * 100;
	}

	return (
		<div className='relative w-full px-2'>
			<div className='relatvie w-full flex items-center justify-around'>
				<div className='flex flex-col justify-center items-center'>
					<Lottie className='w-6' animationData={windDarkData} />
					<div className='font-light text-[15px] mt-1'>
						<span>{Math.round(windSpeed)}</span>
						<span className='text-[10px]'>&nbsp;m/s</span>
					</div>
					<div className='font-thin text-[8px]'>Wind velocity</div>
				</div>
				<div className='flex flex-col justify-center items-center'>
					<Lottie className='w-6' animationData={rainDarkData} />
					<div className='font-light text-[15px] mt-1 translate-x-[2px]'>
						<span>{pop}</span>
						<span className='text-[10px]'>&nbsp;%</span>
					</div>
					<div className='font-thin text-[8px]'>Rain Chance</div>
				</div>
				<div className='flex flex-col justify-center items-center'>
					<Lottie className='w-6 -translate-x-px' animationData={humdDarkData} />
					<div className='font-light text-[15px] mt-1 translate-x-[2px]'>
						<span>{calcHumd(humd)}</span>
						<span className='text-[10px]'>&nbsp;%</span>
					</div>
					<div className='font-thin text-[8px]'>Humidity</div>
				</div>
			</div>
		</div>
	);
}
