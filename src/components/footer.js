import React, { useRef } from 'react';
import Button from './button';
//Lottie
import Lottie from 'lottie-react';
import refreshBrightData from '../lottie/refresh-for-bright.json';
import refreshDarkData from '../lottie/refresh-for-dark.json';

export default function Footer() {
	const lottieRef = useRef(null);

	let mode = document.getElementsByTagName('html')[0];
	const darkOrBright = () => (mode.classList.contains('dark') ? refreshDarkData : refreshBrightData);

	const playRefresh = () => {
		lottieRef.current.play();
		console.log('fire!');
	};

	return (
		<div className='flex items-center justify-between w-full text-[8px] pt-1'>
			<div className='font-thin  tracking-wide'>
				<span>
					Taiwan <br />
					Weather <br />
					Crop.
				</span>
			</div>
			<div className='flex items-center'>
				<div className='flex flex-col font-light mr-2'>
					<span>Last updated</span>
					<span>12:03 AM</span>
				</div>
				<Button>
					<Lottie
						onClick={playRefresh}
						className='w-7/12'
						lottieRef={lottieRef}
						autoplay={false}
						loop={false}
						animationData={darkOrBright()}
					/>
				</Button>
			</div>
		</div>
	);
}
