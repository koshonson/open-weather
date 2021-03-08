import '../styles/footer.css';
import React from 'react';
import LinkedMessage from './generic/LinkedMessage';

const Footer = () => {
	return (
		<LinkedMessage
			className="footer"
			message="Powered by $$(owm) || $$(koshonson) ©2021"
			links={{
				owm: {
					label: 'OpenWeatherMap.org',
					link: 'https://openweathermap.org/'
				},
				koshonson: {
					label: 'Mika Koshonson',
					link: 'https://github.com/koshonson'
				}
			}}
		/>
	);
};

export default Footer;
