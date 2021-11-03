import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'No Scrubs', duration: '4:05' },
		{ title: 'All star', duration: '3:15' },
		{ title: 'Macaerna', duration: '2:30' },
		{ title: 'I want it that way', duration: '1:05' },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
