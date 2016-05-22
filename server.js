var http = require('http');
var fs = require("fs");

var router = require("./routes.js");



http.createServer(function(request, response) {
	router.routeHTML(request, response);
	router.routeCSS(request, response);
}).listen(3000);
console.log("server is listening on port 3000");