import React from 'react';

const Parameter = ({ className, label, value, units }) => {
	return (
		<div className={className}>
			<span className="label">{label}: </span>
			<span className="value">{value} </span>
			<span className="units">{units}</span>
		</div>
	);
};

export default Parameter;
