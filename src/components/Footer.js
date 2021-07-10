import React, { useRef } from 'react';
import dayjs from 'dayjs';
//components
import { ReactComponent as RefreshIcon } from '../images/refresh.svg';
//store
import useStore from '../store/store';
//data fetching
import { fetchWeatherForecast, fetchCurrentWeather, fetchWeekForecast, fetchSunriseNset } from '../apis/fetchData';
//Lottie
import Lottie from 'lottie-react';
import refreshBrightData from '../lottie/refresh-for-bright.json';
import refreshDarkData from '../lottie/refresh-for-dark.json';

export default function Footer() {
	const lottieRef = useRef(null);
	const time = useStore((state) => state.weatherData.observationTime);
	const loading = useStore((state) => state.isLoading);
	const setWeatherData = useStore((state) => state.setWeatherData);

	// const fetch = () => {
	// 	const fetchData = async () => {
	// 		const data = await Promise.all([
	// 			fetchCurrentWeather(),
	// 			fetchWeatherForecast(),
	// 			fetchWeekForecast(),
	// 			fetchSunriseNset(),
	// 		]);
	// 		return data;
	// 	};
	// 	fetchData().then((data) => setWeatherData(data));
	// };

	let mode = document.getElementsByTagName('html')[0];
	const darkOrBright = () => (mode.classList.contains('dark') ? refreshDarkData : refreshBrightData);

	const playRefresh = () => {
		lottieRef.current.play();
	};

	return (
		<div className='flex items-center justify-between w-full text-[8px] pt-1 text-bright'>
			<div className='font-thin tracking-wide'>
				<span>
					Taiwan <br />
					Weather <br />
					Crop.
				</span>
			</div>
			<div className='flex items-center'>
				<div className='flex flex-col font-light mr-2'>
					<span>Last Obser.</span>
					<span>
						{new Intl.DateTimeFormat('en-US', {
							hour: 'numeric',
							minute: 'numeric',
						}).format(dayjs(time))}{' '}
					</span>
				</div>
				<div className='white-glass flex items-center justify-center w-8 h-8 rounded-lg hover:cursor-pointer'>
					<Lottie className='w-6/12' animationData={darkOrBright()} />
				</div>
			</div>
		</div>
	);
}
