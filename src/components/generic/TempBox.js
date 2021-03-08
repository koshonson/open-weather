import React from 'react';

const TempBox = ({ className, tC, tF, units, switchUnits }) => {
	return (
		<div className={className}>
			<div className="value">{units === 'celsius' ? tC : tF}</div>
			<div className="unit" onClick={switchUnits}>
				{units === 'celsius' ? '° C' : '° F'}
			</div>
		</div>
	);
};

export default TempBox;
