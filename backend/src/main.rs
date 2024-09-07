mod api;
mod model;
mod constants;

use actix_web::{ HttpServer, App, web::Data, middleware::Logger };

use api::spotify_info::get_spotify_info;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
  std::env::set_var("RUST_LOG", "debug");
  std::env::set_var("RUST_BACKTRACE", "1");
  env_logger::init();

  HttpServer::new(move || {
    let logger = Logger::default();
    App::new()
      .wrap(logger)
      .service(get_spotify_info)
  })
  .bind(("127.0.0.1", 8080))?
  .run()
  .await
}


