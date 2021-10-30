import './ImageList.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ImageCard from './ImageCard';

const ImageList = (props) => {
	const images = props.images.map((image) => {
		return <ImageCard key={uuidv4()} image={image} />;
	});

	return <div className='image-list'>{images}</div>;
};

export default ImageList;
