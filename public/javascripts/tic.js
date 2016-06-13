// tic-tac-toe.js page 


var players = null;
var color_scheme = null; 

$('#start_button').click( function (){
	$(".container .jumbotron").load();

	console.log("start button clicked");

});



$('.container .jumbotron .center button').click( function () {
	players = $(this).val();

	console.log("players button clicked");
});

$('.container .jumbotron .colors .btn-group button').click( function (){
	color_scheme = $(this).val();

	console.log("colors button clicked");
});