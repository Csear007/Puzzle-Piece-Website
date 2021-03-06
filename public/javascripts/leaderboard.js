// this is the database script 
var mysql = require("mysql");
var query_parser = require("query-string");


var client = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "sampleDB"
});

var return_data = "";



var query_callback = function(query_object){


	if(query_object["select"] == 'sudoku-wins'){


		client.query("Select * From users_data", function(err, data){

		if(err){
			console.log("error in select query");
		}
		else {
			console.log("success in querying data");
		

		var leaderboard_head = `<thead class='heading'>
							<tr><td>Name</td><td>UserName</td><td>Password</td>
						</thead>`;

		var leaderboard_body = "<tbody class='data_columns'>";

		for(var row = 0; row < data.length; row++){
			leaderboard_body += "<tr>";
			leaderboard_body += "<td>" + data[row].Name + "</td>";
			leaderboard_body += "<td>" + data[row].Username + "</td>";
			leaderboard_body += "<td>" + data[row].Password + "</td>";
			leaderboard_body += "</tr>"

		}

		leaderboard_body += "</tbody>";


		return_data = "<table class='leader-grid table'>" + leaderboard_head + leaderboard_body + "</table>";

		}


	});





	}
	else if (query_object["select"] == 'tic-wins'){

		client.query("Select * From users_data", function(err, data){

		if(err){
			console.log("error in select query");
		}
		else {
			console.log("success in querying data");
		

		var leaderboard_head = `<thead class='heading'>
							<tr><td>Name</td><td>UserName</td><td>Password</td>
						</thead>`;

		var leaderboard_body = "<tbody class='data_columns'>";

		for(var row = 0; row < data.length; row++){
			leaderboard_body += "<tr>";
			leaderboard_body += "<td>" + data[row].Name + "</td>";
			leaderboard_body += "<td>" + data[row].Username + "</td>";
			leaderboard_body += "<td>" + data[row].Password + "</td>";
			leaderboard_body += "</tr>"

		}

		leaderboard_body += "</tbody>";


		return_data = "<table class='leader-grid table'>" + leaderboard_head + leaderboard_body + "</table>";

		}


	});


	} else {

	}





}


function query(querystring){

	var query_object = query_parser.parse(querystring);


	query_callback(query_object);




	return return_data;



}


module.exports.querying = query;