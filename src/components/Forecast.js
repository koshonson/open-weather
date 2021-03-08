import '../styles/forecast.css';
import React from 'react';
import Daybox from './generic/Daybox';

const Forecast = ({ data, units, switchUnits }) => {
	const renderDayboxes = days => {
		return days.map((day, i) => {
			return (
				<Daybox
					className="forecast-daybox"
					key={i}
					id={i}
					data={day}
					units={units}
					switchUnits={switchUnits}
				/>
			);
		});
	};

	return <div className="forecast">{renderDayboxes(data)}</div>;
};

export default Forecast;
