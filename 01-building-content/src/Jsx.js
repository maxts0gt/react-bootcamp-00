import React from 'react';

const jsx = () => {
	const buttonText = 'Click me!';
	const currentTime = () => new Date().toLocaleTimeString();
	console.log(currentTime);
	return (
		<div>
			<h1>Current Time</h1>
			<p>{currentTime()}</p>
			<label className='label' htmlFor='name'>
				Enter name:
			</label>
			<input id='name' type='text' />
			<button style={{ backgroundColor: 'teal', color: 'white' }}> {buttonText}</button>
		</div>
	);
};

export default jsx;
