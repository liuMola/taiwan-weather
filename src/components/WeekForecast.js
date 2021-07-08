import React from 'react';

import DayForcestCard from './DayForcestCard';
import useWeatherStore from '../store/weatherStore';

export default function FiveDayForecast() {
	const descriptionCode = useWeatherStore((state) => state.weatherData.weekForecastCode);
	const getDate = () => {
		const date = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
		let today = new Date().getDay();
		let newDate = ['TMR'];
		for (let i = 2; i < 6; i++) {
			newDate.push(date[today + i]);
		}
		return newDate;
	};
	const date = getDate();

	return (
		<div className='mb-6'>
			<div className='text-base font-normal mb-5'>
				<span>Week forecast</span>
			</div>
			<div className='flex justify-between'>
				<DayForcestCard date={date[0]} descriptionCode={descriptionCode[0]} />
				<DayForcestCard date={date[1]} descriptionCode={descriptionCode[1]} />
				<DayForcestCard date={date[2]} descriptionCode={descriptionCode[2]} />
				<DayForcestCard date={date[3]} descriptionCode={descriptionCode[3]} />
				<DayForcestCard date={date[4]} descriptionCode={descriptionCode[4]} />
			</div>
		</div>
	);
}
