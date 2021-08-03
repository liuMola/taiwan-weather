import React, { useMemo } from 'react';
import loadable from '@loadable/component';
import Lottie from 'lottie-react';
//icon
import clear from '../lottie/day-clear.json';
import clearFog from '../lottie/day-clear-fog.json';
import clearCloudy from '../lottie/day-clear-cloudy.json';
import clearSnow from '../lottie/day-clear-snow.json';
import rain from '../lottie/day-clear-rain.json';
import cloudyFog from '../lottie/day-cloudy-fog.json';
import thunderstrom from '../lottie/day-thunderstrom.json';
// const clear = loadable(() => import('../lottie/day-clear.json'));
// const clearFog = loadable(() => import('../lottie/day-clear-fog.json'));
// const clearCloudy = loadable(() => import('../lottie/day-clear-cloudy.json'));
// const clearSnow = loadable(() => import('../lottie/day-clear-snow.json'));
// const rain = loadable(() => import('../lottie/day-clear-rain.json'));
// const cloudyFog = loadable(() => import('../lottie/day-cloudy-fog.json'));
// const thunderstrom = loadable(() => import('../lottie/day-thunderstrom.json'));

const weatherTypes = {
	isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
	isClear: [1],
	isCloudyFog: [25, 26, 27, 28],
	isCloudy: [2, 3, 4, 5, 6, 7],
	isFog: [24],
	isPartiallyClearWithRain: [8, 9, 10, 11, 12, 13, 14, 19, 20, 29, 30, 31, 32, 38, 39],
	isSnowing: [23, 37, 42],
};

const weatherLottie = {
	day: {
		isThunderstorm: thunderstrom,
		isClear: clear,
		isCloudyFog: cloudyFog,
		isCloudy: clearCloudy,
		isFog: clearFog,
		isPartiallyClearWithRain: rain,
		isSnowing: clearSnow,
	},
	night: {
		isThunderstorm: thunderstrom,
		isClear: clear,
		isCloudyFog: cloudyFog,
		isCloudy: clearCloudy,
		isFog: clearFog,
		isPartiallyClearWithRain: rain,
		isSnowing: clearSnow,
	},
};

const weatherCode2Type = (weatherCode) => {
	const [weatherType] = Object.entries(weatherTypes).find(([weatherType, weatherCodes]) => weatherCodes.includes(Number(weatherCode))) || [];
	return weatherType;
};

const WeatherLottie = ({ descriptionCode, moment }) => {
	const weatherType = useMemo(() => weatherCode2Type(descriptionCode), [descriptionCode]);
	const weatherAnimation = weatherLottie[moment][weatherType];
	return (
		<>
			<Lottie animationData={weatherAnimation} />
		</>
	);
};

export default WeatherLottie;
