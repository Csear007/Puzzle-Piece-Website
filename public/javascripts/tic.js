// tic-tac-toe.js page 


var players = null;
var color_scheme = null; 
var leaderboard = null;

var color_order = Math.floor(Math.random() + 1);

var turns = 1; 
var win;

$.ajax("./public/javascripts/leaderboard.js", 
{
	method: 'POST',
	dataType: "script",
	data: {select: 'tic-wins'},
	success: function(data, textStatus, jqXHR){

		console.log(jqXHR);

		$('#leaderboard .jumbotron').html(data);

	},
	error: function(error){
		window.alert(error);
		console.log(error);
	}
});

$(document).ready(function(){

	$('#footer').load("./footer.html");


});

$('#start_button').click( function (){


	if (players == null || color_scheme == null) {  
		$('.error_box').show()
	} else {
	 $('.error_box').hide();
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
		consoele.log("nobody has won yet");
	}

	if(win[0]){
		$('#leaderboard .jumbotron').html("<h1> Player "+win[1]+" has won the game!");
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
	else {
		
	}

	win = win_tie(square);
});



