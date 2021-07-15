import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
//components
import DropdownMenu from './DropdownMenu';
import CurrentLocation from './CurrentLocation';
//store
import useStore from '../store/store';
//location data
import { availableLocations } from '../utils/helper';
import { fetchWeatherForecast, fetchCurrentWeather, fetchWeekForecast, fetchSunriseNset } from '../apis/fetchData';

export default function Setting() {
	const [unit, setUnit] = useState('c');
	const [location, setLocation] = useState(availableLocations[1]);
	const [currentLocation, setCurrentLocation] = useState(false);
	const setStoreUnit = useStore((state) => state.setUnit);
	const setStoreLocation = useStore((state) => state.setLocation);
	const setWeatherData = useStore((state) => state.setWeatherData);
	const cityName = useStore((state) => state.location.cityName);
	const locationName = useStore((state) => state.location.locationName);
	const locationRef = useRef(cityName);
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
	const applyButton = () => {
		const applyChange = () => {
			setStoreUnit(unit);
			setStoreLocation(location);
		};
		applyChange();
		if (!(locationRef.current === location.cityName)) {
			const fetchData = async () => {
				const data = await Promise.all([
					fetchCurrentWeather(locationName),
					fetchWeatherForecast(cityName),
					fetchWeekForecast(cityName),
					fetchSunriseNset(cityName),
				]);
				return data;
			};
			fetchData().then((data) => setWeatherData(data));
		}
		locationRef.current = location.cityName;
	};

	return (
		<div className='relative w-full h-full flex flex-col text-sm'>
			<div className='flex justify-between items-center mb-6'>
				<div className='text-xl'>Setting</div>
				<div className='cursor-pointer'>
					<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' viewBox='0 0 20 20' fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
							clipRule='evenodd'
						/>
					</svg>
				</div>
			</div>
			<div className='mb-10 flex items-center justify-between'>
				<div className='flex items-center'>
					<span className='mr-[6px]'>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={1}
								d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
							/>
						</svg>
					</span>
					<span>Unit</span>
				</div>
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
			<div className='mb-4 flex items-center justify-between'>
				<div className='flex items-center'>
					<span className='mr-[6px]'>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={1}
								d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
							/>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
						</svg>
					</span>
					<span>Location</span>
				</div>
				<DropdownMenu location={location} setLocation={setLocation} currentLocation={currentLocation} />
			</div>
			<div>
				<div className='flex items-center'>
					<div>
						<span>Use current location</span>
					</div>
					<div>
						<CurrentLocation currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} />
					</div>
				</div>
			</div>
			<div className='absolute bottom-2 right-0'>
				<motion.div
					whileTap={{
						scale: 0.9,
					}}
					className='flex w-20 h-9 bg-[#59A3D1] hover:bg-[#35769e] text-bright justify-center items-center rounded-xl border-[0.5px] border-blue-200 cursor-pointer transition duration-200 ease-in-out'
					onClick={applyButton}
				>
					<span>Apply</span>
				</motion.div>
			</div>
		</div>
	);
}
