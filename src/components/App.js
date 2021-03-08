import '../styles/app.css';
import React, { useState, useEffect } from 'react';
import { getWeather, parseWeather } from '../api/weather';
import Search from './Search';
import Message from './generic/Message';
import Current from './Current';
import Forecast from './Forecast';

const App = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [notFound, setNotFound] = useState(false);
	const [location, setLocation] = useState(undefined);
	const [currentWeather, setCurrentWeather] = useState(undefined);
	const [forecast, setForecast] = useState(undefined);
	const [units, setUnits] = useState('celsius');

	useEffect(async () => {
		setNotFound(false);
		if (searchTerm) {
			try {
				const { data } = await getWeather.currentByTerm(searchTerm);
				setCurrentWeather(parseWeather.current(data));
				setLocation(parseWeather.coords(data));
			} catch {
				setNotFound(true);
			}
		}
	}, [searchTerm]);

	useEffect(async () => {
		if (location) {
			const { data } = await getWeather.forecast(location);
			setForecast(parseWeather.forecast(data));
		}
	}, [location]);

	const switchUnits = () => {
		units === 'celsius' ? setUnits('fahrenheit') : setUnits('celsius');
	};

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
		if (currentWeather) {
			return (
				<Current
					data={currentWeather}
					units={units}
					switchUnits={switchUnits}
				/>
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
		<div className="container">
			<Search setSearchTerm={setSearchTerm} />
			{renderError()}
			{renderCurrent()}
			{renderForecast()}
		</div>
	);
};

export default App;
