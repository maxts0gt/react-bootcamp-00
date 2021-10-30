import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ImageList = (props) => {
	const images = props.images.map(({ description, urls }) => {
		return <img key={uuidv4()} src={urls.regular} alt={description} />;
	});

	return <div>{images}</div>;
};

export default ImageList;
