import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
	state = { lat: null, long: null, errorMessage: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	renderContent() {
		if (this.setState.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}
		if (!this.setState.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} long={this.state.long} />;
		}
		return <Spinner message='Please accept location request' />;
	}

	render() {
		return <div className='border red'>{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
