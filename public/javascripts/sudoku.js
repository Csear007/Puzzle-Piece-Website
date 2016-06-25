
var sudoku = require("./sudoku-logic.js");
var difficulty = null; 
var timer = null;
var err_check = null;


$(document).ready( function(){
	$('.container .jumbotron .stage').load('sudoku-btn.html');
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

	$('.container .jumbotron .stage').load();

});