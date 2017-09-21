

$(function (){

	var $boxes = $(".box");
	var $instructionsButton = $("#instructions");
	var $restartButton = $("#restart");
	var count = 0;
	var $maingame = $(".container");
	var $instructions = $("#instructions1");
	var $mode1 = $("#mode1");
	var $finished = $("#finished");
	var $style = $("#style");
	clearTimeout(timerstop);

	$maingame.hide();
	$finished.hide();


	$instructionsButton.on('click', function(event) {
		$instructions.show();
		clearTimeout(timerstop);
		$maingame.hide();
	$finished.hide();

	



		

		});

	$mode1.on('click', function(event) {
		$instructions.hide();
			$maingame.show();
			$finished.hide();

			time = 0;
			clearTimeout(timerstop);
			increment ();

			$boxes.each(function(event) {
					$(this).html(getRandomNumber ());
			});

			var reset = count * 130;
			$boxes.css('margin-left', "+=" + reset + "px");
			count = 0;
			$(".complete").removeClass('complete').addClass('incomplete');
				

		});

		$restartButton.on('click', function(event) {
			time = 0;
			clearTimeout(timerstop);
			increment ();
			$maingame.show();
			$instructions.hide();
			$finished.hide();

			$boxes.each(function(event) {
					$(this).html(getRandomNumber ());
			});

			var reset = count * 130;
			$boxes.css('margin-left', "+=" + reset + "px");
			count = 0;
			$(".complete").removeClass('complete').addClass('incomplete');

		});

		$boxes.each(function(event) {
			$(this).html(getRandomNumber ());
		});

		function getRandomNumber () {
			return Math.floor(Math.random() * 9) + 1;
		}


		$(document).on("keypress", function (event) {


			var numberInput = event.key
			var currentBoxValue = $('.incomplete').eq(0).html();

			if (numberInput === currentBoxValue) {
				$(".incomplete").eq(0).removeClass('incomplete').addClass('complete');

				if($boxes.hasClass('complete')) {

					$('.box').css('margin-left', '-=130px')
					count++;
				}


			}

			if ($(".incomplete").length  === 0) { 
				$maingame.hide();
				$finished.show();
				clearTimeout(timerstop);                                                                      
				$style.html("You have completed the game with a time of  " + $('#timer').html() + "!");

				

				// $( "div.demo-container" ).html();
			}
		});
			
	});




	var time = 0;
	var running = 1;
	var timerstop;

	increment ();

	function increment () {
		if(running === 1) {
			timerstop = setTimeout (function () {
				time++;
				var mins = Math.floor(time/10/60);
				var secs = Math.floor(time/10 % 60);
				var hours = Math.floor(time/10/60/60);
				var tenths = time % 10;

				if(mins < 10) {
					mins = "0" + mins;
				}

				if (secs < 10) {
					secs = "0" + secs;
				}



				var $timer = $('#timer').html(hours + ":" + mins + ":" + secs + ":" + tenths + "0");
				increment();

			}, 100)
		}
	}





