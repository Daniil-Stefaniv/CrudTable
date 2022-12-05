import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import bodyRowData from './Components/AppGlobalTypes';
import Table from './Components/Table/Table';

function App() {
	const [isDataFetched, setDataStatus] = useState<boolean>(false);
	const [headers, setHeaders] = useState<Array<string | number>>([]);
	const [bodyInfo, setBodyInfo] = useState<Array<bodyRowData>>([]);

	useEffect(() => {
		if (!isDataFetched) {
			const fetchMyUsersList = async () => {
				const fetchData = await axios.get(
					'https://jsonplaceholder.typicode.com/users'
				);

				const result = fetchData.data;

				const fetchedHeaders = Object.keys(result[0]);
				headers === fetchedHeaders
					? {}
					: setHeaders([...fetchedHeaders]);

				setBodyInfo(result);

				setDataStatus(true);
			};

			fetchMyUsersList();
		}
	});

	return (
		<div className="App">
			{isDataFetched ? (
				<Table headersList={headers} bodyInfoList={bodyInfo} />
			) : (
				<section className=""></section>
			)}
		</div>
	);
}

export default App;
