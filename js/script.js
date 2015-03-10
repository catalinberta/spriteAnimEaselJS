// Preload assets with PreloadJS
var myQueue = new createjs.LoadQueue(true);
myQueue.loadFile({id:"car", src:"./img/car.jpg"});
myQueue.loadFile({id:"horse", src:"./img/horse.jpg"});
myQueue.loadFile({id:"car2", src:"./img/car.jpg"});
myQueue.loadFile({id:"horse2", src:"./img/horse.jpg"});
myQueue.on("complete", loadAssets, this)

// EaselJS Sprite Sheets
// SpriteSheet Documentation http://createjs.com/Docs/EaselJS/classes/SpriteSheet.html
function loadAssets() {
	imageData = {
	    images: [myQueue.getResult('car')], // Image element from PreloadJS LoadQueue, or any preloader
	    frames: {width:126, height:126}, // Frame sizes
	    framerate: 30, // Spritesheet framerate
	    animations: {
	    	run : [0,90,true]
	    }
	};
	imageData2 = {
		images: [myQueue.getResult('horse')],
		frames: {width:128, height:128},
		framerate: 20,
		animations: {
			run : { frames : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
				next:true
			}
		}
	};
	imageData3 = {
	    images: [myQueue.getResult('car2')], // Image element from PreloadJS LoadQueue, or any preloader
	    frames: {width:126, height:126}, // Frame sizes
	    framerate: 30, // Spritesheet framerate
	    animations: {
	    	run : [0,90,true]
	    }
	};
	imageData4 = {
		images: [myQueue.getResult('horse2')],
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
		secondCanvas.start(imageData3,'run',false,false);
	});
	$('.canvas_2 input.start_2').click(function() {
		secondCanvas.start(imageData4,'run',false,true);
	});
	$('.canvas_2 input.stop').click(function() {
		secondCanvas.stop();
	});

});



