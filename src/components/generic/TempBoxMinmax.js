import React from 'react';

const TempBoxMinmax = ({ className, temp, units, switchUnits }) => {
	const { tminC, tmaxC, tminF, tmaxF } = temp;

	return (
		<div className="temp-box">
			<div className="min">{units === 'celsius' ? tminC : tminF}</div>
			<span style={{ margin: '0 3px' }}>/</span>
			<div className="max">{units === 'celsius' ? tmaxC : tmaxF}</div>
			<div className="units" onClick={switchUnits}>
				{units === 'celsius' ? '° C' : '° F'}
			</div>
		</div>
	);
};

export default TempBoxMinmax;
