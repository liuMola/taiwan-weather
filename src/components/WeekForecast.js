import React from 'react';

import DayForcestCard from './DayForcestCard';

export default function FiveDayForecast() {
	return (
		<div className='mb-6'>
			<div className='text-base font-normal mb-5'>
				<span>Week forecast</span>
			</div>
			<div className='flex justify-between'>
				<DayForcestCard />
				<DayForcestCard />
				<DayForcestCard />
				<DayForcestCard />
				<DayForcestCard />
			</div>
		</div>
	);
}
