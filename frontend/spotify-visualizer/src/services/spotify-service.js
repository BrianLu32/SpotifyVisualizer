import '../constants/key.js'
import { key } from '../constants/key.js'
import SpotifyInfo from '../model/spotify-info.js';

const SpotifyService = {
	SearchSpotifyByAlbumAndTrack: async function(query) {
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
			let props = {
				'artistName': json.artists.items[0].name,
				'artistImageUrl': json.artists.items[0].images[1].url,
				'numFollowers': json.artists.items[0].followers.total,
				'genreList': json.artists.items[0].genres
			}
			return new SpotifyInfo(props);
		} catch (error) {
			return console.error(error);
		}
	}
}

export default SpotifyService;