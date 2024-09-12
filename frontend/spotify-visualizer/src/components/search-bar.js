import React, { useEffect, useState } from "react";
// import SpotifyService from "../services/spotify-service";
import { SearchSpotifyByAlbumAndTrack } from "../services/spotify-service";
import { key } from "../constants/key";

export default function Searchbar() {
  const [query, setQuery] = useState("")
  const [searchResult, setSearchResult] = useState({});

  let artistImageUrl = '';

  function HandleSearchResult(searchResult) {
    
  } 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if(!query) return;

      SearchSpotifyByAlbumAndTrack(query).then(response => {
        setSearchResult(response)
      });
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