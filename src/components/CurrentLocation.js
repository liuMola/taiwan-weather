import { Switch } from '@headlessui/react';

function CurrentLocation({ currentLocation, setCurrentLocation }) {
	return (
		<Switch
			checked={currentLocation}
			onChange={setCurrentLocation}
			className={`${currentLocation ? 'bg-[#59a3d1]' : 'bg-gray-200'} relative inline-flex items-center h-5 rounded-full w-10
			  ml-auto mr-0 outline-none`}
		>
			<span className={`${currentLocation ? 'translate-x-6' : 'translate-x-1'} inline-block w-3 h-3 transform bg-white rounded-full`} />
		</Switch>
	);
}

export default CurrentLocation;
