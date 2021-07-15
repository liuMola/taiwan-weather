import React from 'react';

export default function Current() {
	return (
		<>
			<div className='flex items-center justify-between mb-2'>
				<div>
					<span className='text-[15px]'>Use current location</span>
				</div>
				<div>
					<CurrentLocation currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} />
				</div>
			</div>
			<div className='flex items-center'>
				<div className='mr-1'>
					<svg className='w-3 h-3 fill-[#303030]' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.883 477.883'>
						<path d='M468.456 1.808a17.063 17.063 0 00-15.289 0L9.433 223.675c-8.429 4.219-11.842 14.471-7.624 22.9a17.065 17.065 0 0012.197 9.151l176.111 32.034 32.034 176.111a17.066 17.066 0 0014.353 13.841c.803.116 1.613.173 2.423.171a17.067 17.067 0 0015.275-9.438L476.07 24.711c4.222-8.427.813-18.681-7.614-22.903zM246.557 407.38l-24.986-137.353a17.066 17.066 0 00-13.653-13.653L70.498 231.32 422.634 55.244 246.557 407.38z' />
					</svg>
				</div>
				<div className='text-[#303030]'>Hsinchu City</div>
			</div>
		</>
	);
}
