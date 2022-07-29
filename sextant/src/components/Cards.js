import React from 'react';
import Card from './Card';

const Cards = () => {
	return (
		<div className="cards flex justify-center">
			<Card ipStyle="ipv4" />
			<Card ipStyle="ipv6" />
			<Card />
		</div>
	);
};

export default Cards;
