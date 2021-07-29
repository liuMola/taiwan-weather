import React from 'react';
import { Link } from 'react-router-dom';
//Lottie
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import settingDarkData from '../lottie/setting-for-dark.json';

import { findLocation } from '../utils/helper';
import useStore from '../store/store';

const settingClick = () => {
	const main = document.getElementById('main');
	main.classList.toggle('settingOpen');
};

const container = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

export default function Header() {
	const cityName = useStore((state) => state.location.cityName);

	return (
		<>
			<motion.div
				variants={container}
				initial='hidden'
				animate='visible'
				transition={{ ease: 'easeOut', duration: 2 }}
				className='relative top-0 mt-2 mb-2 py-1 pl-3 pr-1 w-full'
			>
				<div className='flex justify-between items-center w-full'>
					<div className='flex flex-col items-start'>
						<span className='text-xs tracking-wider font-thin'>Taiwan</span>
						<span className='text-[26px]'>{findLocation(cityName).cityNameEn}</span>
					</div>
					<Link to='/setting'>
						<div className='white-glass flex items-center justify-center w-8 h-8 rounded-lg hover:cursor-pointer' onClick={settingClick}>
							<Lottie className='w-6/12' animationData={settingDarkData} />
						</div>
					</Link>
				</div>
			</motion.div>
		</>
	);
}
