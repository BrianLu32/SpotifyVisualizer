import { useState } from 'react'
import '../constants/key.js'
import { key } from '../constants/key.js'

// const SpotifyService = {
// 	SearchSpotifyByAlbumAndTrack: function(query) {
// 		const [searchResults, setSearchResults] = useState({});

// 		const url = `https://api.spotify.com/v1/search?q=${query}type=album%2Cartist`;
// 		const requestOptions = {
// 			method: 'GET',
// 			headers: 
// 			{ 
// 				'Content-Type': 'application/json',
// 				'Authorization': `Bearer ${key}`
// 			},
// 		};

// 		fetch(url, requestOptions)
// 			.then(response => response.json())
// 			.then(json => setSearchResults(json))
// 			.catch(error => console.error(error));

// 		return searchResults;
// 	}
// }

const SearchSpotifyByAlbumAndTrack = async (query) => {
	const url = `https://api.spotify.com/v1/search?q=${query}&type=artist`;
	const requestOptions = {
		method: 'GET',
		headers: 
		{ 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${key}`
		},
	};

	try {
		const response = await fetch(url, requestOptions);
		const json = await response.json();
		return json;
	} catch (error) {
		return console.error(error);
	}
}

// export default SpotifyService;
export { SearchSpotifyByAlbumAndTrack };