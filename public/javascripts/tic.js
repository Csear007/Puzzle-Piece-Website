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
	players = $(this).text().trim();

	console.log("players button clicked");
});

$('.container .jumbotron .colors .btn-group button').click( function (){
	color_scheme = $(this).text().trim();

	console.log("colors button clicked");
});


$('#tic-stage').on("click", "#tic-board td", function(){

	var square = $('#tic-board tbody tr td');

	console.log(square);

	if($(this).hasClass("marked")){
		console.log("do nothing");
	}
	else{


		if(turns % 2 === 1){
			$(this).html("X");
			turns += 1;
		}
		else {
			$(this).html("O");
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


