export const availableLocations = [
	{
		id: 1,
		cityName: '宜蘭縣',
		locationName: '宜蘭',
	},
	{ id: 2, cityName: '嘉義市', locationName: '嘉義' },
	{ id: 3, cityName: '屏東縣', locationName: '恆春' },
	{
		id: 4,
		cityName: '苗栗縣',
		locationName: '國一N142K', // 銅鑼鄉
	},
	{ id: 5, cityName: '雲林縣', locationName: '國一N234K' },
	{ id: 6, cityName: '臺東縣', locationName: '臺東' },
	{ id: 7, cityName: '臺北市', locationName: '臺北' },
	{ id: 8, cityName: '金門縣', locationName: '金門' },
	{ id: 9, cityName: '桃園市', locationName: '新屋' },
	{ id: 10, cityName: '彰化縣', locationName: '彰師大' },
	{
		id: 11,
		cityName: '嘉義縣',
		locationName: '國一N250K', // 大林鎮
	},
	{ id: 12, cityName: '高雄市', locationName: '高雄' },
	{ id: 13, cityName: '基隆市', locationName: '基隆' },
	{ id: 14, cityName: '臺南市', locationName: '南區中心' },
	{ id: 15, cityName: '南投縣', locationName: '日月潭' },
	{ id: 16, cityName: '臺中市', locationName: '臺中' },
	{ id: 17, cityName: '新竹縣', locationName: '新竹' },
	{ id: 18, cityName: '新竹市', locationName: '新竹' },
	{ id: 19, cityName: '花蓮縣', locationName: '花蓮' },
	{ id: 20, cityName: '連江縣', locationName: '馬祖' },
	{ id: 21, cityName: '澎湖縣', locationName: '澎湖' },
	{ id: 22, cityName: '新北市', locationName: '板橋' },
];

export const findLocation = (cityName) => {
	return availableLocations.find((location) => location.cityName === cityName);
};
