import '../styles/app.css';
import React, { useState, useEffect } from 'react';
import { getWeather, parseWeather } from '../api/weather';
import Search from './Search';
import Message from './generic/Message';
import Current from './Current';
import Forecast from './Forecast';

const App = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [location, setLocation] = useState(null);
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecast, setForecast] = useState(null);
	const [units, setUnits] = useState('celsius');

	useEffect(async () => {
		if (searchTerm) {
			try {
				const { data } = await getWeather.currentByTerm(searchTerm);
				setCurrentWeather(parseWeather.current(data));
				setLocation(parseWeather.coords(data));
			} catch {
				console.log(`No such location (${searchTerm}) found.`);
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
				<Message message="Do manual search or enable GPS localization..." />
			);
		}
	};

	const renderForecast = () => {
		if (forecast) {
			return <Forecast />;
		}
	};

	return (
		<div className="container">
			<Search setSearchTerm={setSearchTerm} />
			{renderCurrent()}
			{renderForecast()}
		</div>
	);
};

export default App;
