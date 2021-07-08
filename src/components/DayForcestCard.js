import React from 'react';

import { ReactComponent as DayCloudyIcon } from '../images/day-cloudy.svg';

import WeatherIcon from '../components/WeatherIcon';

export default function DayForcestCard({ date, descriptionCode, temp }) {
	return (
		<div className='white-glass py-4 px-3 rounded-xl'>
			<div className='flex flex-col items-center font-light text-[12px] text-dark'>
				<div>{date}</div>
				<div className='mt-1 mb-3'>
					<div className='w-6 h-6'>
						<WeatherIcon descriptionCode={descriptionCode} moment='day' />
					</div>
				</div>
				<div className='flex'>
					<div>{temp}</div>
					<div>°</div>
				</div>
			</div>
		</div>
	);
}
