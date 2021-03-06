import '../styles/current.css';
import React from 'react';
import { getIcon } from './icons';

const Current = () => {
	const WeatherIcon = getIcon(201);

	return (
		<div className="current-weather">
			<div className="cw-main">
				<div className="cw-main-date">Saturday, June 3 2021</div>
				<div className="cw-main-title">Salt Lake City, US</div>
				<div className="cw-main-desc">"raining cats and dogs"</div>
			</div>
			<div className="cw-temp">
				<div className="cw-temp-value">7.5</div>
				<div className="cw-temp-unit">° C</div>
			</div>
			<div className="cw-icon">
				<WeatherIcon className="cw-icon-img" />
			</div>
			<div className="cw-info">
				<div>Wind: 8 km/h</div>
				<div>Humidity: 90 %</div>
				<div>Pressure: 1001 hPa</div>
			</div>
		</div>
	);
};

export default Current;
