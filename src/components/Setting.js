import React from 'react';

import DropdownMenu from './DropdownMenu';

export default function Setting() {
	return (
		<div className='relative w-full h-full p-4 flex justify-center items-center flex-col'>
			<div>Setting</div>
			<div className='w-full'>
				<div>Choose City</div>
				<DropdownMenu />
			</div>
		</div>
	);
}
