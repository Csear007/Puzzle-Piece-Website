var http = require('http');
var fs = require("fs");


// 404 response
function send404Response(response){
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("Error 404: Page not found!");
	response.end();

}


//handles a user request
function onRequest(request, response) {

	if ( request.method == "GET" && request.url == '/' ) {
		response.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./views/index.html").pipe(response);

	} else {
		
		send404Response(response);
	

	}


}



http.createServer(onRequest).listen(3000);
console.log("server is listening on port 3000");