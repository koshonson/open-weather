import '../styles/current.css';
import React from 'react';
import { getIcon } from './icons';
import Title from './generic/Title';
import TempBox from './generic/TempBox';
import IconBox from './generic/IconBox';
import InfoBox from './generic/InfoBox';

const Current = ({ data, units, switchUnits }) => {
	const weatherIcon = getIcon(data);
	const windIcon = {
		icon: getIcon('winddir'),
		dir: data.wind.deg
	};

	const infoBoxParams = [
		{ label: 'Humidity', value: data.humidity, units: '%' },
		{ label: 'Pressure', value: data.pressure, units: 'hPa' },
		{ label: 'Wind', value: data.wind.speed, units: 'm/s', icon: windIcon }
	];

	return (
		<div className="current-weather">
			<Title
				className="cw-main"
				title={`${data.name}, ${data.country}`}
				subtitle={data.weather.description}
				timestamp={data.ts}
			/>
			<TempBox
				className="cw-temp"
				tC={data.tC}
				tF={data.tF}
				units={units}
				switchUnits={switchUnits}
			/>
			<IconBox className="cw-icon" icon={weatherIcon} />
			<InfoBox className="cw-info" params={infoBoxParams} />
		</div>
	);
};

export default Current;
