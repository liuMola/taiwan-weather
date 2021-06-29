//zustand store
import create from 'zustand';

const useStore = create((set) => ({
	weatherData: {
		locationName: '臺北',
		description: 'Cloudy',
		windSpeed: 1.1,
		temperature: 32,
		pop: 48.3,
		observationTime: '2020-01-22 22:02:10',
		isLoading: true,
	},
	// increasePopulation: () => set((state) => ({ weatherData: state.bearweatherDatas + 1 })),
}));

export default useStore;
