import React from 'react';
import Lottie from 'lottie-react';
import logo from '../lottie/logo.json';
import { ReactComponent as TaiwanWeather } from '../images/weather.svg';

export default function Loading() {
	return (
		<>
			<div className='w-full h-full flex justify-center items-center bg-gray-50 z-10'>
				<div className='flex flex-col justify-center items-center -translate-y-3'>
					<div className='mb-1'>
						<Lottie animationData={logo} loop={false} />
					</div>
					<div className='-translate-x-3'>
						<TaiwanWeather className='w-28 h-8' />
						{/* <p>Taiwan Weather</p> */}
					</div>
				</div>
			</div>
		</>
	);
}
