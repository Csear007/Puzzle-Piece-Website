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
		fs.createReadStream("./views/tic-toe.html").pipe(response);
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
			fs.createReadStream("./public/stylesheets/homepage.css").pipe(response);

		}
		else if ( request.url == "/public/stylesheets/about.css"){
			response.writeHead(200, {'Content-type': "text/css"});
			fs.createReadStream("./public/stylesheets/about.css").pipe(response);

		}
		else if ( request.url == "/public/stylesheets/puzzle.css"){
			response.writeHead(200, {'Content-type': "text/css"});
			fs.createReadStream("./public/stylesheets/puzzle.css").pipe(response);
			
		}
		else if ( request.url == "/sudoku.css") {
			response.writeHead( 200, {'Content-type': "text/css"});
			fs.createReadStream("./public/stylesheets/sudoku.css").pipe(response);

		}
		else if ( request.url == "/tic.css") {
			response.writeHead( 200, {'Content-type': "text/css"});
			fs.createReadStream("./public/stylesheets/tic.css").pipe(response);

		}
		else
		{
			response.writeHead( 404, {'Content-type': "text/plain"});
			response.write("The page you were searching for was not found\n Sorry!");
			response.end();
		}
	}
}  

function routeJS(request, response){ // routes correct js script to user 

	if(request.method == "GET"){


	}





}

function lastIndexOf(request){

	for ( var index = request.length; index > 0; index--)
	{
		if(request[index] == "/")
		{
			return index;
		}
	}
}

function route(request, response){

	var request_string = request.url.substring(0, lastIndexOf(request.url));

	console.log(request.method+ " "+ request.url + " "+request_string);

	if( request_string == "/"){
		routeHTML(request, response);
	}
	else if (request_string == "/public/stylesheets"){
		routeCSS(request, response);
	}
	else if (request_string == "/public/javascripts"){
		routeJS(request, response);
	}
	else{
		response.writeHead( 404, {'Content-type': 'text/plain'});
		response.write("Sorry ... The "+request.url+" page you were looking for was not found");
		response.end();
	}



}

module.exports.route = route;     

	