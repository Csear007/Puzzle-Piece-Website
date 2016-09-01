
var sudoku = null 
var difficulty = null; 
var timer = null;
var err_check = null;



$.ajax("./public/javascripts/sudoku-logic.js", 
{
	method: 'GET',
	dataType: "script",
	processData: 'true',
	cache: 'true',
	success: function(data, textStatus, jqXHR){
		sudoku = data;
	}


});

$.ajax("./public/javascripts/leaderboard.js", 
{
	method: 'POST',
	data: {select: 'sudoku-wins'},
	dataType: "script",
	sucess: function(data, textStatus, jqXHR){

		window.alert(data);
		$('#leaderboard .jumbotron').html(data);
	},
	error: function(error){
		window.alert(error);
		console.log(error);
	}

});


$(document).ready( function(){
	$('.container .jumbotron .stage').load('sudoku-btn.html');
	$('#footer').load("./footer.html");
});


$('.stage').on("click", ".center .btn-primary", function() {
	difficulty = $(this).text();
	console.log(difficulty);
});

$('.stage').on("click", ".center .btn-success", function() {
	difficulty = $(this).text();
	console.log(difficulty);
});

$('.stage').on("click", ".center .btn-danger", function() {
	difficulty = $(this).text();
	console.log(difficulty);
});

$('.container .jumbotron .stage').on("click", ".center .dropdown .dropdown-menu .timer",function() {

	timer = $(this).text();
	console.log("timer var equals "+timer);
});

$('.stage').on("click", ".center .dropdown .dropdown-menu .error",function() {

	err_check = $(this).text();
	console.log("err_check var equals "+err_check);
});



$('.stage').on("click", "#start_button", function() {


	var puzzle = sudoku.generate(difficulty.toLowerCase().trim());

	$('.container .jumbotron .stage').load("./sudoku-grid.html", function() {

		$.each(puzzle, function(index, value){

		var row = index.substr(0, 1);
		var column = index.substr(1);

		switch(column){
			case '1': column = "one"; break;
			case '2': column = "two"; break;
			case '3': column = "three"; break;
			case '4': column = "four"; break;
			case '5': column = "five"; break;
			case '6': column = "six"; break;
			case '7': column = "seven"; break;
			case '8': column = "eight"; break;
			case '9': column = "nine"; break;
		}

		$('#'+row+" ."+column).html(value);

		});

	});




});