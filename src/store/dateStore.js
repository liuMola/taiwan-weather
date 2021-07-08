//zustand store
import create from 'zustand';

const useDateStore = create((set) => ({
	date: {
		locationName: '臺北市',
		today: '2021-07-07',
		initialDate: '2021-07-08',
		endDate: '2021-07-12',
	},

	setDate: (data) =>
		set((state) => ({
			date: {
				locationName: '臺北市',
				today: '2021-07-07',
				initialDate: '2021-07-08',
				endDate: '2021-07-12',
			},
		})),
}));

export default useDateStore;
