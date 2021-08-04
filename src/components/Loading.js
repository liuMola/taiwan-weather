import React from 'react';
import Lottie from 'lottie-react';
import logo from '../lottie/logo.json';
import { ReactComponent as TaiwanWeather } from '../images/weather.svg';
import { m, LazyMotion, domAnimation } from 'framer-motion';

export default function Loading() {
	return (
		<LazyMotion features={domAnimation}>
			<m.div
				className='w-full h-full flex justify-center items-center z-10 bg-transparent'
				transition={{ ease: [0.17, 0.76, 0.82, 0.57], duration: 1 }}
				exit={{ opacity: 0 }}
			>
				<div className='flex flex-col justify-center items-center -translate-y-3'>
					<div className='mb-1 translate-x-3'>
						<Lottie animationData={logo} loop={false} />
					</div>
					<div className='-translate-x-1'>
						<TaiwanWeather className='w-28 h-8' />
					</div>
				</div>
			</m.div>
		</LazyMotion>
	);
}
