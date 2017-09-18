// var numbers = ["math.randomize"];
// console.log(numbers[0]);

// alert ("HOPSCOTCH \n \n \nINSTRUCTIONS:\n \nAIM OF GAME: Get to the finish line as fast as possible. Type in the number on the square your character is currently on to proceed. Finish in the fastes time possible.");


$(function (){



var $boxes = $(".box");

// for(var i = 0; i < $boxes.length; i++) {

// // 	if (keypress === getRandomNumber) {
// // 		console.log("correct");
// // 	}

// // // console.log(i);
// // // 	$("#box" + i).html(Math.random);
// // // 	$boxes:eq(i).html(getRandomNumber);



// }



$(".boxes").on('click', function() {
	for(var i= 0; i < $boxes.length; i++) {
		if($(this).val() === boxes[i]) {
			console.log("correct");
		}

	}
});


	$(document).on("keypress", function (event) {
	    
	    console.log(event.key);
	});

	$boxes.each(function(event) {

		$(this).html(getRandomNumber ());

	});


	// if (event.key === valueofbox) {
	// 	console.log("correct");
	// }

});



function getRandomNumber () {
	return Math.floor(Math.random() * 9) + 1;

}


// $("#regTitle").html("Hello World");


// for (i = 0; i < cars.length; i++) { 
//     text += cars[i] + "<br>";
// }




// grab all of the boxes and store them in a variable. 

// loop through each box, change the innerHTML to matching index in the numbers array.

