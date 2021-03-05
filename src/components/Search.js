import React, { useState } from 'react';

const Search = ({ setSearchTerm }) => {
	const [term, setTerm] = useState('');

	const onFormSubmit = e => {
		e.preventDefault();
		setSearchTerm(term);
	};

	const onInputChange = e => {
		const { value } = e.target;
		setTerm(value);
	};

	return (
		<div>
			<form onSubmit={onFormSubmit}>
				<input type="text" onChange={onInputChange} value={term}></input>
				<button type="submit">SUBMIT</button>
			</form>
		</div>
	);
};

export default Search;
