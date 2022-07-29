import React from 'react';
import UserIP from './UserIP';

const Card = ({ ipStyle }) => {
	return (
		<div className="card">
			<UserIP ipStyle={ipStyle} />
		</div>
	);
};

export default Card;
