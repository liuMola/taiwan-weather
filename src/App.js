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
	const setCurrentWeatherData = useStore((state) => state.setCurrentWeatherData);
	const setForecastData = useStore((state) => state.setForecastData);
	const baseURL = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/';

	//data fetching function
	const fetchCurrentWeather = () => {
		let url = baseURL + `O-A0003-001?Authorization=${key.AUTHORIZATION_KEY}&locationName=臺北`;
		const currentWeatherData = async () => {
			const res = await fetch(url);
			const data = await res.json();
			return data;
		};
		currentWeatherData().then((data) => setCurrentWeatherData(data));
		currentWeatherData().then((data) => {
			const weatherData = data.records.location[0].weatherElement.reduce((acc, item) => {
				if (['WDSD', 'TEMP', 'HUMD', 'H_UVI'].includes(item.elementName)) {
					acc[item.elementName] = item.elementValue;
				}

				return acc;
			}, {});
			let obsTime = data.records.location[0].time.obsTime;
			const weatherDataTime = { ...weatherData, obsTime };
			setCurrentWeatherData(weatherDataTime);
		});
	};

	const fetchWeatherForecast = () => {
		let url = baseURL + `F-C0032-001?Authorization=${key.AUTHORIZATION_KEY}&locationName=臺北市`;
		const weatherForecastData = async () => {
			const res = await fetch(url);
			const data = await res.json();
			return data;
		};
		// weatherForecastData().then((data) => setForecastData(data));
		weatherForecastData().then((data) => {
			const forecastData = data.records.location[0].weatherElement.reduce((acc, item) => {
				if (['Wx', 'PoP'].includes(item.elementName)) {
					acc[item.elementName] = item.time[0].parameter;
				}
				return acc;
			}, {});
			setForecastData(forecastData);
		});
	};
	//call data fetching function
	useEffect(() => {
		fetchCurrentWeather();
		fetchWeatherForecast();
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
