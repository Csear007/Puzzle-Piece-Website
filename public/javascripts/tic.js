// tic-tac-toe.js page 


var players = null;
var color_scheme = null; 

$('#start_button').click( function (){


	(players == null || color_scheme == null) ? $('.error_box').show() : $('.error_box').hide();

	// if( players == null || color_scheme == null)
	// {
	// 	$('.error_box').show();
	// }
	// else {
	// 	$('.error_box').hide();
	// }


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


$('.colors .btn-group .btn-success').mouseenter(function(){

		var color = $(this).text();


		switch(color){
			case 'Christmas':
				$(this).css("color", "red");
				break;
			case 'Halloween':
				$(this).css("background-color", "orange");
				$(this).css("color", "black");
				break;
			case 'Simple-Games':
				$(this).css("background-color", "#89C4FF");
				$(this).css("color", "#FF5722");
				break;
			case 'Plain':
				$(this).css("background-color", "white");

		}

	console.log("mouseenter is working" + color);
});

