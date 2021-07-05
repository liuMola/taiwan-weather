//zustand store
import create from 'zustand';

const useStore = create((set) => ({
	weatherData: {
		locationName: '臺北市',
		description: 'Cloudy',
		pop: 33,
		windSpeed: 1.1,
		temperature: 32,
		uvIndex: 3,
		humidity: 10,
		observationTime: '2020-01-22 22:02:10',
		isLoading: false,
	},

	setWeatherData: (data) =>
		set((state) => ({
			weatherData: {
				locationName: '臺北市',
				description: data[1].Wx.parameterName,
				pop: data[1].PoP.parameterName,
				windSpeed: data[0].WDSD,
				temperature: data[0].TEMP,
				uvIndex: data[0].H_UVI,
				humidity: data[0].HUMD,
				observationTime: data[0].obsTime,
				isLoading: true,
			},
		})),
}));

export default useStore;
