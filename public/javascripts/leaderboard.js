// this is the database script 
var mysql = require("mysql");


var client = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "sampleDB"
});

client.query("SELECT * FROM `users_data`", function(err, rows){
	if(err){
		console.log("error in connecting to database");
	}

	console.log("data received from database, SUCCESS!");
	console.log(rows);
}