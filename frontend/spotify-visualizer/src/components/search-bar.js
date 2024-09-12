import React, { useEffect, useState } from "react";
// import SpotifyService from "../services/spotify-service";
import { SearchSpotifyByAlbumAndTrack } from "../services/spotify-service";
import { key } from "../constants/key";

export default function Searchbar() {
  const [query, setQuery] = useState("")
  const [searchResult, setSearchResult] = useState({});

  function HandleSearchResult(searchResult) {
    
  } 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if(!query) return;
      
      const url = `https://api.spotify.com/v1/search?q=${query}&type=artist`;

      const requestOptions = {
        method: 'GET',
        headers: 
        { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key}`
        },
      };

      fetch(url, requestOptions)
        .then(response => response.json())
        .then(json => setSearchResult(json))
        .catch(error => console.error(error));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return(
    <div className='searchbar'>
      <input className="searchbar-input" type="text" placeholder="Search" onChange={event => setQuery(event.target.value)}></input>
      <p>
        { JSON.stringify(searchResult) }
      </p>
    </div>
  );
}