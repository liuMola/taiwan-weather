import React from 'react';
import { Link } from 'react-router-dom';
import { findLocation } from '../utils/helper';
import useStore from '../store/store';

export default function SettingButton({ currentLocation, location, unit }) {
	const isLoading = useStore((state) => state.isLoading);
	const GPSLocation = useStore((state) => state.GPSLocation);
	const setStoreLocation = useStore((state) => state.setLocation);
	const setStoreUnit = useStore((state) => state.setUnit);
	const applyChangeButton = () => {
		setStoreUnit(unit);
		const settingClick = () => {
			const main = document.getElementById('main');
			main.classList.toggle('settingOpen');
		};
		settingClick();
		if (currentLocation && GPSLocation) {
			setStoreLocation(findLocation(GPSLocation));
		} else {
			setStoreLocation(location);
		}
	};

	return (
		<>
			<Link to={isLoading ? '#' : '/'}>
				<div className='absolute bottom-2 right-0'>
					<button
						type='button'
						onClick={applyChangeButton}
						className={`flex w-20 h-9 bg-[#59A3D1] hover:bg-[#35769e] text-bright justify-center items-center rounded-xl border-[0.5px] border-blue-200 cursor-pointer transition duration-200 ease-in-out 
							${currentLocation && !GPSLocation ? 'opacity-30 cursor-not-allowed hover:bg-[#59A3D1]' : null}`}
						disabled={currentLocation && !GPSLocation}
					>
						<span>Apply</span>
					</button>
				</div>
			</Link>
		</>
	);
}
