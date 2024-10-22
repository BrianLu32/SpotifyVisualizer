const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/auth/login',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: {
        "^/": "/auth/login" //add base path according to API route
      }
    })
  );
  app.use(
    '/auth/callback',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: {
        "^/": "/auth/callback" //add base path according to API route
      }
    })
  );
  app.use(
    '/auth/token',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: {
        "^/": "/auth/token" //add base path according to API route
      }
    })
  );
};