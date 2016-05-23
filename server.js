var http = require('http');
var fs = require("fs");

var router = require("./routes.js");


//function that handles user's page requests 
http.createServer(function(request, response) {
	router.route(request, response);

	//console.log(request.method+ " "+request.url);
}).listen(3000);
console.log("server is listening on port 3000");