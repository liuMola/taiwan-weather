import React from 'react';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component';
import { findLocation } from '../utils/helper';
import useStore from '../store/store';

const LottieFile = loadable(() => import('./LottieFile'), {
	fallback: <div>...</div>,
});

const settingClick = () => {
	const main = document.getElementById('main');
	main.classList.toggle('settingOpen');
};

export default function Header() {
	const cityName = useStore((state) => state.location.cityName);

	return (
		<>
			<div className='relative top-0 mt-2 mb-2 py-1 pl-3 pr-1 w-full'>
				<div className='flex justify-between items-center w-full'>
					<div className='flex flex-col items-start'>
						<span className='text-xs tracking-wider font-thin'>Taiwan</span>
						<span className='text-[26px]'>{findLocation(cityName).cityNameEn}</span>
					</div>
					<Link to='/setting'>
						<div className='white-glass flex items-center justify-center w-8 h-8 rounded-lg hover:cursor-pointer' onClick={settingClick}>
							<LottieFile styleName={'w-6/12'} data={'settingIcon'} />
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}
