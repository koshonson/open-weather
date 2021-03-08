import React from 'react';
import { getDayName, getMonthName, toDoubleDigit } from '../../util/date';

const DateDiv = ({ date, className }) => {
	const { H, M, D, d, m, y } = {
		H: toDoubleDigit(date.getHours()),
		M: toDoubleDigit(date.getMinutes()),
		D: getDayName(date.getDay()),
		d: date.getDate(),
		m: getMonthName(date.getMonth()),
		y: date.getFullYear()
	};

	return (
		<div className={className}>
			🕓
			<span style={{ margin: '0 6px' }}>{`${H}:${M}`}</span>
			📅
			<span style={{ margin: '0 3px' }}>{`${D}, ${m} ${d}, ${y}`}</span>
		</div>
	);
};

export default DateDiv;
