export const availableLocations = [
	{
		id: 1,
		cityName: '宜蘭縣',
		locationName: '宜蘭',
		cityNameEn: 'Yilan County',
	},
	{ id: 2, cityName: '嘉義市', locationName: '嘉義', cityNameEn: 'Chiayi City' },
	{ id: 3, cityName: '屏東縣', locationName: '恆春', cityNameEn: 'Pingtung City' },
	{
		id: 4,
		cityName: '苗栗縣',
		locationName: '國一N142K', // 銅鑼鄉
		cityNameEn: 'Miaoli County',
	},
	{ id: 5, cityName: '雲林縣', locationName: '國一N234K', cityNameEn: 'Yunlin County' },
	{ id: 6, cityName: '臺東縣', locationName: '臺東', cityNameEn: 'Taitung County' },
	{ id: 7, cityName: '臺北市', locationName: '臺北', cityNameEn: 'Taipei City' },
	{ id: 8, cityName: '金門縣', locationName: '金門', cityNameEn: 'Kinmen County' },
	{ id: 9, cityName: '桃園市', locationName: '新屋', cityNameEn: 'Taoyuan City' },
	{ id: 10, cityName: '彰化縣', locationName: '彰師大', cityNameEn: 'Changhua County' },
	{
		id: 11,
		cityName: '嘉義縣',
		locationName: '國一N250K', // 大林鎮
		cityNameEn: 'Chiayi County',
	},
	{ id: 12, cityName: '高雄市', locationName: '高雄', cityNameEn: 'Kaohsiung City' },
	{ id: 13, cityName: '基隆市', locationName: '基隆', cityNameEn: 'Keelung City' },
	{ id: 14, cityName: '臺南市', locationName: '南區中心', cityNameEn: 'Tainan City' },
	{ id: 15, cityName: '南投縣', locationName: '日月潭', cityNameEn: 'Nantou County' },
	{ id: 16, cityName: '臺中市', locationName: '臺中', cityNameEn: 'Taichung City' },
	{ id: 17, cityName: '新竹縣', locationName: '新竹', cityNameEn: 'Hsinchu County' },
	{ id: 18, cityName: '新竹市', locationName: '新竹', cityNameEn: 'Hsinchu City' },
	{ id: 19, cityName: '花蓮縣', locationName: '花蓮', cityNameEn: 'Hualien County' },
	{ id: 20, cityName: '連江縣', locationName: '馬祖', cityNameEn: 'Lienchiang County' },
	{ id: 21, cityName: '澎湖縣', locationName: '澎湖', cityNameEn: 'Penghu County' },
	{ id: 22, cityName: '新北市', locationName: '板橋', cityNameEn: 'New TaipeiCity' },
];

export const findLocation = (cityName) => {
	return availableLocations.find((location) => location.cityName === cityName);
};
