import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

const Button = () => {
	const [buttonOn, setButtonOn] = useState(false);

	return (
		<Switch
			checked={buttonOn}
			onChange={setButtonOn}
			className={`${
				buttonOn ? 'shadow-d-in' : 'shadow-d-out'
			} bg-bright-theme dark:bg-dark-theme flex items-center justify-center w-6 h-6 rounded-xl shadow-d-out`}
		>
			<div></div>
			<div></div>
		</Switch>
	);
};

export default Button;
