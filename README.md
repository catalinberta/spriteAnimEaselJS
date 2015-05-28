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

Load

[EaselJS v0.8.0+](https://code.createjs.com/easeljs-0.8.0.min.js)


[spritecontainer.js](https://github.com/catalinberta/SpriteAnim/blob/9edf4ae27f8997c1f214424b7d3f516db4803d47/js/spritecontainer.js)


[spritestage.js](https://github.com/catalinberta/SpriteAnim/blob/79737c90a9d8e3df0c122454d7b855b485ef46f3/js/spritestage.js)



And my “snippet”

[SpriteAnim.js](https://github.com/catalinberta/SpriteAnim/blob/master/js/SpriteAnim.js)

It's very important that you get this version of spritestage.js, as it is a custom version with a fix from one of the CreateJS devs who fixed an important issue with loading the spritesheets before rendering in WebGL, and it is not yet available in EaselJS, not at this point at least.

Create the html canvas element
`<canvas id="canvas_id_here"></canvas>`

Define your EaselJS Spritesheet objects:
```
    var imageData = {
        images: ['/path/to/image.jpg'], // Path to image || preferably preloaded
        frames: {width:126, height:126}, // Frame sizes
        framerate: 30, // Spritesheet framerate
        animations: {
            run : [0,120,true] // Range of frames, boolean whether to repeat animation
        }
    };
```
EaselJS Spritesheet documentation [here](http://createjs.com/Docs/EaselJS/classes/SpriteSheet.html)

Initiate SpriteAnim on a canvas element
`var myCanvas = new SpriteAnim('canvas_id_here');`

Run spritesheet animation
`myCanvas.start(imageData,'run',false,false);`

@Param1: easeljs spritesheet object

@Param2: animation name specified in spritesheet object

@Param3: custom className for the canvas in question || false

@Param4: anonymous callback function that loads when spritesheet finishes || false


#Methods
####**Start**
obj.start(spritesheetObject,width,height,className,callback)

####**Stop**
obj.stop()

i.e. `myCanvas.stop()`

#Preloading

It's recommended that you preload all of the spritesheets that you are planning to use and if you do so, you need to preload an image for each animation or canvas you have concurrently. For example, if you have two running animations at the same time with the same spritesheet, you need to preload it twice under different variables/identifiers, as preloaded objects cannot serve WebGL rendering at the same time. 

I will update this as soon as a fix will be available.

