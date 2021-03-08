import React from 'react';
import * as icons from 'react-icons/wi';

const {
	WiThunderstorm,
	WiLightning,
	WiSprinkle,
	WiRain,
	WiRainMix,
	WiShowers,
	WiStormShowers,
	WiSnow,
	WiSleet,
	WiSmoke,
	WiDayHaze,
	WiDust,
	WiFog,
	WiCloudyGusts,
	WiTornado,
	WiDaySunny,
	WiCloudy,
	WiHurricane,
	WiSnowflakeCold,
	WiHot,
	WiWindy,
	WiHail,
	WiStrongWind,
	WiDayThunderstorm,
	WiDayLightning,
	WiDaySprinkle,
	WiDayRain,
	WiDayRainMix,
	WiDayShowers,
	WiDayStormShowers,
	WiDaySnow,
	WiDaySleet,
	WiDayFog,
	WiDayCloudyGusts,
	WiDaySunnyOvercast,
	WiDayHail,
	WiNightAltThunderstorm,
	WiNightAltLightning,
	WiNightAltSprinkle,
	WiNightAltRain,
	WiNightAltRainMix,
	WiNightAltShowers,
	WiNightAltStormShowers,
	WiNightAltSnow,
	WiNightAltSleet,
	WiNightFog,
	WiNightClear,
	WiNightAltCloudyGusts,
	WiNightAltCloudy,
	WiNightAltHail,
	WiWindDeg,
	WiSunrise,
	WiSunset,
	WiThermometer
} = icons;

