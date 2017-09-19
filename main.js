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
		}




		if ($(".incomplete").length  === 0) {                                                                        
	alert("You have completed the game!");
	}

			
});

	   
	
});

// Things to get done to reach MVP:
// Make buttons move accross screen.
// Create Timer.
// Restart button




