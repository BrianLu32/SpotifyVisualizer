import React, { useEffect, useState } from "react";
import SpotifyService from "../services/spotify-service";

export default function Searchbar() {
  const [query, setQuery] = useState("")
  const [searchResult, setSearchResult] = useState({});

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if(!query) return;

      SpotifyService.SearchSpotifyByAlbumAndTrack(query).then(response => {
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