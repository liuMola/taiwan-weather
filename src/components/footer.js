import React, { useRef } from 'react';
import dayjs from 'dayjs';
//components
import Button from './Button';
import { ReactComponent as RefreshIcon } from '../images/refresh.svg';
//store
import useWeatherStore from '../store/weatherStore';
//Lottie
import Lottie from 'lottie-react';
import refreshBrightData from '../lottie/refresh-for-bright.json';
import refreshDarkData from '../lottie/refresh-for-dark.json';

import { fetchWeatherForecast, fetchCurrentWeather } from '../apis/fetchData';

export default function Footer() {
	const lottieRef = useRef(null);
	const time = useWeatherStore((state) => state.weatherData.observationTime);
	const loading = useWeatherStore((state) => state.weatherData.isLoading);

	let mode = document.getElementsByTagName('html')[0];
	const darkOrBright = () => (mode.classList.contains('dark') ? refreshDarkData : refreshBrightData);

	const playRefresh = () => {
		lottieRef.current.play();
	};

	return (
		<div className='flex items-center justify-between w-full text-[8px] pt-1'>
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
