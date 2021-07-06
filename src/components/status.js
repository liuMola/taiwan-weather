import React from 'react';

export default function Status({ children, status, category, unit }) {
	return (
		<div className='relative flex items-center'>
			<div className='relative flex items-center justify-center w-full'>
				<div className='rounded-full shadow-b-in dark:shadow-d-in w-7 h-7 min-w-[28px] mr-2 flex items-center justify-center'>
					{children}
				</div>
				<span className='font-thin text-[6px]'>{category}</span>
				<div className='relative font-light flex tracking-wide ml-auto'>
					<div className='text-base'>{status}</div>
					<div className='relative text-[8px] bottom-1 self-end ml-[3px]'>{unit}</div>
				</div>
			</div>
		</div>
	);
}
