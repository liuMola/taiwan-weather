import React from 'react';
import { findWeather } from '../utils/helper';
import loadable from '@loadable/component';

const LottieFile = loadable(() => import('./LottieFile'), {
	fallback: <div>...</div>,
});

export default function DayForcestCard({ date, descriptionCode, temp, moment }) {
	const data = findWeather(descriptionCode, moment);

	return (
		<div className='white-glass py-4 px-[9px] rounded-xl'>
			<div className='flex flex-col items-center font-light text-[12px] text-dark'>
				<div>{date}</div>
				<div className='mt-2 mb-3'>
					<div className='w-7 h-7 flex justify-center items-center'>
						<LottieFile data={data} />
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
