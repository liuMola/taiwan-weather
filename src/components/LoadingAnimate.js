import React from 'react';

export default function LoadingAnimate() {
	return (
		<div className='flex absolute justify-center items-center w-2 h-2'>
			<span className='absolute w-full h-full animate-ping border border-gray-600 rounded-full opacity-80'></span>
			<span className='absolute w-2 h-2 border border-gray-600 rounded-full'></span>
		</div>
	);
}
