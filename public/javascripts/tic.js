// tic-tac-toe.js page 


var players = null;
var color_scheme = null; 

var color_order = Math.floor(Math.random() + 1);

var turns = 1; 




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
	players = $(this).val();

	console.log("players button clicked");
});

$('.container .jumbotron .colors .btn-group button').click( function (){
	color_scheme = $(this).val();

	console.log("colors button clicked");
});


$('#tic-board tbody tr td').click(function(){

	var square = $('#tic-board td');

	console.log(square);

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

	console.log("the tic-board is being clicked");
});


