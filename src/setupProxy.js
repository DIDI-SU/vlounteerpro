const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(`/api`, {
      target: "http://apis.data.go.kr/1543061/animalShelterSrvc/shelterInfo",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
