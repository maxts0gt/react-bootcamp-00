import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class LanguageSelector extends React.Component {
	static contextType = LanguageContext;
	render() {
		return (
			<div>
				Select a language:
				<i
					className='flag us'
					onClick={() => this.context.onLanguageChange('english')}
				/>
				<i
					className='flag mn'
					onClick={() => this.context.onLanguageChange('mongolian')}
				/>
			</div>
		);
	}
}
