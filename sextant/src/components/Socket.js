import React, { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://localhost:55455');

const Socket = () => {
	const [latency, setLatency] = useState(0);

	useEffect(() => {
		client.onerror = function (error) {
			console.log('WebSocket Error: ' + error);
		};

		client.onopen = function (event) {
			console.log('WebSocket Client Connected');
		};

		client.onmessage = function (event) {
			const start = Date.now();
			setLatency(start - event.data);
		};

		client.onclose = function (event) {
			console.log('WebSocket Client Closed');
		};
	}, []);

	return (
		<div className="socket">
			<h2>Latency:</h2>
			<div>{latency}</div>
		</div>
	);
};

export default Socket;
