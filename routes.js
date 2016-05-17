var fs = require("fs");


function about(request, response){
   if (request.method == "GET"){

      if(request.url == "/"){
	response.writeHead( 200, {'Content-type': "text/html"}
	fs.createReadStream("./views/homepage.html").pipe(response);
     }
	else if ( request.url == "/about") {
        
          

















}
	