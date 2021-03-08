import '../styles/app.css';
import React, { useState, useEffect } from 'react';
import { getWeather, parseWeather } from '../api/weather';
import Search from './Search';
import Content from './Content';
// import Footer from './Footer';

const App = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [notFound, setNotFound] = useState(false);
	const [location, setLocation] = useState(undefined);
	const [current, setCurrent] = useState(undefined);
	const [forecast, setForecast] = useState(undefined);
	const [units, setUnits] = useState('celsius');

	// useEffect(() => {
	// 	window.navigator.geolocation.getCurrentPosition(
	// 		({ coords }) =>
	// 			setLocation({ lat: coords.latitude, lon: coords.longitude }),
	// 		err => console.log('Geolocation not available or user denied.')
	// 	);
	// }, []);

	useEffect(async () => {
		setNotFound(false);
		if (searchTerm) {
			try {
				const { data } = await getWeather.currentByTerm(searchTerm);
				setCurrent(parseWeather.current(data));
				setLocation(parseWeather.coords(data));
			} catch {
				setNotFound(true);
			}
		}
	}, [searchTerm]);

	useEffect(async () => {
		// if (!current && location) {
		// 	const { data } = await getWeather.currentByGeo(location);
		// 	setCurrent(parseWeather.current(data));
		// }
		if (location) {
			const { data } = await getWeather.forecast(location);
			setForecast(parseWeather.forecast(data));
		}
	}, [location /*, current*/]);

	const switchUnits = () => {
		units === 'celsius' ? setUnits('fahrenheit') : setUnits('celsius');
	};

	const props = {
		searchTerm,
		notFound,
		current,
		forecast,
		units,
		switchUnits
	};

	return (
		<React.Fragment>
			<div className="container">
				<Search setSearchTerm={setSearchTerm} />
				<Content {...props} />
			</div>
			{/* <Footer /> */}
		</React.Fragment>
	);
};

export default App;
