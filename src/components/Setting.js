import React, { useState } from 'react';
import { LazyMotion, m, domAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
//components
import DropdownMenu from './DropdownMenu';
import CurrentLocation from './CurrentLocation';
import SettingButton from './SettingButton';
import { ReactComponent as Loading } from '../images/loading.svg';
import useStore from '../store/store';
import { availableLocations } from '../utils/helper';

export default function Setting() {
	const [unit, setUnit] = useState('c');
	const [location, setLocation] = useState(availableLocations[1]);
	const [currentLocation, setCurrentLocation] = useState(false);
	const GPSLocation = useStore((state) => state.GPSLocation);
	const animateVariants = {
		initial: { y: 750 },
		animate: {
			y: 0,
			transition: {
				duration: 0.5,
				ease: [0.43, 0.13, 0.23, 0.9],
			},
		},
	};

	//toggle unit style
	const toggleUnitC = () => {
		const c = document.getElementById('celsius');
		const f = document.getElementById('fahrenheit');
		if (f.classList.contains('unit-selected') && !c.classList.contains('unit-selected')) {
			c.classList.toggle('unit-selected');
			f.classList.toggle('unit-selected');
			setUnit('c');
		} else {
			return;
		}
	};
	const toggleUnitF = () => {
		const c = document.getElementById('celsius');
		const f = document.getElementById('fahrenheit');
		if (!f.classList.contains('unit-selected') && c.classList.contains('unit-selected')) {
			c.classList.toggle('unit-selected');
			f.classList.toggle('unit-selected');
			setUnit('f');
		} else {
			return;
		}
	};
	//toggle setting style
	const settingClick = () => {
		const main = document.getElementById('main');
		main.classList.toggle('settingOpen');
	};

	return (
		<LazyMotion features={domAnimation}>
			<m.div
				className='absolute bg-bright min-w-[345px] h-[400px] px-6 py-8 rounded-3xl white-glass backdrop-blur-lg'
				variants={animateVariants}
				initial='initial'
				animate='animate'
			>
				<div className='relative w-full h-full flex flex-col text-sm'>
					<div className='flex justify-between items-center mb-12'>
						<div className='text-2xl'>Setting</div>
						<Link to='/'>
							<div className='cursor-pointer' onClick={settingClick}>
								<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' viewBox='0 0 20 20' fill='currentColor'>
									<path
										fillRule='evenodd'
										d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
						</Link>
					</div>
					<div className='mb-10 flex items-center justify-between'>
						<span className='text-[15px]'>Unit</span>
						<div className='flex'>
							<div
								id='celsius'
								className='flex w-16 h-9 bg-white unit-selected justify-center items-center rounded-xl mr-5 cursor-pointer'
								onClick={toggleUnitC}
							>
								<span className='-translate-x-px'>°C</span>
							</div>
							<div
								id='fahrenheit'
								className='flex w-16 h-9 bg-white justify-center items-center rounded-xl cursor-pointer'
								onClick={toggleUnitF}
							>
								<span>°F</span>
							</div>
						</div>
					</div>
					<div className='mb-8 flex items-center justify-between'>
						<span className='text-[15px]'>Location</span>
						<DropdownMenu location={location} setLocation={setLocation} currentLocation={currentLocation} />
					</div>
					<CurrentLocation currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} />
					<div>
						{currentLocation && !GPSLocation ? (
							<div className='flex items-center'>
								<Loading className='w-4 h-4 stroke-current animate-spin mr-1' />
								<span>Loading</span>
							</div>
						) : (
							<>
								<div className='flex items-center'>
									{GPSLocation ? (
										<div className='mr-1'>
											<svg className='w-3 h-3 fill-[#303030]' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477.883 477.883'>
												<path d='M468.456 1.808a17.063 17.063 0 00-15.289 0L9.433 223.675c-8.429 4.219-11.842 14.471-7.624 22.9a17.065 17.065 0 0012.197 9.151l176.111 32.034 32.034 176.111a17.066 17.066 0 0014.353 13.841c.803.116 1.613.173 2.423.171a17.067 17.067 0 0015.275-9.438L476.07 24.711c4.222-8.427.813-18.681-7.614-22.903zM246.557 407.38l-24.986-137.353a17.066 17.066 0 00-13.653-13.653L70.498 231.32 422.634 55.244 246.557 407.38z' />
											</svg>
										</div>
									) : null}
									<div className='text-[#303030]'>{GPSLocation}</div>
								</div>
							</>
						)}
					</div>
					<SettingButton currentLocation={currentLocation} location={location} unit={unit} />
				</div>
			</m.div>
		</LazyMotion>
	);
}
