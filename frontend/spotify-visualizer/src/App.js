import { useState } from 'react';
import './App.css';

import Searchbar from './components/search-bar/search-bar';
import SearchBody from './components/search-result/search-result';

function App() {
  const [spotifyInfo ,setSpotifyInfo] = useState({});

  return (
    <div className="App">
      <Searchbar setSpotifyInfo={setSpotifyInfo}></Searchbar>
      <SearchBody spotifyInfo={spotifyInfo}></SearchBody>
    </div>
  );
}

export default App;
