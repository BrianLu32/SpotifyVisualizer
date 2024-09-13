class SpotifyInfo {
  artistName;
  artistImageUrl;
  numFollowers;
  genreList;

  constructor(props) {
    this.artistName = props.artistName;
    this.artistImageUrl = props.artistImageUrl;
    this.numFollowers = props.numFollowers;
    this.genreList = props.genreList;
  }

}

export default SpotifyInfo;