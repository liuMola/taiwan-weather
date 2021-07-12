import React from 'react';

const types = {
	1: 'Clear',
	2: 'Mostly clear',
	3: 'Partly clear',
	4: 'Partly cloudy',
	5: 'Mostly cloudy',
	6: 'Mostly cloudy',
	7: 'Cloudy',
	8: 'Scattered showers',
	9: 'Cloudy scattered showers',
	10: 'Cloudy scattered showers',
	11: 'Rainy',
	12: 'Mostly cloudy',
	13: 'Rainy',
	14: 'Rainy',
	15: 'Thunderstorm',
	16: 'Occasional thundershowers',
	17: 'Occasional thundershowers',
	18: 'Thundershowers',
	19: 'Local showers',
	20: 'Occasional showers',
	21: 'Thunderstorm',
	22: 'Thundershowers',
	23: 'Occasional snow',
	24: 'Clear foggy',
	25: 'Scattered foggy',
	26: 'Scattered foggy',
	27: 'Foggy',
	28: 'Cloudy with fog',
	29: 'Cloudy local rainy',
	30: 'Local rain',
	31: 'Scattered rainy',
	32: 'Foggy cloudy',
	33: 'Thunderstorm',
	34: 'Thunderstorm',
	35: 'Foggy thundershowers',
	36: 'Foggy thundershowers',
	37: 'Scattered rainy',
	38: 'Occasional foggy rainy',
	39: 'Foggy rainy',
	41: 'Foggy thunderstorms',
	42: 'Snow',
};

const DescriptionCode = ({ desCode }) => {
	return (
		<>
			<div className='max-w-[105px] whitespace-normal'>{types[desCode]}</div>
		</>
	);
};

export default DescriptionCode;
