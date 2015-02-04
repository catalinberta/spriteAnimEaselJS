/*
**
	** SpriteAnim v0.1.0
	** catalinberta (at) gmail (dot) com
	** https://github.com/catalinberta/SpriteAnim
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
	this.init(canvasId);
}

SpriteAnim.prototype.init = function(canvasId) {
	this.canvasId = canvasId;
	this.stage = new createjs.SpriteStage(this.canvasId);
}

SpriteAnim.prototype.start = function(imageData,animationName,className,runOnComplete) {
	createjs.Ticker.off("tick", this.animTicker); // Stop any previous Tickers for this instance
	if(this.stage.getChildAt(0)) { this.stage.removeChildAt(0) } // If child already exists, remove it
	this.imageData = imageData;
	this.canvasWidth = imageData.frames.width;
	this.canvasHeight = imageData.frames.height;
	this.runOnComplete = runOnComplete;
	this.stage.canvas.width = this.canvasWidth;
	this.stage.canvas.height = this.canvasHeight;
	this.stage.updateViewport(this.canvasWidth,this.canvasHeight);
	this.animTicker = createjs.Ticker.on("tick", this.stage);
	this.className = className;
	this.spritesheet = new createjs.SpriteSheet(this.imageData);
	this.animation = new createjs.Sprite(this.spritesheet);
	this.stage.addChild(this.animation);
	this.animationName = animationName;
	this.animation.gotoAndPlay(this.animationName);

	if(this.className) {
		this.stage.canvas.className = this.stage.canvas.className + ' ' + this.className;
	}

	if(this.runOnComplete) {
		this.animation.on('animationend', this.onComplete)
	}
}

SpriteAnim.prototype.stop = function() {
	createjs.Ticker.off("tick", this.animTicker);
}

SpriteAnim.prototype.onComplete = function() {
	// On complete code here
}