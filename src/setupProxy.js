const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/*', {
      target: 'https://api.coinone.co.kr',
      changeOrigin: true
    })
  );
};
