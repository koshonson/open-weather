import React from 'react';

const LinkedMessage = ({ className, message, links }) => {
	const parseMessage = () => {
		const parsed = message.split(' ').reduce(
			(acc, part, i) => {
				if (part.slice(0, 2) === '$$') {
					const [name] = part.match(/\w+/);
					const { label, link } = links[name];
					if (acc.block) {
						acc.result.push(
							<span key={`${className}-${i - 1}`}>
								{acc.block.trim()}
							</span>
						);
						acc.block = '';
					}
					acc.result.push(
						<a href={link} key={`${className}-${i}`}>
							{label}
						</a>
					);
					return acc;
				} else {
					acc.block += ' ' + part;
					return acc;
				}
			},
			{ block: '', result: [] }
		);
		if (parsed.block)
			parsed.result.push(<span key="last">{parsed.block.trim()}</span>);
		return parsed.result;
	};

	return <div className={className}>{parseMessage()}</div>;
};

export default LinkedMessage;
