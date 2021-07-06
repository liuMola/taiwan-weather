import React from 'react';
//components
//lottie
import Lottie from 'lottie-react';
import windBrightData from '../lottie/wind-for-bright.json';
import windDarkData from '../lottie/wind-for-dark.json';
import sunBrightData from '../lottie/sun-for-bright.json';
import sunDarkData from '../lottie/sun-for-dark.json';
import rainBrightData from '../lottie/rain-for-bright.json';
import rainDarkData from '../lottie/rain-for-dark.json';
import humdBrightData from '../lottie/humd-for-bright.json';
import humdDarkData from '../lottie/humd-for-dark.json';
//store
import useStore from '../store/store';

const index = {
	wind: ['Wind velocity', 'm/s'],
	uv: ['UV Index', ''],
	pop: [`Probability of \nPrecipitation`, '%'],
	humd: ['Humidity', '%'],
};

export default function WeatherInfo() {
	let mode = document.getElementsByTagName('html')[0];
	const windDarkOrBright = () => (mode.classList.contains('dark') ? windDarkData : windBrightData);
	const sunDarkOrBright = () => (mode.classList.contains('dark') ? sunDarkData : sunBrightData);
	const rainDarkOrBright = () => (mode.classList.contains('dark') ? rainDarkData : rainBrightData);
	const humdDarkOrBright = () => (mode.classList.contains('dark') ? humdDarkData : humdBrightData);

	const windSpeed = useStore((state) => state.weatherData.windSpeed);
	const uvIndex = useStore((state) => state.weatherData.uvIndex);
	const pop = useStore((state) => state.weatherData.pop);
	const humd = useStore((state) => state.weatherData.humidity);

	return (
		<div className='relative w-full px-2'>
			<div className='relatvie w-full flex items-center justify-around'>
				<div className='flex flex-col justify-center items-center'>
					<Lottie className='w-6' animationData={windDarkOrBright()} />
					<div className='font-light text-[15px] mt-1'>
						<span>23</span>
						<span className='text-[10px]'>&nbsp;m/s</span>
					</div>
					<div className='font-thin text-[8px]'>Wind velocity</div>
				</div>
				<div className='flex flex-col justify-center items-center'>
					<Lottie className='w-6' animationData={rainDarkOrBright()} />
					<div className='font-light text-[15px] mt-1'>
						<span>15</span>
						<span className='text-[10px]'>&nbsp;%</span>
					</div>
					<div className='font-thin text-[8px]'>Rain Chance</div>
				</div>
				<div className='flex flex-col justify-center items-center'>
					<Lottie className='w-6 transform -translate-x-1' animationData={humdDarkOrBright()} />
					<div className='font-light text-[15px] mt-1'>
						<span>68</span>
						<span className='text-[10px]'>&nbsp;%</span>
					</div>
					<div className='font-thin text-[8px]'>Humidity</div>
				</div>
			</div>
		</div>
	);
}
