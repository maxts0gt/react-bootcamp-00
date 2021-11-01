import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const onTitleClick = (index) => {
		setActiveIndex(index);
	};

	const renderedItems = items.map((item, index) => {
		const active = index === activeIndex ? 'active' : '';

		return (
			<React.Fragment key={uuidv4()}>
				<div className={`title ${active}`} onClick={() => onTitleClick(index)}>
					<i className='dropdown icon'></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});

	return <div className='ui styled accordion'>{renderedItems}</div>;
};

export default Accordion;
