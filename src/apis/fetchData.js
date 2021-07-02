import key from '../secure/keys';

const baseURL = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/';

const fetchWeatherForecast = () => {
	let url = baseURL + `F-C0032-001?Authorization=${key.AUTHORIZATION_KEY}&locationName=臺北市`;
	const weatherForecastData = async () => {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	};
	// weatherForecastData().then((data) => setForecastData(data));
	return weatherForecastData().then((data) => {
		return data.records.location[0].weatherElement.reduce((acc, item) => {
			if (['Wx', 'PoP'].includes(item.elementName)) {
				acc[item.elementName] = item.time[0].parameter;
			}
			return acc;
		}, {});
	});
};

const fetchCurrentWeather = () => {
	let url = baseURL + `O-A0003-001?Authorization=${key.AUTHORIZATION_KEY}&locationName=臺北`;
	const currentWeatherData = async () => {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	};
	return currentWeatherData().then((data) => {
		const weatherData = data.records.location[0].weatherElement.reduce((acc, item) => {
			if (['WDSD', 'TEMP', 'HUMD', 'H_UVI'].includes(item.elementName)) {
				acc[item.elementName] = item.elementValue;
			}
			return acc;
		}, {});
		let obsTime = data.records.location[0].time.obsTime;
		return { ...weatherData, obsTime };
	});
};

export { fetchWeatherForecast, fetchCurrentWeather };
