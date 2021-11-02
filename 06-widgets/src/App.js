import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
	{
		title: 'What is React?',
		content: 'It is JS framework',
	},
	{
		title: 'Why use React?',
		content: 'It makes web dynamic',
	},
	{
		title: 'How do you use React?',
		content: 'By working your ass off!',
	},
];

const options = [
	{
		label: 'The Color Red',
		value: 'red',
	},
	{
		label: 'The Color Blue',
		value: 'blue',
	},
	{
		label: 'The Color Green',
		value: 'green',
	},
];

const App = () => {
	const [selected, setSelected] = useState(options[0]);

	return (
		<div>
			<Header />
			<Route path='/'>
				<Accordion items={items} />
			</Route>
			<Route path='/list'>
				<Search />
			</Route>
			<Route path='/dropdown'>
				<Dropdown label='Select a color' options={options} selected={selected} onSelectedChange={setSelected} />
			</Route>
			<Route path='/translate'>
				<Translate />
			</Route>
		</div>
	);
};

export default App;
