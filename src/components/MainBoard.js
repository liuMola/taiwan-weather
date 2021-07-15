import React, { useEffect } from 'react';
//components
import MainInfo from './MainInfo';
import Header from './Header';
import WeekForecast from './WeekForecast';
import Footer from './Footer';
//store
import useStore from '../store/store';
//fetch
import { fetchWeatherForecast, fetchCurrentWeather, fetchWeekForecast, fetchSunriseNset } from '../apis/fetchData';

export default function MainBoard() {
	const setWeatherData = useStore((state) => state.setWeatherData);
	const cityName = useStore((state) => state.location.cityName);
	const locationName = useStore((state) => state.location.locationName);

	useEffect(() => {
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
	}, []);

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
