import React from 'react';

export default function Status(props) {
	return (
		<div className='relative p-2 w-[139px] h-11 rounded-md shadow-b-out dark:shadow-d-out flex items-center'>
			<div className='relative flex items-center justify-between w-full'>
				<div className='rounded-full shadow-b-in dark:shadow-d-in w-7 h-7 flex items-center justify-center'>
					{props.children}
				</div>
				<div className='font-thin text-[6px] mr-2'>Wind velocity</div>
				<div className='relative font-light flex tracking-wide'>
					<div className='text-base'>23</div>
					<div className='relative text-[8px] bottom-1 self-end ml-[3px]'>m/h</div>
				</div>
			</div>
		</div>
	);
}
