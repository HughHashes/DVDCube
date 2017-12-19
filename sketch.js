var x = 50;
var y = 50;
var changeX = 3;
var changeY = 3;
var img;
var cnv;

function preload() {
  img = loadImage("dvd.jpg");
}

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    // positions canvas 50px to the right and 100px
    // below upper left corner of the window
    cnv.position(0, 0);
}

function draw() {
  strokeWeight(0);
  background(0);
  
  display();
  bounce();
  
}

function display(){
    //display ball
    stroke(255);
    strokeWeight(4);
    fill(50,250,50);
    image(img, x, y, 100, 80);
}

function bounce(){
    if(x < 0){
        changeX = -changeX;
    };
    
    if(x + 100 > windowWidth){
        changeX = -changeX;
    };
    
    if(y < 0){
        changeY = -changeY;
    };
    
    if(y + 80 > windowHeight){
        changeY = -changeY;
    };
    
    x += changeX;
    y += changeY;
}