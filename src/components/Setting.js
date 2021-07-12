import React from 'react';

import DropdownMenu from './DropdownMenu';

export default function Setting() {
	return (
		<div className='relative w-full h-full flex flex-col text-sm'>
			<div className='flex justify-between items-center mb-6'>
				<div className='text-xl'>Setting</div>
				<div>
					<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' viewBox='0 0 20 20' fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
							clipRule='evenodd'
						/>
					</svg>
				</div>
			</div>
			<div className='mb-6'>
				<div className='mb-3'>Unit</div>
				<div className='flex'>
					<div className='flex w-16 h-9 bg-[#59A3D1] justify-center items-center rounded-xl mr-5'>
						<span className='-translate-x-px'>°C</span>
					</div>
					<div className='flex w-16 h-9 bg-white justify-center items-center rounded-xl'>
						<span>°F</span>
					</div>
				</div>
			</div>
			<div className='w-full'>
				<div className='mb-3'>Location</div>
				<DropdownMenu />
			</div>
			<div className='absolute bottom-2 right-0'>
				<div className='flex w-20 h-9 bg-[#59A3D1] text-bright justify-center items-center rounded-xl border'>
					<span>Apply</span>
				</div>
			</div>
		</div>
	);
}
