import React, { useEffect, useState } from "react";
import SpotifyService from "../../services/spotify-service";

export default function Searchbar({setSpotifyInfo}) {
  const [query, setQuery] = useState("")

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if(!query) return;

      SpotifyService.SearchSpotifyByAlbumAndTrack(query).then(response => {
        setSpotifyInfo(response)
      });
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return(
    <div className='searchbar'>
      <input className="searchbar-input" type="text" placeholder="Search" onChange={event => setQuery(event.target.value)}></input>
    </div>
  );
}