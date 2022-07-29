import React from 'react';
import UserIP from './UserIP';
import Socket from './Socket';

const Card = ({ ipStyle }) => {
	return (
		<div className="card border-2 rounded-md mx-2 p-4">
			{ipStyle ? <UserIP ipStyle={ipStyle} /> : <Socket />}
		</div>
	);
};

export default Card;