const wiOwmMap = {
	s101: WiThermometer,
	s102: WiSunrise,
	s103: WiSunset,
	s104: WiWindDeg,
	s200: WiThunderstorm,
	s201: WiThunderstorm,
	s202: WiThunderstorm,
	s210: WiLightning,
	s211: WiLightning,
	s212: WiLightning,
	s221: WiLightning,
	s230: WiThunderstorm,
	s231: WiThunderstorm,
	s232: WiThunderstorm,
	s300: WiSprinkle,
	s301: WiSprinkle,
	s302: WiRain,
	s310: WiRainMix,
	s311: WiRain,
	s312: WiRain,
	s313: WiShowers,
	s314: WiRain,
	s321: WiSprinkle,
	s500: WiSprinkle,
	s501: WiRain,
	s502: WiRain,
	s503: WiRain,
	s504: WiRain,
	s511: WiRainMix,
	s520: WiShowers,
	s521: WiShowers,
	s522: WiShowers,
	s531: WiStormShowers,
	s600: WiSnow,
	s601: WiSnow,
	s602: WiSleet,
	s611: WiRainMix,
	s612: WiRainMix,
	s615: WiRainMix,
	s616: WiRainMix,
	s620: WiRainMix,
	s621: WiSnow,
	s622: WiSnow,
	s701: WiShowers,
	s711: WiSmoke,
	s721: WiDayHaze,
	s731: WiDust,
	s741: WiFog,
	s761: WiDust,
	s762: WiDust,
	s771: WiCloudyGusts,
	s781: WiTornado,
	s800: WiDaySunny,
	s801: WiCloudyGusts,
	s802: WiCloudyGusts,
	s803: WiCloudyGusts,
	s804: WiCloudy,
	s900: WiTornado,
	s901: WiStormShowers,
	s902: WiHurricane,
	s903: WiSnowflakeCold,
	s904: WiHot,
	s905: WiWindy,
	s906: WiHail,
	s957: WiStrongWind,
	d200: WiDayThunderstorm,
	d201: WiDayThunderstorm,
	d202: WiDayThunderstorm,
	d210: WiDayLightning,
	d211: WiDayLightning,
	d212: WiDayLightning,
	d221: WiDayLightning,
	d230: WiDayThunderstorm,
	d231: WiDayThunderstorm,
	d232: WiDayThunderstorm,
	d300: WiDaySprinkle,
	d301: WiDaySprinkle,
	d302: WiDayRain,
	d310: WiDayRain,
	d311: WiDayRain,
	d312: WiDayRain,
	d313: WiDayRain,
	d314: WiDayRain,
	d321: WiDaySprinkle,
	d500: WiDaySprinkle,
	d501: WiDayRain,
	d502: WiDayRain,
	d503: WiDayRain,
	d504: WiDayRain,
	d511: WiDayRainMix,
	d520: WiDayShowers,
	d521: WiDayShowers,
	d522: WiDayShowers,
	d531: WiDayStormShowers,
	d600: WiDaySnow,
	d601: WiDaySleet,
	d602: WiDaySnow,
	d611: WiDayRainMix,
	d612: WiDayRainMix,
	d615: WiDayRainMix,
	d616: WiDayRainMix,
	d620: WiDayRainMix,
	d621: WiDaySnow,
	d622: WiDaySnow,
	d701: WiDayShowers,
	d711: WiSmoke,
	d721: WiDayHaze,
	d731: WiDust,
	d741: WiDayFog,
	d761: WiDust,
	d762: WiDust,
	d781: WiTornado,
	d800: WiDaySunny,
	d801: WiDayCloudyGusts,
	d802: WiDayCloudyGusts,
	d803: WiDayCloudyGusts,
	d804: WiDaySunnyOvercast,
	d900: WiTornado,
	d902: WiHurricane,
	d903: WiSnowflakeCold,
	d904: WiHot,
	d906: WiDayHail,
	d957: WiStrongWind,
	n200: WiNightAltThunderstorm,
	n201: WiNightAltThunderstorm,
	n202: WiNightAltThunderstorm,
	n210: WiNightAltLightning,
	n211: WiNightAltLightning,
	n212: WiNightAltLightning,
	n221: WiNightAltLightning,
	n230: WiNightAltThunderstorm,
	n231: WiNightAltThunderstorm,
	n232: WiNightAltThunderstorm,
	n300: WiNightAltSprinkle,
	n301: WiNightAltSprinkle,
	n302: WiNightAltRain,
	n310: WiNightAltRain,
	n311: WiNightAltRain,
	n312: WiNightAltRain,
	n313: WiNightAltRain,
	n314: WiNightAltRain,
	n321: WiNightAltSprinkle,
	n500: WiNightAltSprinkle,
	n501: WiNightAltRain,
	n502: WiNightAltRain,
	n503: WiNightAltRain,
	n504: WiNightAltRain,
	n511: WiNightAltRainMix,
	n520: WiNightAltShowers,
	n521: WiNightAltShowers,
	n522: WiNightAltShowers,
	n531: WiNightAltStormShowers,
	n600: WiNightAltSnow,
	n601: WiNightAltSleet,
	n602: WiNightAltSnow,
	n611: WiNightAltRainMix,
	n612: WiNightAltRainMix,
	n615: WiNightAltRainMix,
	n616: WiNightAltRainMix,
	n620: WiNightAltRainMix,
	n621: WiNightAltSnow,
	n622: WiNightAltSnow,
	n701: WiNightAltShowers,
	n711: WiSmoke,
	n721: WiDayHaze,
	n731: WiDust,
	n741: WiNightFog,
	n761: WiDust,
	n762: WiDust,
	n781: WiTornado,
	n800: WiNightClear,
	n801: WiNightAltCloudyGusts,
	n802: WiNightAltCloudyGusts,
	n803: WiNightAltCloudyGusts,
	n804: WiNightAltCloudy,
	n900: WiTornado,
	n902: WiHurricane,
	n903: WiSnowflakeCold,
	n904: WiHot,
	n906: WiNightAltHail,
	n957: WiStrongWind
};

const NoIcon = () => <div style={{ font: '2em bold, monospace' }}>N/A</div>;

const parseWeatherData = weather => {
	const {
		weather: { id },
		ts
	} = weather;
	const hrs = ts ? ts.getHours() : 12;
	const code = hrs > 20 || hrs < 7 ? 'n' : 'd';
	return `${code}${id}`;
};

const parseWeatherString = weather => {
	if (weather.length <= 4) return weather;
	switch (weather) {
		case 'thermometer':
		case 'thermo':
			return 's101';
		case 'sunrise':
			return 's102';
		case 'sunset':
			return 's103';
		case 'winddir':
		case 'winddeg':
			return 's104';
		default:
			return null;
	}
};

const findIcon = weather => {
	switch (typeof weather) {
		case 'number':
			return wiOwmMap[`s${weather}`];
		case 'string':
			return wiOwmMap[parseWeatherString(weather)];
		case 'object':
			return wiOwmMap[parseWeatherData(weather)];
		default:
			return null;
	}
};

export const getIcon = weather => {
	const Icon = findIcon(weather);
	return Icon ? Icon : NoIcon;
};
