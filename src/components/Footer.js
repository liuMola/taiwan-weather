import React, { useRef } from 'react';
import dayjs from 'dayjs';
//components
//store
import useStore from '../store/store';
//data fetching
import { fetchWeatherForecast, fetchCurrentWeather, fetchWeekForecast, fetchSunriseNset } from '../apis/fetchData';
//Lottie
import Lottie from 'lottie-react';
import refreshDarkData from '../lottie/refresh-for-dark.json';

export default function Footer() {
	const time = useStore((state) => state.weatherData.observationTime);
	const setWeatherData = useStore((state) => state.setWeatherData);
	const cityName = useStore((state) => state.location.cityName);
	const locationName = useStore((state) => state.location.locationName);

	const fetch = () => {
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
	};

	return (
		<div className='flex items-center justify-between w-full text-[9px] pt-1 text-bright'>
			<div className='font-thin tracking-wide'>
				<span>
					Taiwan <br />
					Weather <br />
					Crop.
				</span>
			</div>
			<div className='flex items-center'>
				<div className='flex flex-col font-light mr-2 tracking-wide'>
					<span>Last Obser.</span>
					<span>
						{new Intl.DateTimeFormat('en-US', {
							hour: 'numeric',
							minute: 'numeric',
						}).format(dayjs(time))}{' '}
					</span>
				</div>
				<div className='white-glass flex items-center justify-center w-8 h-8 rounded-lg hover:cursor-pointer'>
					<Lottie className='w-6/12' animationData={refreshDarkData} onClick={fetch} />
				</div>
			</div>
		</div>
	);
}
