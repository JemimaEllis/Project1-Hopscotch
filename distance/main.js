alert ("HOPSCOTCH \n \n \nINSTRUCTIONS:\n \nAIM OF GAME: Get to the finish line as fast as possible. Type in the number on the square your character is currently on to proceed. Finish in the fastes time possible.");



$(function (){



	var $container = $('.container');
	var $containercopy = $(".container");
	var $boxes = $(".box");
	var $instructionsButton = $("#instructions");
	var $restartButton = $("#restart");
	var count = 0;
	var gamePlaying = true;

	$instructionsButton.on('click', function(event) {
		alert ("HOPSCOTCH \n \n \nINSTRUCTIONS:\n \nAIM OF GAME: Get to the finish line as fast as possible. Type in the number on the square your character is currently on to proceed. Finish in the fastes time possible.");
	});

	$restartButton.on('click', function(event) {
		console.log ("restart registered")

		$boxes.each(function(event) {
			$(this).html(getRandomNumber ());

			$(".complete").eq(0).removeClass('complete').addClass('incomplete');
			gamePlaying = true;
			boxestime = 60;
			animateBox();
		});



	});

	function appendNewNumberElement () {
		var $newElement = $('.box:first').clone();
		$newElement.html(getRandomNumber ());
		$newElement.css({
			marginLeft: Number($('.box:last').css('margin-left').replace('px', '')) + 130 + 'px'
		})
		$container.append($newElement);
	}

	$boxes.each(function(event) {
		$(this).html(getRandomNumber ());
	});

	function getRandomNumber () {
		return Math.floor(Math.random() * 9) + 1;
	}




	var boxestime = 60;

	// $boxes.animate({"left": "-=2600px"}, boxestime);
	function animateBox () {
		if (gamePlaying) {
			setTimeout(function () {
				// $('.box').each(function () {
					$('.box').css({"margin-left": "-=1px"});
				// });
				animateBox();
			}, boxestime);
		}


	}
	animateBox();

	



	// setInterval(function() {
	// 	boxestime = boxestime - 20;
	// 	// boxestime -= boxestime * 8000 / 100;
	// 	// console.log('speed: ' + boxestime);
	// 	// if ($boxes.eq(0).position().left <= '-520') {
	// 	// 	console.log('box position: ' + $boxes.eq(0).position().left)
	// 	// 	$boxes.slice(0, 4).remove();
	// 	// 	console.log('num boxes: ' + $boxes.length);
	// 	// 	console.log('Success');
	// 	// 	$boxes = $('.box');
	// 	// }
	// }, 1000);


	// setInterval(function(){ alert("Hello"); }, 3000);



	// $boxes.animate({"left": "-=300px", "opacity":1}, "slow");
   
	$(document).on("keypress", function (event) {


		var numberInput = event.key
		var currentBoxValue = $('.incomplete').eq(0).html();

		if (numberInput === currentBoxValue) {
			$(".incomplete").eq(0).removeClass('incomplete').addClass('complete').remove();
			// $('.box').stop();	
			boxestime -= boxestime / 9 ;
			appendNewNumberElement();

			// if ($(".incomplete").length  === 0) {                                                                        
			// 	$('body').append();
			// }
			

		} else {
			alert('Game over ');
			gamePlaying = false;
		}

	
	});
			
});



// Add infinity boxes;
// miss one - fail
// get it wrong - fail




