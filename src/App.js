import React, { useState, useEffect } from 'react';
//components
import DarkorBright from './darkorBright';
import Header from './components/header';
import Temperature from './components/temperature';
import WeatherInfo from './components/weatherInfo';
import Footer from './components/footer';
import key from './secure/keys';
//store
import useStore from './store/store';

function App() {
	const [dark, setDark] = useState(false);
	const setWeatherData = useStore((state) => state.setWeatherData);

	const baseURL = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/';

	useEffect(() => {
		let indexURL = baseURL + `O-A0003-001?Authorization=${key.AUTHORIZATION_KEY}&locationName=臺北`;
		const weatherIndexData = async () => {
			const res = await fetch(indexURL);
			const data = await res.json();
			return data;
		};
		weatherIndexData().then((data) => setWeatherData(data));
		weatherIndexData().then((data) => console.log(data.records));
	}, []);

	useEffect(() => {
		let weatherURL = baseURL + `F-C0032-001?Authorization=${key.AUTHORIZATION_KEY}&locationName=臺北市`;
		const weatherData = async () => {
			const res = await fetch(weatherURL);
			const data = await res.json();
			return data;
		};
		// weatherData().then((data) => setWeatherData(data));
		weatherData().then((data) => console.log(data));
		console.log('222');
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
