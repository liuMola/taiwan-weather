import React, { useEffect } from 'react';

import MainInfo from './components/MainInfo';
import Header from './components/Header';
import WeekForecast from './components/WeekForecast';
import Footer from './components/Footer';
//store
import useWeatherStore from './store/weatherStore';

import { fetchWeatherForecast, fetchCurrentWeather, fetchWeekForecast } from './apis/fetchData';

function App() {
	const setWeatherData = useWeatherStore((state) => state.setWeatherData);

	useEffect(() => {
		const fetchData = async () => {
			const data = await Promise.all([fetchCurrentWeather(), fetchWeatherForecast(), fetchWeekForecast()]);
			return data;
		};
		fetchData().then((data) => setWeatherData(data));
	}, []);

	return (
		<>
			<div className='bg-background-img h-full flex items-center justify-center text-dark font-roboto'>
				<div className='weather-card relative min-w-[355px] white-glass pt-3 pb-5 px-6 rounded-3xl backdrop-blur'>
					<Header />
					<MainInfo />
					<WeekForecast />
					<div className='w-full bg-bright opacity-30 h-px mt-6 mb-4'></div>
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
