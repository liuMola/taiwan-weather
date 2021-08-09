import React from 'react';
import Temperature from './Temperature';
import WeatherInfo from './WeatherInfo';

export default function MainInfo() {
	return (
		<>
			<div className='relative white-glass w-full p-4 flex flex-col items-center mb-8 rounded-3xl bg-opacity-3'>
				<Temperature />
				<WeatherInfo />
			</div>
		</>
	);
}
