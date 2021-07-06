import React from 'react';

import { ReactComponent as DayCloudyIcon } from '../images/day-cloudy.svg';

export default function DayForcestCard() {
	return (
		<div className='white-glass py-4 px-3 rounded-xl'>
			<div className='flex flex-col items-center font-light text-[12px] text-dark'>
				<div>Mon</div>
				<div className='mt-1 mb-2'>
					<DayCloudyIcon className='w-6 h-6' />
				</div>
				<div className='flex'>
					<div>23</div>
					<div>°</div>
				</div>
			</div>
		</div>
	);
}
