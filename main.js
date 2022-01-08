// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require("cors-anywhere");
cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    //requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ["cookie", "cookie2"],
    /*  setHeaders: {
      Referer:
        "https://ma5.vicious-cdn.football/radian.html?live=live&channel=17wgf7u9am8k_HD",
    }, */
  })
  .listen(port, host, function () {
    console.log("Running CORS Anywhere on " + "http://127.0.0.1:8080");
  });
