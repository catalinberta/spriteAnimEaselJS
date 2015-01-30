//preload spritesheets with PreloadJS
var spritesheetQueue = new createjs.LoadQueue();
spritesheetQueue.on('complete',loadSpritesheetObjects);
spritesheetQueue.loadManifest([
    {id: "car", src: "/img/car.jpg"},
    {id: "horse", src: "/img/horse.png"}
], true);

// EaselJS Sprite Sheets
// SpriteSheet Documentation http://createjs.com/Docs/EaselJS/classes/SpriteSheet.html
var imageData, imageData2;
function loadSpritesheetObjects() {
	imageData = {
	    images: [spritesheetQueue.getResult("car")], // Image element from PreloadJS LoadQueue
	    frames: {width:126, height:126}, // Frame sizes
	    framerate: 30, // Spritesheet framerate
	    animations: {
	        run : { frames : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30], // Animation frames
	        			next:true // Repeat animation
					}
	    }
	};
	imageData2 = {
	    images: [spritesheetQueue.getResult("horse")],
	    frames: {width:128, height:128},
	    framerate: 20,
	    animations: {
	        run : { frames : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
	        			next:true
	    			}
	    }
	};
}

//on ready
$(function() {
	//init canvas
	var firstCanvas = new SpriteAnim('canvas');
	var secondCanvas = new SpriteAnim('canvas2');

	//first canvas actions
	$('.canvas_1 input.start_1').click(function() {
		firstCanvas.start(imageData,126,126);
	});
	$('.canvas_1 input.start_2').click(function() {
		firstCanvas.start(imageData2,128,128);
	});
	$('.canvas_1 input.stop').click(function() {
		firstCanvas.stop();
	});


	//second canvas actions
	$('.canvas_2 input.start_1').click(function() {
		secondCanvas.start(imageData,126,126);
	});
	$('.canvas_2 input.start_2').click(function() {
		secondCanvas.start(imageData2,128,128);
	});
	$('.canvas_2 input.stop').click(function() {
		secondCanvas.stop();
	});

});



