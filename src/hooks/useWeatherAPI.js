import { useEffect } from 'react';
//store
import useStore from '../store/store';
//fetch function
import { fetchWeatherForecast, fetchCurrentWeather, fetchWeekForecast, fetchSunriseNset } from '../apis/fetchData';

const useWeatherApi = ({ locationName, cityName }) => {
	const setWeatherData = useStore((state) => state.setWeatherData);
	const setLoading = useStore((state) => state.setLoading);

	useEffect(() => {
		setLoading({ isLoading: true });

		const fetchData = async () => {
			const data = await Promise.all([
				fetchCurrentWeather({ cityName }),
				fetchWeatherForecast({ locationName }),
				fetchWeekForecast({ locationName }),
				fetchSunriseNset({ locationName }),
			]);
			return data;
		};
		fetchData().then((data) => setWeatherData(data));

		setLoading({ isLoading: false });
	}, []);

	return test;
};

export default useWeatherApi;
