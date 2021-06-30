//zustand store
import create from 'zustand';

const useStore = create((set) => ({
	//including windspeed, temperature, UV index, and observation time
	weatherData: {
		windSpeed: 1.1,
		temperature: 32,
		uvIndex: 3,
		observationTime: '2020-01-22 22:02:10',
	},
	//including POP, description, and city name
	indexData: {
		locationName: '臺北市',
		description: 'Cloudy',
		pop: 33,
	},

	setWeatherData: (data) =>
		set((state) => ({
			weatherData: {
				windSpeed: data.records.location[0].weatherElement[2].elementValue,
				temperature: data.records.location[0].weatherElement[3].elementValue,
				uvIndex: data.records.location[0].weatherElement[13].elementValue,
				observationTime: data.records.location[0].time.obsTime,
			},
		})),

	setIndexData: (data) =>
		set((state) => ({
			indexData: {
				locationName: '臺北市',
				description: 'Cloudy',
				pop: 33,
			},
		})),
}));

export default useStore;
