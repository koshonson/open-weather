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
		const { data } = await getWeather.currentByTerm(searchTerm);
		setCurrentWeather(parseWeather.current(data));
		setLocation(parseWeather.coords(data));
		console.log(currentWeather);
		console.log(location);
	}, [searchTerm]);

	useEffect(async () => {
		if (location) {
			const { data } = await getWeather.forecast(location);
			setForecast(parseWeather.forecast(data));
			console.log(forecast);
		}
	}, [location]);

	return (
		<div>
			<Search setSearchTerm={setSearchTerm} />
			<Current />
			<Forecast />
		</div>
	);
};

export default App;
