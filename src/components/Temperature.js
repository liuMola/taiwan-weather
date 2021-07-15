import React from 'react';
import DescriptionCode from './DescriptionCode';
import WeatherIcon from './WeatherIcon';
//store
import useStore from '../store/store';

export default function Temperature() {
	const descriptionCode = useStore((state) => state.weatherData.weatherDesCode);
	const temperature = useStore((state) => state.weatherData.temperature);
	const unit = useStore((state) => state.unit);
	const lowTemp = useStore((state) => state.weatherData.dayLowTemp);
	const highTemp = useStore((state) => state.weatherData.dayHighTemp);

	return (
		<>
			<div className='mb-6 w-full pl-2'>
				<div className='flex items-center w-full justify-evenly'>
					<div className='flex flex-col items-center'>
						<div className='relative font-normal text-[42px] flex translate-y-3'>
							<span className='text-[80px]'>{unit === 'c' ? Math.round(temperature) : Math.round(temperature * 1.8 + 32)}</span>
							<span className='relative text-[40px] self-start top-2 block'>°</span>
						</div>
						<div className='flex items-center text-sm'>
							<DescriptionCode desCode={descriptionCode} />
							<div className='flex ml-2 text-sm font-thin'>
								<div className='font-light'>{Math.round(highTemp)}</div>
								<div className='font-light'>°</div>
								<div>&nbsp;/&nbsp;</div>
								<div>{Math.round(lowTemp)}</div>
								<div>°</div>
							</div>
						</div>
					</div>
					<div className='ml-2 w-28 h-28'>
						<WeatherIcon descriptionCode={descriptionCode} moment='day' />
					</div>
				</div>
			</div>
		</>
	);
}
