import { React, useState, useEffect } from 'react';

const UserIP = ({ ipStyle }) => {
	const [ip, setIP] = useState('');
	let apiUrl = 'https://api.ipify.org?format=json';

	if (ipStyle === 'ipv6') {
		apiUrl = 'https://api64.ipify.org?format=json';
	}

	useEffect(() => {
		fetch(apiUrl)
			.then((res) => res.json())
			.then(console.log(apiUrl))
			.then((data) => setIP(data.ip))
			.catch((err) => console.log(err));
	}, [apiUrl]);

	return (
		<div className="user-ip">
			{ipStyle === 'ipv6' ? (
				<h2>Your IPv6 address is: {ip}</h2>
			) : (
				<h2>Your IPv4 address is: {ip}</h2>
			)}
		</div>
	);
};

export default UserIP;
