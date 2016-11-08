	// tic-tac-toe.js page 


var players = null;
var color_scheme = null; 
var leaderboard = null;

var color_order = Math.floor(Math.random() + 1);

var turns = 1; 
var win;
var clicks = 0;

var ties = 0;
var x_wins = 0;
var o_wins = 0;

$.ajax("./public/javascripts/leaderboard.js", 
{
	method: 'POST',
	dataType: "html",
	data: {select: 'tic-wins'},
	success: function(data, textStatus, jqXHR){

		console.log(data);
		console.log(jqXHR);

		$('#leaderboard .jumbotron').html(data);

	},
	error: function(error){
		$('#leaderboard .jumbotron').html("<p>error in connecting to database</p>");
		console.log("error message for leaderboard ajax");
	}
});

$(document).ready(function(){

	$('#footer').load("./footer.html");

});

$('#start_button').click( function (){


	if (players == null || color_scheme == null) {  
		$('.alert-danger').show()
	} else {
	 $('.alert-danger').hide();
	 $("#tic-stage").load("./tic-board.html");
	}

	console.log("start button clicked");

});



$('.container .jumbotron .center button').click( function () {
	players = $(this).text().trim();

	console.log("players button clicked");
});

$('.container .jumbotron .colors .btn-group button').click( function (){
	color_scheme = $(this).text().trim();

	console.log("colors button clicked");
});


function win_tie(grid){

	var win = [false, null];


	if($(grid["0"]).text() == $(grid["1"]).text() && $(grid["1"]).text() == $(grid["2"]).text())
	{
		if($(grid["0"]).text() !== ""){
			win[0] = true;
			win[1] = $(grid["0"]).text();
		}

	}
	else if($(grid["3"]).text() == $(grid["4"]).text() && $(grid["4"]).text() == $(grid["5"]).text())
	{
		if($(grid["3"]).text() !== ""){
			win[0] = true;
			win[1] = $(grid["3"]).text();
		}

	}
	else if($(grid["6"]).text() == $(grid["7"]).text() && $(grid["7"]).text() == $(grid["8"]).text())
	{
		if($(grid["6"]).text() !== ""){
			win[0] = true;
			win[1] = $(grid["6"]).text();
		}

	}
	else if($(grid["0"]).text() == $(grid["3"]).text() && $(grid["3"]).text() == $(grid["6"]).text())
	{
		if($(grid["0"]).text() !== ""){
			win[0] = true;
			win[1] = $(grid["0"]).text();
		}

	}
	else if($(grid["1"]).text() == $(grid["4"]).text() && $(grid["4"]).text() == $(grid["7"]).text())
	{
		if($(grid["1"]).text() !== ""){
			win[0] = true;
			win[1] = $(grid["1"]).text();
		}

	}
	else if($(grid["2"]).text() == $(grid["5"]).text() && $(grid["5"]).text() == $(grid["8"]).text())
	{
		if($(grid["2"]).text() !== ""){
			win[0] = true;
			win[1] = $(grid["2"]).text();
		}

	}
	else if($(grid["0"]).text() == $(grid["4"]).text() && $(grid["4"]).text() == $(grid["8"]).text())
	{
		if($(grid["0"]).text() !== ""){
			win[0] = true;
			win[1] = $(grid["0"]).text();
		}

	}
	else if($(grid["2"]).text() == $(grid["4"]).text() && $(grid["6"]).text() == $(grid["8"]).text())
	{
		if($(grid["2"]).text() !== ""){
			win[0] = true;
			win[1] = $(grid["2"]).text();
		}
	}
	else {
		console.log("nobody has won yet");
		
	}

	if(win[0]){
		$('#tic-news').html("<h1> Player "+win[1]+" has won the game!");
		if(win[1] == "X"){
			x_wins++;
			$('#score .bottom #x').html('Wins: '+x_wins);
		}
		else{
			o_wins++;
			$("#score .bottom #o").html("Wins: "+o_wins);

		}
	}

	return win[0];


}


$('#tic-stage').on("click", "#tic-board td", function(){

	var square = $('#tic-board tbody tr td');


	if(!win){

		if($(this).hasClass("marked")){
			console.log("do nothing");
		}
		else{


			if(turns % 2 === 1){
				$(this).text("X");
				turns += 1;
			}
			else {
				$(this).text("O");
				turns += 1;
			}
			$(this).addClass("marked");
			clicks++;


			if(color_order % 2 === 0){
				$(this).addClass(color_scheme+"_X");
				color_order += 1;
			}
			else {
				$(this).addClass(color_scheme+"_O");
				color_order += 1;
			}
			
		}
	}
	

	win = win_tie(square);

	if(clicks > 8 && !win){
		$("#tic-news").html("<h1> a tie has occured! </h1>");
		ties++;
		$('#score .bottom #center').html(ties);
	}

});

$('#tic-stage').on('click', '.restart .btn-warning', function(){
	clicks = 0;
	$('#tic-stage').load("/tic-board.html", function(){
		$('#score .bottom #x').html(x_wins);
		$("#score .bottom #center").html(ties);
		$("#score .bottom #o").html(o_wins);
	});
	$('#tic-news').html("<h1> A new game has started </h1>");
});



