import '../styles/search.css';
import React, { useState } from 'react';

const Search = ({ setSearchTerm }) => {
	const [term, setTerm] = useState('');

	const onFormSubmit = e => {
		e.preventDefault();
		setSearchTerm(term);
		setTerm('');
	};

	const onInputChange = e => {
		const { value } = e.target;
		setTerm(value);
	};

	return (
		<div className="search-bar">
			<form className="search-form" onSubmit={onFormSubmit}>
				<input
					type="text"
					className="term-input"
					value={term}
					onChange={onInputChange}
				></input>
				<button type="submit" className="button">
					SEARCH
				</button>
			</form>
		</div>
	);
};

export default Search;
