import React, { useEffect } from 'react';

import MainInfo from './components/MainInfo';
import Header from './components/Header';
import WeekForecast from './components/WeekForecast';
import Footer from './components/Footer';
//store
import useStore from './store/store';
import Setting from './components/Setting';

import { fetchWeatherForecast, fetchCurrentWeather, fetchWeekForecast, fetchSunriseNset } from './apis/fetchData';

import whyDidYouRender from '@welldone-software/why-did-you-render';
whyDidYouRender(React, {
	onlyLogs: true,
	titleColor: 'green',
	diffNameColor: 'aqua',
	trackAllPureComponents: true,
});

function App() {
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
		<>
			<div className='bg-background-img h-full flex items-center justify-center text-dark font-roboto overscroll-none'>
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
				<div className='ml-8 bg-bright min-w-[300px] h-96 p-6 rounded-3xl bg-opacity-5 white-glass'>
					<Setting />
				</div>
			</div>
		</>
	);
}

export default App;
