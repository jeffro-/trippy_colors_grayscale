var brightness = 0;
var radius = 200; // radius of the circle

// time
var t = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    //background
	background(brightness);
	brightness = 255/2 * sin(t) + 255/2;
	t += map(sin(frameCount/30.0),-1,1,0.005,0.2);
    
    //shapes
    lineAnimation();
    circleAnimation();
}

function lineAnimation(){
    // map sin to animate the lines
    var lineX = sin(t)*200;
    
    // lines
    line(width/2 - lineX, height/2 + 200, width/2 + lineX, height/2 - 200);
    line(lineX + width/2, lineX + width/2, lineX*4, lineX*4);
}

function circleAnimation(){
    // map the brightness to the size of the circle
    radius = map(brightness, 0, 255, 200, 50);

    // colors
    noStroke();
    fill(map(brightness, 0, 255, 255, 0));
    
    ellipse(width/2, height/2, radius, radius);
}


function windowResized(){
    // this function resizes the canvas every time you resize the window
    resizeCanvas(windowWidth, windowHeight);
}