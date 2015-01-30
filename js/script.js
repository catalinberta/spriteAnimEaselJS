// EaselJS Sprite Sheets
// SpriteSheet Documentation http://createjs.com/Docs/EaselJS/classes/SpriteSheet.html
var imageData = {
    images: ["./img/car.jpg"],
    frames: {width:126, height:126},
    framerate: 30,
    animations: {
        run : { frames : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120], 
        			next:false 
				}
    }
};
var imageData2 = {
    images: ["./img/horse.png"],
    frames: {width:128, height:128},
    framerate: 20,
    animations: {
        run : { frames : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120], 
        			next:false 
    			}
    }
};

$(function() {

	//init
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



