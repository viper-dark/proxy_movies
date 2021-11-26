// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: ['http://127.0.0.1:5500','https://bad.example.com', 'http://bad.example.com'] // Allow all origins
    //requireHeader: ['origin', 'x-requested-with'],
   // removeHeaders: ['cookie', 'cookie2'],
    //setHeaders :{"referer":"https://gogoplay1.com/embedplus?id=MTUxMzQ=&token=SJg72ThyS5RrSyvAhRyxMQ&expires=1637817460" }
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + "http://127.0.0.1:8080");
});
