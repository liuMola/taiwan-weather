import React from 'react';
import { Switch } from '@headlessui/react';

import { fetchCityName } from '../apis/getGeoData';
//store
import useStore from '../store/store';
//deal with get current location logic
function CurrentLocation({ currentLocation, setCurrentLocation }) {
	const setGPSLocation = useStore((state) => state.setGPSLocation);
	const GPSLocation = useStore((state) => state.GPSLocation);

	const fetchGPSLocation = () => {
		if (!GPSLocation) {
			fetchCityName().then((data) => {
				setGPSLocation(data);
			});
			return;
		}
	};

	return (
		<Switch.Group>
			<div className='flex items-center' onClick={fetchGPSLocation}>
				<Switch.Label>Use current location</Switch.Label>
				<Switch
					checked={currentLocation}
					onChange={setCurrentLocation}
					className={`${currentLocation ? 'bg-[#59a3d1]' : 'bg-gray-200'} relative inline-flex items-center h-5 rounded-full w-10
			  ml-auto mr-0 outline-none`}
				>
					<span className={`${currentLocation ? 'translate-x-6' : 'translate-x-1'} inline-block w-3 h-3 transform bg-white rounded-full`} />
				</Switch>
			</div>
		</Switch.Group>
	);
}

export default CurrentLocation;
