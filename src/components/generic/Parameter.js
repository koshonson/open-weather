import React from 'react';

const Parameter = ({ classNames, label, value, unit }) => {
	const { cnComponent, cnLabel, cnValue, cnUnit } = classNames || {};

	return (
		<div className={cnComponent}>
			<span className={cnLabel}>{label}: </span>
			<span className={cnValue}>{value} </span>
			<span className={cnUnit}>{unit}</span>
		</div>
	);
};

export default Parameter;
