import React from 'react';
import { getIcon } from '../icons/';
import IconBox from './IconBox';
import TempBoxMinmax from './TempBoxMinmax';
import Parameter from './Parameter';

const WindIcon = getIcon('winddir');

const Daybox = ({ className, data, id, units, switchUnits }) => {
	const Icon = getIcon(data);

	return (
		<div className={className}>
			<div>{id ? data.day : 'Tomorrow'}</div>
			<IconBox className="icon-box" icon={Icon} />
			<div className="description">{`"${data.weather.description}"`}</div>
			<TempBoxMinmax
				className="temp-box"
				temp={data.temp}
				units={units}
				switchUnits={switchUnits}
			/>
			<Parameter
				className="wind-box"
				label="Wind"
				value={data.wind.speed}
				units="m/s"
				icon={{ icon: WindIcon, dir: data.wind.deg }}
			/>
		</div>
	);
};

export default Daybox;
