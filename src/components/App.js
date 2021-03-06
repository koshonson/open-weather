import '../styles/app.css';
import React, { useState, useEffect } from 'react';
import { getWeather, parseWeather } from '../api/weather';
import Search from './Search';
import Current from './Current';
import Forecast from './Forecast';

const App = () => {
	const [searchTerm, setSearchTerm] = useState('Prague');
	const [location, setLocation] = useState(null);
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecast, setForecast] = useState(null);

	useEffect(async () => {
		try {
			const { data } = await getWeather.currentByTerm(searchTerm);
			setCurrentWeather(parseWeather.current(data));
			setLocation(parseWeather.coords(data));
		} catch {
			console.log(`No such location (${searchTerm}) found.`);
		}
	}, [searchTerm]);

	useEffect(async () => {
		if (location) {
			const { data } = await getWeather.forecast(location);
			setForecast(parseWeather.forecast(data));
		}
	}, [location]);

	return (
		<div className="container">
			<Search setSearchTerm={setSearchTerm} />
			<Current weather={currentWeather} />
		</div>
	);
};

export default App;
