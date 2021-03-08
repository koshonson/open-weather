import React from 'react';

const LinkedMessage = ({ className, message, links }) => {
	const parseMessage = () => {
		return message.split(' ').map((part, i) => {
			if (part.slice(0, 2) == '$$') {
				const [name] = part.match(/\w+/);
				const { label, link } = links[name];
				return (
					<a href={link} key={i}>
						{label}
					</a>
				);
			}
			return <span key={i}>{part}</span>;
		});
	};

	return <div className={className}>{parseMessage()}</div>;
};

export default LinkedMessage;
