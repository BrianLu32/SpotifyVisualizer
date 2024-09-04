use serde:: {Deserialize, Serialize };
use reqwest::header::{ ACCEPT, CONTENT_TYPE };
use strum::Display;
use actix_web::{
  get, http::{header::ContentType, StatusCode}, web::{Json, Path}, HttpResponse
};

use crate::model::spotify_info::SpotifyInfo;
use crate::constants::token::TOKEN;

// pub type SpotifyInfos = Response<SpotifyInfo>;

// #[derive(Serialize, Deserialize, Debug)]
// struct ExternalUrls {
//   spotify: String,
// }
// #[derive(Serialize, Deserialize, Debug)]
// struct Artist {
//   name: String,
//   external_urls: ExternalUrls,
// }
// #[derive(Serialize, Deserialize, Debug)]
// struct Album {
//   name: String,
//   artists: Vec<Artist>,
//   external_urls: ExternalUrls,
// }
// #[derive(Serialize, Deserialize, Debug)]
// struct Track {
//   name: String,
//   href: String,
//   popularity: u32,
//   album: Album,
//   external_urls: ExternalUrls,
// }
// #[derive(Serialize, Deserialize, Debug)]
// struct Items<T> {
//   items: Vec<T>,
// }
#[derive(Serialize, Deserialize, Debug)]
struct SpotifyInfoIdentifier {
  id: String,
}

#[derive(Deserialize)]
pub struct SpotifyInfoRequest {

}

// #[derive(Debug, Display)]
// pub enum SpotifyError {
//   NotFound,
//   BadRequest,
//   Unauthorized
// }

// impl ResponseError for SpotifyError {
//   fn error_response(&self) -> HttpResponse {
//     HttpResponse::build(self.status_code())
//       .insert_header(ContentType::json())
//       .body(self.to_string())
//   }

//   fn status_code(&self) -> StatusCode {
//   match self {
//       SpotifyError::NotFound => StatusCode::NOT_FOUND,
//       SpotifyError::BadRequest => StatusCode::BAD_REQUEST,
//       SpotifyError::Unauthorized => StatusCode::UNAUTHORIZED
//     }
//   }
// }

#[get("/getSpotifyInfo")]
pub async fn get_spotify_info() -> Json<String> {
  let client = reqwest::Client::new();

  let response = client.get("https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb")
  .bearer_auth(TOKEN)
  .header(CONTENT_TYPE, "application/json")
  .header(ACCEPT, "application/json")
  .send()
  .await
  .unwrap().text().await;

  return Json(response.unwrap());

  // match response.status() {
  //   reqwest::StatusCode::OK => {
  //     match response.text().await {
  //       Ok(_) => response.text().await,
  //       Err(_) => SpotifyError::NotFound
  //     }
  //   }
  // }

  // return Json(spotify_info_identifier.into_inner().id);
}

// let client = reqwest::Client::new();
//   let response = client.get("https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb")
//   .header(AUTHORIZATION, "Bearer [TOKEN]")
//   .header(CONTENT_TYPE, "application/json")
//   .header(ACCEPT, "application/json")
//   .send()
//   .await
//   .unwrap();
//   println!("{:#?}", response);

//   match response.status() {
//     reqwest::StatusCode::OK => {
//       match response.json::<APIResponse>().await {
//         Ok(parsed) => println!("Success! {:?}", parsed),
//         Err(_) => println!("Hm, the response didn't match the shape we expected."),
//       };
//     }
//     reqwest::StatusCode::UNAUTHORIZED => {
//       println!("Need to grab a new token");
//     }
//     other => {
//       panic!("Uh oh! Something unexpected happened: {:?}", other);
//     }
//   };