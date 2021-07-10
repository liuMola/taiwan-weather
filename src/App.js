import React, { useEffect } from 'react';

import MainInfo from './components/MainInfo';
import Header from './components/Header';
import WeekForecast from './components/WeekForecast';
import Footer from './components/Footer';
//store
import useWeatherStore from './store/store';
import Setting from './components/Setting';

import { fetchWeatherForecast, fetchCurrentWeather, fetchWeekForecast, fetchSunriseNset } from './apis/fetchData';

function App() {
	const setWeatherData = useWeatherStore((state) => state.setWeatherData);

	if (process.env.NODE_ENV === 'production') {
		console.log('prod');
	} else {
		console.log('env');
	}

	useEffect(() => {
		const fetchData = async () => {
			const data = await Promise.all([
				fetchCurrentWeather(),
				fetchWeatherForecast(),
				fetchWeekForecast(),
				fetchSunriseNset(),
			]);
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
				{/* <div className='ml-8 bg-bright w-56 h-96 flex justify-center items-center rounded-3xl bg-opacity-3  white-glass'>
					<Setting />
				</div> */}
			</div>
		</>
	);
}

export default App;
