import { useEffect, useState } from 'react';
import axios from "axios"
import './App.css';

// import AuthService from './services/auth-service';

import Searchbar from './components/search-bar/search-bar';
import SearchBody from './components/search-result/search-result';
import Login from './components/login/login';
import WebPlayback from './components/web-playback/WebPlayback';

function App() {
  const [spotifyInfo ,setSpotifyInfo] = useState({});
  const [token, setToken] = useState('')

  useEffect(() => {

    async function getToken() {
      axios.get('/auth/token').then(
        response => {
          setToken(response.data.access_token);
        }
      ).catch(error => {
        console.error(error);
      })
    }

    getToken();

  }, []);

  return (
    <div className="App">
      { (token === '') ? <Login/> : <WebPlayback token={token}/> }
      {/* <Searchbar setSpotifyInfo={setSpotifyInfo}></Searchbar>
      <SearchBody spotifyInfo={spotifyInfo}></SearchBody> */}
    </div>
  );
}

export default App;
