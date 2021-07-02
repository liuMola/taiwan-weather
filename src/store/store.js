//zustand store
import create from 'zustand';

const useStore = create((set) => ({
	//including windspeed, temperature, UV index, and observation time
	currentWeatherData: {
		windSpeed: 1.1,
		temperature: 32,
		uvIndex: 3,
		humidity: 10,
		observationTime: '2020-01-22 22:02:10',
	},
	//including POP, description, and city name
	forecastData: {
		locationName: '臺北市',
		description: 'Cloudy',
		pop: 33,
	},

	setCurrentWeatherData: (data) =>
		set((state) => ({
			currentWeatherData: {
				windSpeed: data.WDSD,
				temperature: data.TEMP,
				uvIndex: data.H_UVI,
				humidity: data.HUMD,
				observationTime: data.obsTime,
			},
		})),

	setForecastData: (data) =>
		set((state) => ({
			forecastData: {
				locationName: '臺北市',
				description: data.Wx.parameterName,
				pop: data.PoP.parameterName,
			},
		})),
}));

export default useStore;
