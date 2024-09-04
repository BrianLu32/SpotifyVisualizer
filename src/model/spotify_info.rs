use serde::Serialize;

#[derive(Serialize, Debug)]
struct ExternalUrls {
  spotify: String,
}
#[derive(Serialize, Debug)]
struct Artist {
  name: String,
  external_urls: ExternalUrls,
}
#[derive(Serialize, Debug)]
struct Album {
  name: String,
  artists: Vec<Artist>,
  external_urls: ExternalUrls,
}
#[derive(Serialize, Debug)]
struct Track {
  name: String,
  href: String,
  popularity: u32,
  album: Album,
  external_urls: ExternalUrls,
}
#[derive(Serialize, Debug)]
struct Items<T> {
  items: Vec<T>,
}
#[derive(Serialize, Debug)]
pub struct SpotifyInfo {
  tracks: Items<Track>,
}

impl SpotifyInfo {
  pub fn new(tracks: Items<Track>) -> SpotifyInfo {
    SpotifyInfo {
      tracks
    }
  }
}