import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 6WPj9mYbz78ZpB3pORSCZNfADiTqjF8jdFxAq1cG0fs',
	},
});
