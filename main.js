

$(function (){

	var $boxes = $(".box");
	var $instructionsButton = $("#instructions");
	var $restartButton = $("#restart");
	var count = 0;
	var $maingame = $(".container");
	var $instructions = $("#instructions1");
	var $play = $("#play");

	$instructionsButton.on('click', function(event) {
		$maingame.hide();
		$instructions.show();


		$play.on('click', function(event) {

			$maingame.show();
			$instructions.hide();

		})

		$restartButton.on('click', function(event) {
			console.log ("restart registered")
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
					console.log(count);
				}


			}

			if ($(".incomplete").length  === 0) {                                                                        
				alert("You have completed the game with a time of " + $('#timer').html() + "!");
				clearTimeout(timerstop);
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
});




