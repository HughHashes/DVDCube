var x = 50;
var y = 50;
var x1 = 50;
var y1 = 100;
var x2 = 100;
var y2 = 100;
var x3 = 200;
var y3 = 100;
var x4 = 200;
var y4 = 50;
var x5 = 50;
var y5 = 200;
var changeX = 5;
var changeY = 3;
var changeX1 = 5;
var changeY1 = -2;
var changeX2 = -5;
var changeY2 = -6;
var changeX3 = 4;
var changeY3 = 6;
var changeX4 = -4;
var changeY4 = 6;
var changeX4 = -4;
var changeY4 = 6;
var changeX4 = -2;
var changeY4 = -6;
var img, img1, img2, img3, img4, img5;
var cnv;

function preload() {
  img = loadImage("net.png");
  img1 = loadImage("house.png");
  img2 = loadImage("bb.jpg");
  img3 = loadImage("13.jpg");
  img4 = loadImage("new.jpg");
}

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    // positions canvas 50px to the right and 100px
    // below upper left corner of the window
    cnv.position(0, 0);
}

function draw() {
  strokeWeight(0);
  background(255);
  
  display();
  bounce();
  bounce1();
  bounce2();
  bounce3();
  bounce4();
  
}

function display(){
    //display ball
    stroke(255);
    strokeWeight(4);
    fill(50,250,50);
    image(img, x, y, 100, 100);
    
    image(img1, x1, y1, 150, 100);
    
    image(img2, x2, y2, 100, 150);
    
    image(img3, x3, y3, 100, 150);
    
    image(img4, x4, y4, 200, 200);
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
    
    if(y + 100 > windowHeight){
        changeY = -changeY;
    };
    
    x += changeX;
    y += changeY;
}

function bounce1(){
    if(x1 < 0){
        changeX1 = -changeX1;
    };
    
    if(x1 + 150 > windowWidth){
        changeX1 = -changeX1;
    };
    
    if(y1 < 0){
        changeY1 = -changeY1;
    };
    
    if(y1 + 100 > windowHeight){
        changeY1 = -changeY1;
    };
    
    x1 += changeX1;
    y1 += changeY1;
}

function bounce2(){
    if(x2 < 0){
        changeX2 = -changeX2;
    };
    
    if(x2 + 100 > windowWidth){
        changeX2 = -changeX2;
    };
    
    if(y2 < 0){
        changeY2 = -changeY2;
    };
    
    if(y2 + 150 > windowHeight){
        changeY2 = -changeY2;
    };
    
    x2 += changeX2;
    y2 += changeY2;
}

function bounce3(){
    if(x3 < 0){
        changeX3 = -changeX3;
    };
    
    if(x3 + 100 > windowWidth){
        changeX3 = -changeX3;
    };
    
    if(y3 < 0){
        changeY3 = -changeY3;
    };
    
    if(y3 + 150 > windowHeight){
        changeY3 = -changeY3;
    };
    
    x3 += changeX3;
    y3 += changeY3;
}

function bounce4(){
    if(x4 < 0){
        changeX4 = -changeX4;
    };
    
    if(x4 + 200 > windowWidth){
        changeX4 = -changeX4;
    };
    
    if(y4 < 0){
        changeY4 = -changeY4;
    };
    
    if(y4 + 200 > windowHeight){
        changeY4 = -changeY4;
    };
    
    x4 += changeX4;
    y4 += changeY4;
}