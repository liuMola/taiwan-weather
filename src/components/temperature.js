import React from 'react';
//Components
import { ReactComponent as DayCloudyIcon } from '../images/day-cloudy.svg';
//store
import useStore from '../store/store';

export default function Temperature() {
	const temperature = useStore((state) => state.currentWeatherData.temperature);
	const description = useStore((state) => state.forecastData.description);

	return (
		<>
			<div className='my-4'>
				<div className='flex flex-col items-center'>
					<div>
						<DayCloudyIcon />
					</div>
					<div className='relative font-normal text-[42px] flex transform translate-x-2'>
						<span className='text-[80px]'>{Math.round(temperature)}</span>
						<span className='relative text-[40px] self-start top-2 block'>°</span>
					</div>
					<div>
						<span>{description}</span>
					</div>
				</div>
			</div>
		</>
	);
}
