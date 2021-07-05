import React, { useState, useEffect } from 'react';

import DarkorBright from './darkorBright';
import Header from './components/Header';
import Temperature from './components/Temperature';
import WeatherInfo from './components/WeatherInfo';
import Footer from './components/Footer';
//store
import useStore from './store/store';

import { fetchWeatherForecast, fetchCurrentWeather } from './apis/fetchData';
import { fetchGeoData } from './apis/getGeoData';

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
			<div className='bg-[#ffffff] h-full flex items-center justify-center text-dark dark:text-bright font-roboto'>
				<div className='weather-card relative min-w-[355px] bg-bright-theme dark:bg-dark-theme pt-3 pb-5 px-8 rounded-xl'>
					<Header />
					<DarkorBright dark={dark} setDark={setDark} />
					<Temperature />
					<WeatherInfo />
					<div className='w-full bg-dark dark:bg-bright opacity-20 h-px mt-6 mb-4'></div>
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
