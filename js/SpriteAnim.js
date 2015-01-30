/*
**
	** SpriteAnim v0.1.0
	** catalinberta (at) gmail (dot) com
	** 
	** Create easy sprite animations using EaselJS
	**
	** This is merely a code snippet that has a basic setup for sprite
	** animations. It runs with EaselJS v0.8.0+
	** I mainly created this because I had a hard time going through
	** EaselJS' documentation and it took some trial and error to find 
	** the right setup.
	**
	** If you have a DOM app and want to create some fast spritesheets
	** in WebGL, which fall back to Canvas, then this might be of help.
	** EaselJS has everything covered for you, including use of 
	** requestAnimationFrame.
** 
*/
function SpriteAnim(canvasId) {
	this.canvasId = canvasId;
}
SpriteAnim.prototype.start = function(imageData,canvasWidth,canvasHeight) {
	createjs.Ticker.off("tick", this.animTicker);
	this.canvasWidth = canvasWidth,
	this.canvasHeight = canvasHeight,
	this.stage = new createjs.Stage(this.canvasId),
	this.stage.canvas.width = this.canvasWidth,
	this.stage.canvas.height = this.canvasHeight,
	this.imageData = imageData,
	this.ss = new createjs.SpriteSheet(this.imageData);
	this.animation = new createjs.Sprite(this.ss);
	this.stage.addChild(this.animation);
	this.animation.gotoAndPlay("run");
	this.animTicker = createjs.Ticker.on("tick", this.stage);
}
SpriteAnim.prototype.stop = function() {
	createjs.Ticker.off("tick", this.animTicker);
}