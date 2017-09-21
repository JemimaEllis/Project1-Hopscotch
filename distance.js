$(function (){



	var $containermode2 = $('.containermode2');
	var $containercopy = $(".container");
	var $boxes = $(".box");
	var $instructionsButton = $("#instructions");
	var $restartButton = $("#restart");
	var count = 0;
	var gamePlaying = true;
	var $resetBoxes = $(".box").clone();
	var boxestime = 60;
	var $instructions = $("#instructions1");
	var $mode2 = $("#mode2");
	var $finished2 = $("#finished2");
	var $maingame = $(".containermode2");

	$instructions.hide();
	$finished2.hide();

	$instructionsButton.on('click', function(event) {
	$maingame.hide();
		$instructions.show();
		$finished2.hide();
	});

	$restartButton.on('click', resetGame);



$mode2.on('click', function(event) {

			$maingame.show();
			$instructions.hide();
			$finished2.hide();

		});

	function resetGame () {

		console.log ("restart registered")
		$('.box').remove();
		$containermode2.append($resetBoxes.clone());
		gamePlaying = false;
		gamePlaying = true;
		boxestime = 60;

		$('.box').each(function(event) {
			$(this).html(getRandomNumber ());

			$(".complete").eq(0).removeClass('complete').addClass('incomplete');
			
		});

	}

	function appendNewNumberElement () {
		var $newElement = $('.box:first').clone();
		$newElement.html(getRandomNumber ());
		$newElement.css({
			marginLeft: Number($('.box:last').css('margin-left').replace('px', '')) + 130 + 'px'
		})
		$containermode2.append($newElement);
	}

	$boxes.each(function(event) {
		$(this).html(getRandomNumber ());
	});

	function getRandomNumber () {
		return Math.floor(Math.random() * 9) + 1;
	}




	

	function animateBox () {
		if (gamePlaying) {



			setTimeout(function () {
					$('.box').css({"margin-left": "-=2px"});
				// });
				// console.log(boxestime)
				animateBox();
			}, Math.round(boxestime));
		}


	}
	animateBox();

	




   
	$(document).on("keypress", function (event) {


		var numberInput = event.key
		var currentBoxValue = $('.incomplete').eq(0).html();

		if (numberInput === currentBoxValue) {
			$(".incomplete").eq(0).removeClass('incomplete').addClass('complete').remove();
			// $('.box').stop();	
			
			var newTime = boxestime - boxestime / 5 ;
			if (newTime >= 0) {
				boxestime = Math.round(newTime);
			}

			
			console.log(boxestime	)
			appendNewNumberElement();


		} else {
			$maingame.hide();
			$finished2.show();
			$finished2.html("Game over! \n \n You managed to pass through _____________________________________________ clouds");
			resetGame();
		}

	
	});
			
});