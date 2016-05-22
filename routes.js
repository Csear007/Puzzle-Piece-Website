var fs = require("fs");


function routeHTML(request, response){ // routes the correct html page to user 
   if (request.method == "GET"){

    if(request.url == "/" || request.url == "/homepage"){
		response.writeHead( 200, {'Content-type': "text/html"});
		fs.createReadStream("./views/homepage.html").pipe(response);
    }
	else if ( request.url == "/about") {
		response.writeHead( 200, {'Content-type': "text/html"});
		fs.createReadStream("./views/about.html").pipe(response);
	}
	else if ( request.url == "/puzzle") {
		response.writeHead( 200, {'Content-type': "text/html"});
		fs.createReadStream("./views/puzzle-page.html").pipe(response);
	}
	else if ( request.url == "/sudoku") {
		response.writeHead( 200, {'Content-type': "text/html"});
		fs.createReadStream("./views/sudoku-page.html").pipe(response);
	}
	else if ( request.url == "/tic-tac") {
		response.writeHead( 200, {'Content-type': "text/html"});
		fs.createReadStream("./views/tic-tac.html").pipe(response);
	}
	else
	{
		response.writeHead( 404, {'Content-type': "text/plain"});
		response.write("The page you were searching for was not found\n Sorry!");
		response.end();
	}
  }
} 

function routeCSS(request, response){ // routes correct css page to user 

	if (request.method == "GET"){

		if( request.url == "/public/stylesheets/homepage.css"){
			response.writeHead(200, {'Content-type': "text/css"});
			fs.createReadStream("../public/stylesheets/homepage.css").pipe(response);
			response.end();
		}
		else if ( request.url == "/public/stylesheets/about.css"){
			response.writeHead(200, {'Content-type': "text/css"});
			fs.createReadStream("../public/stylesheets/about.css").pipe(response);
			response.end();
		}
		else if ( request.url == "/public/stylesheets/puzzle-page.css"){
			response.writeHead(200, {'Content-type': "text/css"});
			fs.createReadStream("../public/stylesheets/puzzle-page.css").pipe(response);
			response.end();
		}
		else 
		{
		console.log(request.url);
		}
	}
}  

function routeJS(request, response){ // routes correct js script to user 

	if(request.method == "GET"){


	}





}

module.exports.routeHTML = routeHTML;
module.exports.routeCSS = routeCSS;
module.exports.routeJS = routeJS;       

	