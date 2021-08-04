export const availableLocations = [
	{ id: 1, cityName: '基隆市', locationName: '基隆', cityNameEn: 'Keelung City' },
	{ id: 2, cityName: '臺北市', locationName: '臺北', cityNameEn: 'Taipei City' },
	{ id: 3, cityName: '新北市', locationName: '板橋', cityNameEn: 'New Taipei City' },
	{ id: 4, cityName: '桃園市', locationName: '新屋', cityNameEn: 'Taoyuan City' },
	{ id: 5, cityName: '新竹市', locationName: '新竹', cityNameEn: 'Hsinchu City' },
	{ id: 6, cityName: '新竹縣', locationName: '新竹', cityNameEn: 'Hsinchu County' },
	{ id: 7, cityName: '苗栗縣', locationName: '國一N142K', cityNameEn: 'Miaoli County' },
	{ id: 8, cityName: '臺中市', locationName: '臺中', cityNameEn: 'Taichung City' },
	{ id: 9, cityName: '彰化縣', locationName: '彰師大', cityNameEn: 'Changhua County' },
	{ id: 10, cityName: '南投縣', locationName: '日月潭', cityNameEn: 'Nantou County' },
	{ id: 11, cityName: '雲林縣', locationName: '國一N234K', cityNameEn: 'Yunlin County' },
	{ id: 12, cityName: '嘉義市', locationName: '嘉義', cityNameEn: 'Chiayi City' },
	{ id: 13, cityName: '嘉義縣', locationName: '國一N250K', cityNameEn: 'Chiayi County' },
	{ id: 14, cityName: '臺南市', locationName: '南區中心', cityNameEn: 'Tainan City' },
	{ id: 15, cityName: '高雄市', locationName: '高雄', cityNameEn: 'Kaohsiung City' },
	{ id: 16, cityName: '屏東縣', locationName: '恆春', cityNameEn: 'Pingtung City' },
	{ id: 17, cityName: '宜蘭縣', locationName: '宜蘭', cityNameEn: 'Yilan County' },
	{ id: 18, cityName: '花蓮縣', locationName: '花蓮', cityNameEn: 'Hualien County' },
	{ id: 19, cityName: '臺東縣', locationName: '臺東', cityNameEn: 'Taitung County' },
	{ id: 20, cityName: '澎湖縣', locationName: '澎湖', cityNameEn: 'Penghu County' },
	{ id: 21, cityName: '金門縣', locationName: '金門', cityNameEn: 'Kinmen County' },
	{ id: 22, cityName: '連江縣', locationName: '馬祖', cityNameEn: 'Lienchiang County' },
];

export const findLocation = (cityName) => {
	return availableLocations.find((location) => location.cityName === cityName);
};

const weatherTypes = {
	isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
	isClear: [1],
	isCloudyFog: [25, 26, 27, 28],
	isCloudy: [2, 3, 4, 5, 6, 7],
	isFog: [24],
	isPartiallyClearWithRain: [8, 9, 10, 11, 12, 13, 14, 19, 20, 29, 30, 31, 32, 38, 39],
	isSnowing: [23, 37, 42],
};

const weatherLottie = {
	day: {
		isThunderstorm: 'thunderstrom',
		isClear: 'clear',
		isCloudyFog: 'cloudyFog',
		isCloudy: 'clearCloudy',
		isFog: 'clearFog',
		isPartiallyClearWithRain: 'rain',
		isSnowing: 'clearSnow',
	},
	night: {
		isThunderstorm: 'thunderstrom',
		isClear: 'clear',
		isCloudyFog: 'cloudyFog',
		isCloudy: 'clearCloudy',
		isFog: 'clearFog',
		isPartiallyClearWithRain: 'rain',
		isSnowing: 'clearSnow',
	},
};

export const findWeather = (descriptionCode, moment) => {
	const weatherCode2Type = (weatherCode) => {
		const [weatherType] = Object.entries(weatherTypes).find(([weatherType, weatherCodes]) => weatherCodes.includes(Number(weatherCode))) || [];
		return weatherType;
	};
	const weatherType = weatherCode2Type(descriptionCode);

	return weatherLottie[moment][weatherType];
};
