
var sudoku = null 
var difficulty = null; 
var timer = null;
var err_check = null;



$.get("./public/javascripts/sudoku-logic.js", function(data) {
	sudoku = data;
}); 


$(document).ready( function(){
	$('.container .jumbotron .stage').load('sudoku-btn.html');
	$('#footer').load("./footer.html");
});


$('.btn btn-success').click(function() {
	difficulty = $('.btn btn-success').val();

});

$('.btn btn-primary').click(function() {
	difficulty = $('.btn btn-primary').val();

});

$('.btn btn-danger').click(function() {
	difficulty = $('.btn btn-danger').val();

});



$('#start_button').click(function() {


	var puzzle = sudoku.generate(difficulty.toLowerCase());

	$('.container .jumbotron .stage').html();

});