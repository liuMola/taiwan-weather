import { Switch } from '@headlessui/react';

function DarkorBright({ dark, setDark }) {
	return (
		<Switch
			checked={dark}
			onChange={setDark}
			className={`${dark ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex items-center h-6 rounded-full w-11
			  ml-auto mr-0`}
		>
			<span
				className={`${
					dark ? 'translate-x-6' : 'translate-x-1'
				} inline-block w-4 h-4 transform bg-white rounded-full`}
			/>
		</Switch>
	);
}

export default DarkorBright;
