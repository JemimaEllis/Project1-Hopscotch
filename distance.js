$(function (){



	var $containermode2 = $('.containermode2');
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

			animateBox();
		});



	});

	function appendNewNumberElement () {
		var $newElement = $('.box:first').clone();
		$newElement.html(getRandomNumber ());
		$newElement.css({
			marginLeft: Number($('.box:last').css('margin-left').replace('px', '')) + 130 + 'px'
		})
		$$containermode2.append($newElement);
	}

	$boxes.each(function(event) {
		$(this).html(getRandomNumber ());
	});

	function getRandomNumber () {
		return Math.floor(Math.random() * 9) + 1;
	}




	var boxestime = 30;

	function animateBox () {
		if (gamePlaying) {



			setTimeout(function () {
					$('.box').css({"margin-left": "-=1px"});
				// });
				// console.log(boxestime)
				animateBox();
			}, boxestime);
		}


	}
	animateBox();

	




   
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