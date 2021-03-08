import React from 'react';

const Parameter = ({ className, label, value, units, icon }) => {
	const renderIcon = () => {
		if (icon) {
			const Icon = icon.icon;
			return (
				<Icon
					className="icon"
					style={{ transform: `rotate(${icon.dir + 180}deg)` }}
				/>
			);
		}
	};

	return (
		<div className={className}>
			<span className="label">{label}: </span>
			<span className="value">{value} </span>
			<span className="units">{units}</span>
			{renderIcon()}
		</div>
	);
};

export default Parameter;
