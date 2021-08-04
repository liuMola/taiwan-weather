import React from 'react';
import loadable from '@loadable/component';
import useStore from '../store/store';

const LottieFile = loadable(() => import('./LottieFile'), {
	fallback: <div>...</div>,
});

export default function WeatherInfo() {
	const windSpeed = useStore((state) => state.weatherData.windSpeed);
	const pop = useStore((state) => state.weatherData.pop);
	const humd = useStore((state) => state.weatherData.humidity);
	function calcHumd(num) {
		return Math.floor(Number.parseFloat(num) * 100);
	}
	return (
		<div className='relative w-full px-2'>
			<div className='relatvie w-full flex items-center justify-around'>
				<div className='flex flex-col justify-center items-center font-light'>
					<LottieFile styleName={'w-6'} data={'windIcon'} />
					<div className='text-[16px] mt-[3px]'>
						<span>{Math.round(windSpeed)}</span>
						<span className='text-[11px]'>&nbsp;m/s</span>
					</div>
					<div className='text-[9.5px] opacity-80'>Wind velocity</div>
				</div>
				<div className='flex flex-col justify-center items-center font-light'>
					<LottieFile styleName={'w-6'} data={'rainIcon'} />
					<div className='text-[16px] mt-[3px] translate-x-[2px]'>
						<span>{pop}</span>
						<span className='text-[11px]'>&nbsp;%</span>
					</div>
					<div className='text-[9.5px] opacity-80'>Rain Chance</div>
				</div>
				<div className='flex flex-col justify-center items-center font-light'>
					<LottieFile styleName={'w-6 -translate-x-px'} data={'humdIcon'} />
					<div className='text-[16px] mt-[3px] translate-x-[2px]'>
						<span>{calcHumd(humd)}</span>
						<span className='text-[11px]'>&nbsp;%</span>
					</div>
					<div className='text-[9.5px] opacity-80'>Humidity</div>
				</div>
			</div>
		</div>
	);
}
