import React from 'react';

const Button = (props) => {
	return (
		<div className='relative shadow-b-out dark:shadow-d-out bg-bright-theme dark:bg-dark-theme flex items-center justify-center w-8 h-8 rounded-lg hover:cursor-pointer'>
			<div className='relative flex items-center justify-center'>{props.children}</div>
		</div>
	);
};

export default Button;
