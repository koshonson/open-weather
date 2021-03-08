import React from 'react';

const IconBox = ({ className, icon: Icon }) => {
	return (
		<div className={className}>
			<Icon className="icon-img" />
		</div>
	);
};

export default IconBox;
