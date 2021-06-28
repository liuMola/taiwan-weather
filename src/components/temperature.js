import React from 'react';
import { ReactComponent as DayCloudyIcon } from '../images/day-cloudy.svg';

export default function Temperature() {
	return (
		<>
			<div className='my-4'>
				<div className='flex flex-col items-center'>
					<div>
						<DayCloudyIcon />
					</div>
					<div className='relative font-normal text-[42px] flex transform translate-x-2'>
						<span className='text-[80px]'>32</span>
						<span className='relative text-[40px] self-start top-2 block'>°</span>
					</div>
					<div>
						<span>Cloudy</span>
					</div>
				</div>
			</div>
		</>
	);
}
