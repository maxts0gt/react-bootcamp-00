import axios from 'axios';

const KEY = 'GETYOUROWNAPI';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: 'AIzaSyBlQWTpXGbS1gUE1BwXQrI83eV2uyF1JpM',
	},
});
