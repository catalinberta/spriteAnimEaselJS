# SpriteAnim
Create easy sprite animations using EaselJS

This is merely a code snippet that has a basic setup for sprite
animations. It runs with EaselJS v0.8.0+
I mainly created this because I had a hard time going through
EaselJS' documentation and it took some trial and error to find 
the right setup.

If you have a DOM app and want to create some fast spritesheets
in WebGL, which fall back to Canvas, then this might be of help.
EaselJS has everything covered for you, including use of 
requestAnimationFrame.

#Usage

Define your EaselJS Spritesheet objects:
```
    var imageData = {
        images: ['/path/to/image.jpg'], // Path to image
        frames: {width:126, height:126}, // Frame sizes
        framerate: 30, // Spritesheet framerate
        animations: {
            run : [0,120,true] // Range of frames, boolean whether to repeat animation
        }
    };
```
Initiate SpriteAnim on a canvas element
`var myCanvas = new SpriteAnim('canvas_id_here');`

Run spritesheet animation
`myCanvas.start(imageData,126,126,false);`

#Methods
####**Start**
obj.start(spritesheetObject,width,height,className)

####**Stop**
obj.stop()

i.e. `myCanvas.stop()`


There you have it, a very easy way to create Sprite Animations in WebGL with fallback to canvas.
I use it to create smooth Sprite Animations in various places on a webpage.
