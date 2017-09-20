alert ("HOPSCOTCH \n \n \nINSTRUCTIONS:\n \nAIM OF GAME: Get to the finish line as fast as possible. Type in the number on the square your character is currently on to proceed. Finish in the fastes time possible.");



$(function (){

	var $container = $('.container');
	var $boxes = $(".box");
	var $instructionsButton = $("#instructions");
	var $restartButton = $("#restart");
	var count = 0;

	$instructionsButton.on('click', function(event) {
		alert ("HOPSCOTCH \n \n \nINSTRUCTIONS:\n \nAIM OF GAME: Get to the finish line as fast as possible. Type in the number on the square your character is currently on to proceed. Finish in the fastes time possible.");
	});

	$restartButton.on('click', function(event) {
		console.log ("restart registered")

		$boxes.each(function(event) {
			$(this).html(getRandomNumber ());

			$(".complete").eq(0).removeClass('complete').addClass('incomplete');
		});



	});

	$boxes.each(function(event) {
		$(this).html(getRandomNumber ());
	});

	function getRandomNumber () {
		return Math.floor(Math.random() * 9) + 1;
	}




	var boxestime = 20000;

	$boxes.animate({"left": "-=2600px"}, 3000)


	// setInterval(function() {
	// 	boxestime += boxestime * 80 / 100;
	// 	console.log(boxestime);
	// }, 1000);


	// setInterval(function(){ alert("Hello"); }, 3000);



	// $boxes.animate({"left": "-=300px", "opacity":1}, "slow");
   
	$(document).on("keypress", function (event) {


		var numberInput = event.key
		var currentBoxValue = $('.incomplete').eq(0).html();

		if (numberInput === currentBoxValue) {
			$(".incomplete").eq(0).removeClass('incomplete').addClass('complete');
			 // var count = 0++;
			 // console.log(count);

		if ($(".incomplete").length  === 0) {                                                                        
			$('body').append($container);
		}



		}

		else {
			alert('Game over ');
		}

	
	});
			
});







