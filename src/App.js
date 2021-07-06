import React, { useState, useEffect } from 'react';

import MainInfo from './components/MainInfo';
import DarkorBright from './darkorBright';
import Header from './components/Header';
import WeekForecast from './components/WeekForecast';

import Footer from './components/Footer';
//store
import useStore from './store/store';

import { fetchWeatherForecast, fetchCurrentWeather } from './apis/fetchData';

function App() {
	const [dark, setDark] = useState(false);
	const setWeatherData = useStore((state) => state.setWeatherData);

	useEffect(() => {
		const fetchData = async () => {
			const data = await Promise.all([fetchCurrentWeather(), fetchWeatherForecast()]);
			return data;
		};
		fetchData().then((data) => setWeatherData(data));
	}, []);

	useEffect(() => {
		let root = document.getElementsByTagName('html')[0];
		root.classList.toggle('dark');
	}, [dark]);

	return (
		<>
			<div className='bg-background-img h-full flex items-center justify-center text-dark font-roboto'>
				<div className='weather-card relative min-w-[355px] white-glass pt-3 pb-5 px-6 rounded-3xl backdrop-blur'>
					<Header />
					<MainInfo />
					<WeekForecast />
					<div className='w-full bg-dark dark:bg-bright opacity-20 h-px mt-6 mb-4'></div>
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
