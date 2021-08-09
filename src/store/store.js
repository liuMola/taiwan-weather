import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(
	devtools((set) => ({
		weatherData: {
			windSpeed: 1.1,
			temperature: 32,
			dayHighTemp: 35,
			dayLowTemp: 26,
			uvIndex: 3,
			humidity: 0.54,
			observationTime: '2020-01-22 22:02:10',
			description: 'Cloudy',
			weatherDesCode: 1,
			pop: 33,
			weekForecastCode: [23, 23, 23, 23, 23],
			weekForecastTemp: [25, 32, 30, 28, 20],
			sunriseTime: '05:31',
			sunsetTime: '18:23',
		},
		location: {
			cityName: '臺北市',
			locationName: '臺北',
		},
		isLoading: false,
		unit: 'c',
		GPSLocation: '',
		setWeatherData: (data) =>
			set(() => ({
				weatherData: {
					windSpeed: data[0].WDSD,
					temperature: data[0].TEMP,
					dayHighTemp: data[0].D_TX,
					dayLowTemp: data[0].D_TN,
					uvIndex: data[0].H_UVI,
					humidity: data[0].HUMD,
					observationTime: data[0].obsTime,
					description: data[1].popNWx.Wx.parameterName,
					weatherDesCode: data[1].popNWx.Wx.parameterValue,
					pop: data[1].popNWx.PoP.parameterName,
					weekForecastCode: data[2].wxResult,
					weekForecastTemp: data[2].tempResult,
					sunriseTime: data[3].reiseNSetTime.日出時刻,
					sunsetTime: data[3].reiseNSetTime.日沒時刻,
				},
			})),
		setLoading: (condition) => set(() => ({ isLoading: condition })),
		setUnit: (unit) => set({ unit: unit }),
		setLocation: (location) =>
			set({
				location: {
					cityName: location.cityName,
					locationName: location.locationName,
				},
			}),
		setGPSLocation: (GPSLocation) => set({ GPSLocation: GPSLocation }),
	}))
);

export default useStore;
