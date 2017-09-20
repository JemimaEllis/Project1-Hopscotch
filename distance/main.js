alert ("HOPSCOTCH \n \n \nINSTRUCTIONS:\n \nAIM OF GAME: Get to the finish line as fast as possible. Type in the number on the square your character is currently on to proceed. Finish in the fastes time possible.");



$(function (){

	var $container = $('.container');
	var $containercopy = $(".container");
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




	var boxestime = 30000;

	$boxes.animate({"left": "-=2600px"}, boxestime);

	// $boxes.each(function(){
	// 	$(this).animate({"left": "-=2600px"}, boxestime);
	// });


	setInterval(function() {
	boxestime -= boxestime * 80 / 100;
	console.log(boxestime);
	}, 100);


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
			$('body').append($containercopy);
		}



		}

		else {
			alert('Game over ');
		}

	
	});
			
});



// Add infinity boxes;
// miss one - fail
// get it wrong - fail




