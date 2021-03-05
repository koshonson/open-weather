import axios from 'axios';

const KEY = '2e83a2a05ccc5a5dbff11c390210a1e1';
const rootURL = 'https://api.openweathermap.org/data/2.5/';

export const getWeather = {
	currentByTerm: q => {
		return axios
			.create({
				baseURL: `${rootURL}/weather`,
				params: {
					q: q,
					units: 'metric',
					appid: KEY
				}
			})
			.get();
	},
	currentByGeo: ({ lat, lon }) => {
		return axios
			.create({
				baseURL: `${rootURL}/weather`,
				params: {
					lat,
					lon,
					units: 'metric',
					appid: KEY
				}
			})
			.get();
	},
	forecast: ({ lat, lon }) => {
		return axios
			.create({
				baseURL: `${rootURL}/onecall`,
				params: {
					lat,
					lon,
					units: 'metric',
					exclude: 'current,minutely,hourly,alerts',
					appid: KEY
				}
			})
			.get();
	}
};

export const parseWeather = {
	coords: ({ coord: { lon, lat } }) => ({
		lon,
		lat
	}),
	current: data => {
		const {
			name,
			wind,
			main: { temp, feels_like, humidity, pressure },
			sys: { country, sunrise, sunset },
			weather: [{ id, description }],
			dt
		} = data;
		return {
			name,
			country,
			wind,
			temp,
			humidity,
			pressure,
			feelsLike_temp: feels_like,
			weather: {
				id,
				description
			},
			sunHours: {
				sunrise: new Date(sunrise * 1000),
				sunset: new Date(sunset * 1000)
			},
			ts: new Date(dt * 1000)
		};
	},
	forecast: ({ daily }) => {
		const forecast = [];
		for (let i = 1; i <= 7; i++) {
			const {
				dt,
				temp: { max, min },
				weather: [{ id, description }],
				wind_deg,
				wind_speed
			} = daily[i];
			forecast.push({
				tmax: max,
				tmin: min,
				weather: { id, description },
				wind: { deg: wind_deg, speed: wind_speed },
				ts: new Date(dt * 1000)
			});
		}
		return forecast;
	}
};
