import React, { Suspense, lazy } from 'react';

export default function DayForcestCard({ date, descriptionCode, temp, moment }) {
	const WeatherLottie = lazy(() => import('./WeatherLottie'));

	return (
		<div className='white-glass py-4 px-3 rounded-xl'>
			<div className='flex flex-col items-center font-light text-[12px] text-dark'>
				<div>{date}</div>
				<div className='mt-2 mb-3'>
					<div className='w-7 h-7 flex justify-center items-center'>
						<Suspense fallback={<div>...</div>}>
							<WeatherLottie descriptionCode={descriptionCode} moment={moment} />
						</Suspense>
					</div>
				</div>
				<div className='flex'>
					<div>{temp}</div>
					<div>°</div>
				</div>
			</div>
		</div>
	);
}
