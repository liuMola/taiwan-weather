import React from 'react';
//Components
import { ReactComponent as DayCloudyIcon } from '../images/day-cloudy.svg';
//store
import useStore from '../store/store';

export default function Temperature() {
	const temperature = useStore((state) => state.weatherData.temperature);
	const description = useStore((state) => state.weatherData.description);

	return (
		<>
			<div className='mb-6 w-full pl-2'>
				<div className='flex items-center w-full justify-evenly'>
					<div className='flex flex-col items-center'>
						<div className='relative font-normal text-[42px] flex'>
							<span className='text-[80px]'>{Math.round(temperature)}</span>
							<span className='relative text-[40px] self-start top-2 block'>°</span>
						</div>
						<div className='flex items-center'>
							<span>Cloudy</span>
							<div className='flex ml-2 text-sm font-thin'>
								<div className='font-light'>28</div>
								<div className='font-light'>°</div>
								<div>&nbsp;/&nbsp;</div>
								<div>18</div>
								<div>°</div>
							</div>
						</div>
					</div>
					<div className='ml-2'>
						<DayCloudyIcon />
					</div>
				</div>
			</div>
		</>
	);
}
