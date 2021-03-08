import React from 'react';

const Message = ({ message }) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				paddingTop: '40px',
				paddingBottom: '20px'
			}}
		>
			{message}
		</div>
	);
};

export default Message;
