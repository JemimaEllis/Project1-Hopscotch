// alert ("HOPSCOTCH \n \n \nINSTRUCTIONS:\n \nAIM OF GAME: Get to the finish line as fast as possible. Type in the number on the square your character is currently on to proceed. Finish in the fastes time possible.");



$(function (){


	var $instructionsButton = $("#instructions");

	$instructionsButton.on('click', function(event) {
			alert ("HOPSCOTCH \n \n \nINSTRUCTIONS:\n \nAIM OF GAME: Get to the finish line as fast as possible. Type in the number on the square your character is currently on to proceed. Finish in the fastes time possible.");

	});





	var $boxes = $(".box");

	$boxes.each(function(event) {

			$(this).html(getRandomNumber ());

		});





	function getRandomNumber () {
		return Math.floor(Math.random() * 9) + 1;

	}






	$(document).on("keypress", function (event) {

		// console.log(event.key)

		var numberInput = event.key
		// console.log(numberInput);
		var currentBoxValue = $('.incomplete').eq(0).html();

		if (numberInput === currentBoxValue) {
			$(".incomplete").eq(0).removeClass('incomplete').addClass('complete');
				// console.log("correct");
			if($boxes.hasClass('complete')) {

				$('.box').css('margin-left', '-=130px')
			}

		// else {
		// 	console.log("I'm wrong");
		// 	// $boxes.addClass('wrong');
		// }

		}




		if ($(".incomplete").length  === 0) {                                                                        
		alert("You have completed the game!");

		}

			
	});

	   var timer = createTimer(0);
	
});


var time = 0;

var running = 1;

increment ();

function increment () {
	if(running === 1) {
		setTimeout (function () {
			time++;
			var mins = Math.floor(time/10/60);
			var secs = Math.floor(time/10 % 60);
			var hours = Math.floor(time/10/60/60);
			var tenths = time % 10;

			if(mins < 10)
			{
				mins = "0" + mins;
			}

			if(secs < 10) {

				secs = "0" + secs;

			}

			document.getElementById('timer').innerHTML = hours + ":" + mins + ":" + secs + ":" + tenths + "0";

			increment();

			// // document.getElementById('main-heading').

// // New way:

// var $mainHeading = $('#main-heading');

		},1000)
	}
}


// create variavle starting at 0
// Create an interval to repeat a block of code every second which will
// icnrement that number by one and display that number on the screen.
// If statement.

// Things to get done to reach MVP:
// Make buttons move accross screen.
// Create Timer.
// Restart button




