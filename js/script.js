// EaselJS Sprite Sheets
// SpriteSheet Documentation http://createjs.com/Docs/EaselJS/classes/SpriteSheet.html
imageData = {
    images: ['/img/car.jpg'], // Image element from PreloadJS LoadQueue
    frames: {width:126, height:126}, // Frame sizes
    framerate: 30, // Spritesheet framerate
    animations: {
    	run : [0,90,true]
    }
};
imageData2 = {
	images: ['/img/horse.png'],
	frames: {width:128, height:128},
	framerate: 20,
	animations: {
		run : { frames : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
			next:true
		}
	}
};


//on ready
$(function() {
	//init canvas
	var firstCanvas = new SpriteAnim('canvas');
	var secondCanvas = new SpriteAnim('canvas2');

	//first canvas actions
	$('.canvas_1 input.start_1').click(function() {
		firstCanvas.start(imageData,'run',false,true);
	});
	$('.canvas_1 input.start_2').click(function() {
		firstCanvas.start(imageData2,'run',false,false);
	});
	$('.canvas_1 input.stop').click(function() {
		firstCanvas.stop();
	});


	//second canvas actions
	$('.canvas_2 input.start_1').click(function() {
		secondCanvas.start(imageData,'run',false,false);
	});
	$('.canvas_2 input.start_2').click(function() {
		secondCanvas.start(imageData2,'run',false,true);
	});
	$('.canvas_2 input.stop').click(function() {
		secondCanvas.stop();
	});

});



