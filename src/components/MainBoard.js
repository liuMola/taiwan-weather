import React, { useEffect } from 'react';
import MainInfo from './MainInfo';
import Header from './Header';
import WeekForecast from './WeekForecast';
import Footer from './Footer';
import useStore from '../store/store';
// import useWeatherApi from '../hooks/useWeatherAPI';
import { fetchWeatherForecast, fetchCurrentWeather, fetchWeekForecast, fetchSunriseNset } from '../apis/fetchData';

const MainBoard = () => {
	const cityName = useStore((state) => state.location.cityName);
	const locationName = useStore((state) => state.location.locationName);
	const setWeatherData = useStore((state) => state.setWeatherData);
	const setLoading = useStore((state) => state.setLoading);
	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				let data = await Promise.all([
					fetchCurrentWeather(locationName),
					fetchWeatherForecast(cityName),
					fetchWeekForecast(cityName),
					fetchSunriseNset(cityName),
				]);
				setLoading(false);
				return data;
			} catch (err) {
				console.log(`weather data fetching error: ${err}`);
			}
		};
		fetchData().then((data) => {
			setWeatherData(data);
		});
	});

	return (
		<main
			id='main'
			className='weather-card relative min-w-[355px] white-glass pt-3 pb-5 px-4 rounded-3xl backdrop-blur transition duration-500 ease-in-out'
		>
			<Header />
			<MainInfo />
			<WeekForecast />
			<div className='w-full bg-bright opacity-30 h-px mt-6 mb-4'></div>
			<Footer />
		</main>
	);
};

export default MainBoard;
