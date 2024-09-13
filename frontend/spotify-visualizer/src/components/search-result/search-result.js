export default function SearchBody({spotifyInfo}) {
  return(
    <div className="searchResult">
      <div className="artistImageDiv">
        <img className="artistImage" src={spotifyInfo.artistImageUrl}></img>
      </div>
      <div className="artistInfoDiv">
        <h2>{spotifyInfo.artistName}</h2>
        <p>{spotifyInfo.genreList}</p>
        <p>{spotifyInfo.numFollowers}</p>
      </div>
    </div>
  )
}