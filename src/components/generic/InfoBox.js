import React from 'react';
import Parameter from './Parameter';

const InfoBox = ({ className, params }) => {
	const renderParams = () => {
		return params.map(({ label, value, units, icon }) => {
			return (
				<Parameter
					className="param"
					key={label}
					label={label}
					value={value}
					units={units}
					icon={icon}
				/>
			);
		});
	};

	return <div className={className}>{renderParams()}</div>;
};

export default InfoBox;
