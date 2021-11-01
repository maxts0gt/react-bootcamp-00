import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Search = () => {
	const [term, setTerm] = useState('programming');
	const [results, setResults] = useState([]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: term,
				},
			});
			setResults(data.query.search);
		};

		if (term && !results.length) {
			search();
		} else {
			const timeOutId = setTimeout(() => {
				if (term) {
					search();
				}
			}, 1000);

			return () => {
				clearTimeout(timeOutId);
			};
		}
	}, [term]);

	const renderedResults = results.map((result) => {
		return (
			<div key={uuidv4()} className='item'>
				<div className='right floated content'>
					<a href={`https://en.wikipedia.org?curid=${result.pageid}`} className='ui button'>
						Go
					</a>
				</div>
				<div className='content'>
					<div className='header'>{result.title}</div>
					<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className='ui form'>
				<div className='field'>
					<label htmlFor=''>Enter Search Term</label>
					<input type='text' value={term} onChange={(e) => setTerm(e.target.value)} className='input' />
				</div>
			</div>
			<div className='ui celled list'>{renderedResults}</div>
		</div>
	);
};

export default Search;
