import React from 'react';
import Lottie from 'lottie-react';
//lottie file
import clear from '../lottie/day-clear.json';
import clearFog from '../lottie/day-clear-fog.json';
import clearCloudy from '../lottie/day-clear-cloudy.json';
import clearSnow from '../lottie/day-clear-snow.json';
import rain from '../lottie/day-clear-rain.json';
import cloudyFog from '../lottie/day-cloudy-fog.json';
import thunderstrom from '../lottie/day-thunderstrom.json';
//Lottie Icon
import windIcon from '../lottie/wind.json';
import rainIcon from '../lottie/pop.json';
import humdIcon from '../lottie/humidity.json';
import settingIcon from '../lottie/setting.json';
import refreshIcon from '../lottie/refresh.json';

const lottieData = {
	clear,
	clearFog,
	clearCloudy,
	clearSnow,
	rain,
	cloudyFog,
	thunderstrom,
	windIcon,
	rainIcon,
	humdIcon,
	settingIcon,
	refreshIcon,
};

export default function LottieFile({ data, styleName }) {
	const dataName = lottieData[data];
	const className = styleName;

	return (
		<>
			<Lottie className={className} animationData={dataName} />
		</>
	);
}
