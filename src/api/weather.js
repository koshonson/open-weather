import axios from 'axios';
import { getDayName, offsetLocalTimezone } from '../util/date';
import { celsiusToFahrenheit, roundNum } from '../util/units';

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
			sys: { country },
			weather: [{ id, description }],
			dt,
			timezone
		} = data;
		return {
			name,
			country,
			wind,
			tC: roundNum(temp),
			tF: roundNum(celsiusToFahrenheit(temp)),
			humidity,
			pressure,
			feelsLike_temp: feels_like,
			weather: {
				id,
				description
			},
			ts: offsetLocalTimezone(new Date(dt * 1000 + timezone * 1000))
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
				temp: {
					tmaxC: roundNum(max),
					tminC: roundNum(min),
					tmaxF: roundNum(celsiusToFahrenheit(max)),
					tminF: roundNum(celsiusToFahrenheit(min))
				},
				weather: { id, description },
				wind: { deg: wind_deg, speed: wind_speed },
				day: getDayName(new Date(dt * 1000).getDay())
			});
		}
		return forecast;
	}
};
