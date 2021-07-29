import React from 'react';
import dayjs from 'dayjs';
import DayForcestCard from './DayForcestCard';
import useStore from '../store/store';

export default function FiveDayForecast() {
	const descriptionCode = useStore((state) => state.weatherData.weekForecastCode);
	const temp = useStore((state) => state.weatherData.weekForecastTemp);
	const sunrise = useStore((state) => state.weatherData.sunriseTime);
	const sunset = useStore((state) => state.weatherData.sunsetTime);

	const dayOrNight = () => {
		const toSecond = (time) => {
			let h = time.slice(0, 2);
			let m = time.slice(3, 5);
			let result = parseInt(h) * 60 + parseInt(m);
			return result;
		};
		const now = parseInt(dayjs().format('HH')) * 60 + parseInt(dayjs().format('mm'));
		if (now > toSecond(sunrise) && now < toSecond(sunset)) {
			return 'day';
		} else {
			return 'night';
		}
	};
	const moment = dayOrNight();

	const getDate = () => {
		const date = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
		let today = new Date().getDay();
		let newDate = ['TMR'];
		for (let i = 2; i < 6; i++) {
			newDate.push(date[today + i]);
		}
		return newDate;
	};
	const date = getDate();

	return (
		<div className='mb-6'>
			<div className='text-base font-normal mb-5'>
				<span>Week forecast</span>
			</div>
			<div className='flex justify-between'>
				<DayForcestCard date={date[0]} descriptionCode={descriptionCode[0]} temp={temp[0]} moment={moment} />
				<DayForcestCard date={date[1]} descriptionCode={descriptionCode[1]} temp={temp[1]} moment={moment} />
				<DayForcestCard date={date[2]} descriptionCode={descriptionCode[2]} temp={temp[2]} moment={moment} />
				<DayForcestCard date={date[3]} descriptionCode={descriptionCode[3]} temp={temp[3]} moment={moment} />
				<DayForcestCard date={date[4]} descriptionCode={descriptionCode[4]} temp={temp[4]} moment={moment} />
			</div>
		</div>
	);
}
