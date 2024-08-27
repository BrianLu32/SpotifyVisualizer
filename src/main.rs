use serde::{Deserialize, Serialize};
use reqwest::header::{ACCEPT, AUTHORIZATION, CONTENT_TYPE};

#[derive(Serialize, Deserialize, Debug)]
struct ExternalUrls {
  spotify: String,
}
#[derive(Serialize, Deserialize, Debug)]
struct Artist {
  name: String,
  external_urls: ExternalUrls,
}
#[derive(Serialize, Deserialize, Debug)]
struct Album {
  name: String,
  artists: Vec<Artist>,
  external_urls: ExternalUrls,
}
#[derive(Serialize, Deserialize, Debug)]
struct Track {
  name: String,
  href: String,
  popularity: u32,
  album: Album,
  external_urls: ExternalUrls,
}
#[derive(Serialize, Deserialize, Debug)]
struct Items<T> {
  items: Vec<T>,
}
#[derive(Serialize, Deserialize, Debug)]
struct APIResponse {
  tracks: Items<Track>,
}

#[tokio::main]
async fn main() {
  let client = reqwest::Client::new();
  let response = client.get("https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb")
  .header(AUTHORIZATION, "Bearer [TOKEN]")
  .header(CONTENT_TYPE, "application/json")
  .header(ACCEPT, "application/json")
  .send()
  .await
  .unwrap();
  println!("{:#?}", response);

  match response.status() {
    reqwest::StatusCode::OK => {
      match response.json::<APIResponse>().await {
        Ok(parsed) => println!("Success! {:?}", parsed),
        Err(_) => println!("Hm, the response didn't match the shape we expected."),
      };
    }
    reqwest::StatusCode::UNAUTHORIZED => {
      println!("Need to grab a new token");
    }
    other => {
      panic!("Uh oh! Something unexpected happened: {:?}", other);
    }
  };
}
