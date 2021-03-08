import React from 'react';
import DateDiv from './DateDiv';

const Title = ({
	className,
	title,
	subtitle,
	timestamp,
	options = { date: true, subtitle: true }
}) => {
	const renderDate = (enabled = true) => {
		if (enabled) {
			return <DateDiv className="date" date={timestamp} />;
		}
	};

	const renderSubtitle = (enabled = true) => {
		if (enabled) {
			return <div className="subtitle">"{subtitle}"</div>;
		}
	};

	return (
		<div className={className}>
			{renderDate(options.date)}
			<div className="title">{title}</div>
			{renderSubtitle(options.subtitle)}
		</div>
	);
};

export default Title;
