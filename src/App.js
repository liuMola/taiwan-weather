import { ReactComponent as AirFlowIcon } from './images/airFlow.svg';
import { ReactComponent as DayCloudyIcon } from './images/day-cloudy.svg';
import { ReactComponent as LoadingIcon } from './images/loading.svg';
import { ReactComponent as RainIcon } from './images/rain.svg';
import { ReactComponent as RefreshIcon } from './images/refresh.svg';

function App() {
	return (
		<>
			<div className='bg-[#ededed] h-full flex items-center justify-center'>
				<div className='weather-card relative min-w-[360px] bg-[#f9f9f9] box-border py-[30px] px-[15px]'>
					<div className='location text-[28px] text-[#212121] mb-5'>Taipei</div>
					<div className='description text-[16px] text-[#828282] mb-8'>Cloudy</div>
					<div className='current-weather flex justify-between items-center mb-8'>
						<div className='temperature flex text-[#757575] text-8xl font-light'>
							<span>23</span>
							<div className='font-normal  text-[42px]'></div>
						</div>
						<DayCloudyIcon />
					</div>
					<div className='airflow flex items-center text-base font-light text-[#828282] mb-5'>
						<svg width='120' height='92' xmlns='http://www.w3.org/2000/svg'>
							<g stroke-width='5' fill='none' fill-rule='evenodd' stroke-linecap='round'>
								<path
									d='M3 61.573h65.494c7.459 0 13.506 6.044 13.506 13.5h0c0 7.455-6.047 13.5-13.506 13.5M82.324 2.573c4.792 0 8.676 3.805 8.676 8.5h0c0 4.694-3.884 8.5-8.676 8.5H3'
									stroke='#A5A9AA'
								/>
								<path
									d='M80 42.573h30.488A6.512 6.512 0 01117 49.085h0a6.512 6.512 0 01-6.512 6.488'
									stroke='#B9C1C6'
								/>
								<path d='M45 41.573h20' stroke='#A5A9AA' />
								<path d='M3 41.573h27' stroke='#B9C1C6' fill='#D8D8D8' />
							</g>
						</svg>
						<span>23 m/h</span>
					</div>
					<div className='rain flex items-center text-base font-light text-[#828282]'>
						<RainIcon />
						<span>48%</span>
					</div>
					<div className='refresh absolute right-4 bottom-4 text-xs inline-flex items-end text-[#828282]'>
						<span>Last updated: 12:03 AM</span>
						<RefreshIcon />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
