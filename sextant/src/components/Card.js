import React from 'react';
import UserIP from './UserIP';

const Card = ({ ipStyle }) => {
	return (
		<div className="card border-2 rounded-md mx-2 p-4">
			<UserIP ipStyle={ipStyle} />
		</div>
	);
};

export default Card;
