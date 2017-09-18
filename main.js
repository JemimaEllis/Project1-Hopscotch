// var numbers = ["math.randomize"];
// console.log(numbers[0]);

// alert ("HOPSCOTCH \n \n \nINSTRUCTIONS:\n \nAIM OF GAME: Get to the finish line as fast as possible. Type in the number on the square your character is currently on to proceed. Finish in the fastes time possible.");


$(function (){



var $boxes = $(".box");

$boxes.each(function(event) {

		$(this).html(getRandomNumber ());

	});


function getRandomNumber () {
	return Math.floor(Math.random() * 9) + 1;

}

	$(document).on("keypress", function (event) {

		// console.log(event.key)

		var numberImput = event.key
		// console.log(numberInput);
		var currentBoxValue = $('.incomplete').eq(0).html();

		if (numberImput === currentBoxValue) {
			$('.incomplete').eq(0).removeClass('incomplete').addClass('complete');
			console.log("correct");
		}


});

	   
	
});

// for(var i = 0; i < $boxes.length; i++) {

// // 	if (keypress === getRandomNumber) {
// // 		console.log("correct");
// // 	}

// // // console.log(i);
// // // 	$("#box" + i).html(Math.random);
// // // 	$boxes:eq(i).html(getRandomNumber);



// }



// $(".boxes").on('click', function() {
// 	for(var i= 0; i < $boxes.length; i++) {
// 		if($(this).val() === boxes[i]) {
// 			console.log("correct");
// 		}

// 	}





	


	// if (event.key === valueofbox) {
	// 	console.log("correct");
	// }







	
	 //    console.log($currentBoxes);
	 //    var current = $currentBoxes.eq(0).html();
	 //    console.log(current);

	 //    if (current === $currentBoxes) {

		// 	console.log("correct");
		// }






// });


// $( "#other" ).click(function() {
//   $( "#target" ).keypress();
// });

// $("#regTitle").html("Hello World");


// for (i = 0; i < cars.length; i++) { 
//     text += cars[i] + "<br>";
// }




// grab all of the boxes and store them in a variable. 

// loop through each box, change the innerHTML to matching index in the numbers array.

