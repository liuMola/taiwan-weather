import React from 'react';
//components
import MainInfo from './MainInfo';
import Header from './Header';
import WeekForecast from './WeekForecast';
import Footer from './Footer';
//store
import useStore from '../store/store';
//custom hook for weather fetching
import useWeatherApi from '../hooks/useWeatherAPI';

export default function MainBoard() {
	const cityName = useStore((state) => state.location.cityName);
	const locationName = useStore((state) => state.location.locationName);
	useWeatherApi(locationName, cityName);

	return (
		<div
			id='main'
			className='weather-card relative min-w-[355px] white-glass pt-3 pb-5 px-6 rounded-3xl backdrop-blur transition duration-500 ease-in-out'
		>
			<Header />
			<MainInfo />
			<WeekForecast />
			<div className='w-full bg-bright opacity-30 h-px mt-6 mb-4'></div>
			<Footer />
		</div>
	);
}
