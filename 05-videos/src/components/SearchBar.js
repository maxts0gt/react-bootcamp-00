import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onChange = (event) => {
		this.setState({ term: event.target.value });
	};

	onSubmit = (event) => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.term);
		//Todo makesure we call back from parent
	};

	render() {
		return (
			<div className='search-bar ui segment'>
				<form onSubmit={this.onSubmit} className='ui form'>
					<div className='field'>
						<label htmlFor=''>Video Search </label>
						<input type='text' value={this.state.term} onChange={this.onChange} />
					</div>
				</form>
			</div>
		);
	}
}
export default SearchBar;

// AIzaSyBlQWTpXGbS1gUE1BwXQrI83eV2uyF1JpM;
