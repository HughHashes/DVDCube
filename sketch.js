var x = 50;
var y = 50;
var changeX = 5;
var changeY = 5;
var img;

function preload() {
  img = loadImage("budi.png");
}

function setup() {
    createCanvas(600, 400);
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
    image(img, x, y, 100, 100);
}

function bounce(){
    if(x < 0){
        changeX = -changeX;
    };
    
    if(x + 100 > 600){
        changeX = -changeX;
    };
    
    if(y < 0){
        changeY = -changeY;
    };
    
    if(y + 100 > 400){
        changeY = -changeY;
    };
    
    x += changeX;
    y += changeY;
}