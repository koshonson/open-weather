import React from 'react';
import Message from './generic/Message';
import Current from './Current';
import Forecast from './Forecast';

const Content = ({
	notFound,
	searchTerm,
	current,
	forecast,
	units,
	switchUnits
}) => {
	const renderError = () => {
		if (notFound) {
			return (
				<Message
					className="error message"
					message={`! Sorry, "${searchTerm}" wasn't found. Try search for a bigger settlement nearby. !`}
				/>
			);
		}
	};

	const renderCurrent = () => {
		if (current) {
			return (
				<Current data={current} units={units} switchUnits={switchUnits} />
			);
		} else {
			return (
				<Message
					className="message"
					message="To find out how the weather would be like, do manual search or enable GPS localization..."
				/>
			);
		}
	};

	const renderForecast = () => {
		if (forecast) {
			return (
				<Forecast data={forecast} units={units} switchUnits={switchUnits} />
			);
		}
	};

	return (
		<React.Fragment>
			{renderError()}
			{renderCurrent()}
			{renderForecast()}
		</React.Fragment>
	);
};

export default Content;
