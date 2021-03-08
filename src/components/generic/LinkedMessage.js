import React from 'react';

const LinkedMessage = ({ className, message, links }) => {
	// const regex = /\$\$\(.+\)/g;
	// const anchors = [...message.matchAll(regex)].map(match => {
	// 	return match[1];
	// });

	const parseMessage = () => {
		const regex = /\$\$\(\w+\)/g;
		return message.replace(regex, match => {
			const [name] = match.match(/\w+/);
			const { label, link } = links[name];
			return `<a href=${link}>${label}</a>`;
		});
	};

	return (
		<div
			dangerouslySetInnerHTML={{ __html: parseMessage() }}
			className={className}
		></div>
	);
};

export default LinkedMessage;
