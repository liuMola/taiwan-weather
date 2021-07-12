import React, { Fragment, useState } from 'react';

import { Listbox, Transition } from '@headlessui/react';

import { availableLocations } from '../utils/helper';

const DropdownMenu = () => {
	const [selectedLocation, setSelectedLocation] = useState(availableLocations);

	const testing = () => {
		console.log('change', selectedLocation);
	};

	return (
		<div className='w-full scrollbar'>
			<Listbox value={availableLocations} onChange={(setSelectedLocation, testing)}>
				<div className='relative mt-1'>
					<Listbox.Button className='relative w-full h-8 py-2 pl-3 pr-10 text-left flex items-center bg-white bg-opacity-70 rounded-xl cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm'>
						<span className='block truncate text-xs'>City</span>
						<span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
							<svg xmlns='http://www.w3.org/2000/svg' className='h-3 w-3' viewBox='0 0 20 20' fill='currentColor'>
								<path
									fillRule='evenodd'
									d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
									clipRule='evenodd'
								/>
							</svg>
						</span>
					</Listbox.Button>
					<Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
						<Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base rounded-md bg-white bg-opacity-70 scrollbar max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
							{availableLocations.map((location, index) => (
								<Listbox.Option
									key={index}
									className={({ active }) =>
										`${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
									}
									value={location.cityName}
								>
									{({ selected, active }) => (
										<>
											<span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>
												{location.cityNameEn}
											</span>
											{selected ? (
												<span
													className={`${active ? 'text-amber-600' : 'text-amber-600'}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
												>
													<svg xmlns='http://www.w3.org/2000/svg' class='h-3 w-3' viewBox='0 0 20 20' fill='currentColor'>
														<path
															fill-rule='evenodd'
															d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
															clip-rule='evenodd'
														/>
													</svg>
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
};

export default DropdownMenu;
