import React from 'react';
import Button from './Button';
//Lottie
import Lottie from 'lottie-react';
import settingBrightData from '../lottie/setting-for-bright.json';
import settingDarkData from '../lottie/setting-for-dark.json';

export default function Header() {
	let mode = document.getElementsByTagName('html')[0];
	const darkOrBright = () => (mode.classList.contains('dark') ? settingDarkData : settingBrightData);

	return (
		<>
			<div className='relative top-0 mt-2 mb-4 p-1 w-full'>
				<div className='flex justify-between items-center w-full'>
					<div className='flex flex-col items-start'>
						<span className='text-xs tracking-wider font-thin'>Taiwan</span>
						<span className='text-2xl'>Taipei City</span>
					</div>
					<div className='white-glass flex items-center justify-center w-8 h-8 rounded-lg hover:cursor-pointer'>
						<Lottie className='w-6/12' animationData={darkOrBright()} />
					</div>
				</div>
			</div>
		</>
	);
}
