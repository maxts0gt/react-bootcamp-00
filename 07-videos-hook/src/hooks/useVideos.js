import { useState, useEffect } from 'react';
import YouTube from '../api/YouTube';

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		search(defaultSearchTerm);
	}, []);

	const search = async (term) => {
		const response = await YouTube.get('/search', {
			params: {
				q: term,
			},
		});
		setVideos(response.data.items);
	};
	return [videos, search];
};

export default useVideos;
